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
