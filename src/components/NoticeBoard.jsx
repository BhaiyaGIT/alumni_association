import React from "react";
import notices from "../data/noticesData";

const TYPE_STYLES = {
	event: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
	announcement:
		"bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
	opportunity:
		"bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
	donation:
		"bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
};

export default function NoticeBoard() {
	// Newest first; pinned items float to the top.
	const sorted = [...notices].sort((a, b) => {
		if (a.pinned !== b.pinned) return a.pinned ? -1 : 1;
		return new Date(b.date) - new Date(a.date);
	});

	return (
		<section className="bg-white dark:bg-gray-800 rounded p-6 shadow-sm">
			<h3 className="text-lg font-semibold mb-3">Notice Board</h3>
			<ul className="space-y-3">
				{sorted.map((n) => (
					<li
						key={n.id}
						className="border-l-4 border-brand/60 pl-3 py-1"
					>
						<div className="flex flex-wrap items-center gap-2">
							{n.pinned && (
								<span className="text-xs" title="Pinned">
									📌
								</span>
							)}
							<span className="font-medium">{n.title}</span>
							<span
								className={`text-[10px] uppercase tracking-wide px-2 py-0.5 rounded-full ${
									TYPE_STYLES[n.type] || TYPE_STYLES.announcement
								}`}
							>
								{n.type}
							</span>
							<span className="text-xs text-gray-400">
								{new Date(n.date).toLocaleDateString()}
							</span>
						</div>
						<p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
							{n.body}
						</p>
					</li>
				))}
			</ul>
		</section>
	);
}
