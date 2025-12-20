import React from "react";

export default function About() {
	return (
		<div className="space-y-4">
			<h2 className="text-2xl font-semibold">
				About Bharti Vidyapeeth Alumni Association
			</h2>
			<p className="text-sm text-gray-600 dark:text-gray-300">
				Bharti Vidyapeeth in Rani Kothi aims to foster lifelong relationships
				with former students and provide networking, mentoring and support
				opportunities. This association connects alumni across industries and
				geographies, promoting collaboration and celebrating achievements.
			</p>
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
				<div className="bg-white dark:bg-gray-800 rounded p-4 shadow-sm">
					Vision: To empower every alumnus through community-driven initiatives.
				</div>
				<div className="bg-white dark:bg-gray-800 rounded p-4 shadow-sm">
					Mission: Facilitate mentorship, events, and support for current and
					former students.
				</div>
			</div>
		</div>
	);
}
