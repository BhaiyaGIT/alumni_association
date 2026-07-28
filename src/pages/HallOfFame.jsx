import React from "react";
import { Link } from "react-router-dom";
import { getHallOfFame } from "../utils/alumni";

const medals = ["🥇", "🥈", "🥉"];

export default function HallOfFame() {
	const entries = getHallOfFame();

	return (
		<div className="space-y-4">
			<div>
				<h2 className="text-2xl font-semibold">Hall of Fame</h2>
				<p className="text-sm text-gray-500 dark:text-gray-400">
					Celebrating our alumni's standout results in national competitive
					exams.
				</p>
			</div>

			<div className="space-y-3">
				{entries.map((entry, i) => {
					const imgSrc = entry.alum.image?.startsWith("/")
						? entry.alum.image
						: `/${entry.alum.image}`;
					return (
						<Link
							key={entry.alum.id}
							to={`/alumni/${entry.alum.id}`}
							className="flex items-center gap-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 hover:shadow-md transition-all"
						>
							<div className="text-2xl w-8 text-center shrink-0">
								{medals[i] || `#${i + 1}`}
							</div>
							<img
								src={imgSrc}
								alt={entry.alum.name}
								className="w-14 h-14 rounded-full object-cover border shrink-0"
							/>
							<div className="flex-1 min-w-0">
								<div className="font-semibold text-brand truncate">
									{entry.alum.name}
								</div>
								<div className="text-sm text-gray-600 dark:text-gray-300 break-words">
									{entry.achievement}
								</div>
							</div>
							<span className="text-xs px-2 py-1 rounded-full bg-brand/10 text-brand shrink-0">
								{entry.exam}
							</span>
						</Link>
					);
				})}
			</div>

			{entries.length === 0 && (
				<div className="text-sm text-gray-500">
					No ranked achievements to display yet.
				</div>
			)}
		</div>
	);
}
