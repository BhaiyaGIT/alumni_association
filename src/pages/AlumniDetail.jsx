import React from "react";
import { Link, useParams } from "react-router-dom";
import { getAlumById, getField } from "../utils/alumni";
import NotFound from "./NotFound";

export default function AlumniDetail() {
	const { id } = useParams();
	const alum = getAlumById(id);

	if (!alum) return <NotFound />;

	const imgSrc = alum.image?.startsWith("/") ? alum.image : `/${alum.image}`;
	const objectPosition = alum.focal
		? typeof alum.focal === "string"
			? alum.focal
			: `${alum.focal.x}% ${alum.focal.y}%`
		: "center";

	return (
		<div className="space-y-6">
			<Link
				to="/alumni"
				className="inline-flex items-center gap-1 text-sm text-brand hover:underline"
			>
				← Back to Alumni
			</Link>

			<div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
				<div className="flex flex-col md:flex-row">
					<img
						src={imgSrc}
						alt={alum.name}
						className="w-full md:w-72 h-72 md:h-auto object-cover"
						style={{ objectPosition }}
					/>
					<div className="p-6 flex-1">
						<div className="flex flex-wrap items-center gap-3">
							<h1 className="text-2xl font-bold text-brand">{alum.name}</h1>
							<span className="text-xs px-2 py-1 rounded-full bg-brand/10 text-brand">
								{getField(alum)}
							</span>
						</div>
						<p className="text-sm text-amber-700 mt-1">
							Batch {alum.batch} · {alum.duration}
						</p>
						<p className="mt-3 text-gray-800 dark:text-gray-200">
							{alum.profession}
						</p>

						<div className="grid grid-cols-2 gap-4 mt-5 max-w-xs">
							<div className="bg-slate-100 dark:bg-gray-700 rounded p-3 text-center">
								<div className="text-xs text-gray-500 dark:text-gray-300">
									Class 10
								</div>
								<div className="text-lg font-semibold">
									{alum.marks?.tenth || "N/A"}
								</div>
							</div>
							<div className="bg-slate-100 dark:bg-gray-700 rounded p-3 text-center">
								<div className="text-xs text-gray-500 dark:text-gray-300">
									Class 12
								</div>
								<div className="text-lg font-semibold">
									{alum.marks?.twelfth || "N/A"}
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="px-6 pb-6 space-y-4">
					{alum.bio && (
						<div>
							<h3 className="font-semibold text-sm mb-1">About</h3>
							<p className="text-sm text-gray-600 dark:text-gray-300">
								{alum.bio}
							</p>
						</div>
					)}

					{alum.achievements?.length > 0 && (
						<div>
							<h3 className="font-semibold text-sm mb-1">Achievements</h3>
							<ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300 list-disc list-inside">
								{alum.achievements.map((a, i) => (
									<li key={i}>{a}</li>
								))}
							</ul>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
