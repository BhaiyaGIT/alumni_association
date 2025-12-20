import React from "react";

export default function AlumniCard({ alum }) {
	const imgSrc = alum?.image?.startsWith("/") ? alum.image : `/${alum?.image}`;

	return (
		<div className="bg-slate-100 dark:bg-gray-800 rounded shadow-sm p-4 hover:shadow-md transition-all duration-300">
			<div className="flex flex-col md:flex-row items-start md:items-center gap-4">
				{/* image focal support: alum.focal can be string like "center top" or { x: 50, y: 40 } percentages */}
				<img
					src={imgSrc}
					alt={alum.name || "alumni"}
					className="w-full md:w-40 h-40 md:h-60 rounded-md object-cover border"
					style={{
						objectPosition: alum.focal
							? typeof alum.focal === "string"
								? alum.focal
								: `${alum.focal.x}% ${alum.focal.y}%`
							: "center",
					}}
				/>

				<div className="flex-1 w-full">
					<h3 className="font-semibold text-brand text-lg">{alum?.name}</h3>

					<span className="text-xs text-amber-700">({alum?.duration})</span>

					<div className="text-sm text-gray-900 dark:text-gray-300 mt-1">
						{alum?.profession}
					</div>
				</div>
			</div>

			<div className="mt-3 text-sm text-gray-600 dark:text-gray-300">
				<p>
					<strong>10th:</strong> {alum?.marks?.tenth || "N/A"} |{" "}
					<strong>12th:</strong> {alum?.marks?.twelfth || "N/A"}
				</p>

				{alum?.bio && <p className="mt-2">{alum.bio}</p>}

				{alum?.achievements?.length > 0 && (
					<>
						<p className="mt-2 text-xs font-semibold text-black dark:text-gray-200">
							Achievements:
						</p>
						<ul className="mt-1 space-y-1 text-xs text-gray-800 dark:text-gray-300 list-disc list-inside">
							{alum.achievements.map((achievement, index) => (
								<li key={index}>{achievement}</li>
							))}
						</ul>
					</>
				)}
			</div>
		</div>
	);
}
