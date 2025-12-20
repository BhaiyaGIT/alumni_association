import React from "react";
import events from "../data/eventsData";

export default function Events() {
	return (
		<div className="space-y-4">
			<h2 className="text-2xl font-semibold">Events</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
				{events.map((e) => (
					<div
						key={e.id}
						className="bg-white dark:bg-gray-800 rounded p-4 shadow-sm hover:shadow-md transition-smooth"
					>
						<div className="flex items-center justify-between">
							<h4 className="font-semibold">{e.title}</h4>
							<div className="text-sm text-gray-500 dark:text-gray-300">
								{new Date(e.date).toLocaleDateString()}
							</div>
						</div>
						<p className="text-sm text-gray-500 mt-2">{e.description}</p>
						<div className="text-xs text-gray-400 mt-2">
							Location: {e.location}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
