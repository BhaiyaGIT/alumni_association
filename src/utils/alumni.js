import alumniData from "../data/alumniData";

// Infer a broad "field" for an alum from their profession + achievements text.
// Used to power the Field filter on the Alumni page. Best-effort keyword match.
export function getField(alum) {
	const text = `${alum?.profession || ""} ${(alum?.achievements || []).join(
		" "
	)}`.toLowerCase();

	if (/(mbbs|neet|medical|pmch|doctor)/.test(text)) return "Medical";
	if (/(llb|clat|law|advocate)/.test(text)) return "Law";
	if (/(upsc|bpsc|pcs|civil service|ias|competitive exam)/.test(text))
		return "Civil Services";
	if (/(mba|marketing|management)/.test(text)) return "Management";
	if (/(teacher|faculty|teaching|professor)/.test(text)) return "Teaching";
	if (/(airline|indigo|aviation|pilot|officer)/.test(text)) return "Aviation";
	if (/(b\.?tech|jee|nit|engineer|cse|ece|eee|mechanical|wbjee|gate)/.test(text))
		return "Engineering";
	return "Other";
}

// Distinct, sorted list of fields present in the data (for filter dropdowns).
export function getAllFields() {
	const set = new Set(alumniData.map((a) => getField(a)));
	return Array.from(set).sort();
}

// Look up a single alum by id (string or number).
export function getAlumById(id) {
	return alumniData.find((a) => String(a.id) === String(id));
}

// Exam types we recognise for the Hall of Fame, in display priority order.
const EXAM_PATTERNS = [
	{ exam: "UPSC", re: /upsc[^.]*/i },
	{ exam: "NEET", re: /neet[^.]*rank[^.]*?([\d,]+)/i },
	{ exam: "JEE Advanced", re: /jee\s*advanced[^.]*?([\d,]+)/i },
	{ exam: "JEE Mains", re: /jee\s*mains?[^.]*?([\d,]+)/i },
	{ exam: "CLAT", re: /clat[^.]*?([\d,]+)/i },
	{ exam: "WBJEE", re: /wbjee[^.]*?([\d,]+)/i },
	{ exam: "GATE", re: /gate[^.]*/i },
];

// Parse a rank number ("22,071") to an integer for sorting; NaN if none.
function parseRank(text) {
	const m = text.replace(/,/g, "").match(/(\d{2,})/);
	return m ? parseInt(m[1], 10) : NaN;
}

// Build Hall of Fame entries: for each alum, find their best (lowest-rank)
// recognised competitive-exam achievement. Alumni with no match are excluded.
// Returned sorted by rank ascending (unranked qualifiers like UPSC/GATE last).
export function getHallOfFame() {
	const entries = [];

	for (const alum of alumniData) {
		let best = null;
		for (const achievement of alum.achievements || []) {
			for (const { exam, re } of EXAM_PATTERNS) {
				if (re.test(achievement)) {
					const rank = parseRank(achievement);
					if (!best || (!isNaN(rank) && rank < best.rank)) {
						best = { exam, rank: isNaN(rank) ? Infinity : rank, achievement };
					}
					break; // first matching pattern wins for this achievement
				}
			}
		}
		if (best) {
			entries.push({ alum, ...best });
		}
	}

	return entries.sort((a, b) => a.rank - b.rank);
}
