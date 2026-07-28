// Announcements / notice board. Newest first. `pinned` items are highlighted.
// `type` drives the colored tag: event | announcement | opportunity | donation
const notices = [
	{
		id: 1,
		title: "Annual Alumni Meet 2026 — Registrations Open",
		date: "2026-01-05",
		type: "event",
		pinned: true,
		body: "Join us on 23rd January 2026 at the Bharti Vidyapeeth campus for our annual reunion, cultural programs, and awards. Reconnect with your batchmates!",
	},
	{
		id: 2,
		title: "Share Your Story",
		date: "2025-12-15",
		type: "announcement",
		body: "Are you an alumnus with an achievement to share? Reach out via the Contact page to get featured on our Alumni and Hall of Fame pages.",
	},
	{
		id: 3,
		title: "Mentorship Program for Current Students",
		date: "2025-11-20",
		type: "opportunity",
		body: "We're building a mentorship network. Alumni willing to guide juniors on careers, exams, and college life can volunteer through the Contact page.",
	},
];

export default notices;
