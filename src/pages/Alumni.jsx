import React, { useMemo, useState } from "react";
import alumniData from "../data/alumniData";
import AlumniCard from "../components/AlumniCard";

export default function Alumni() {
	const [search, setSearch] = useState("");
	const [batch, setBatch] = useState("all");

	const batches = useMemo(() => {
		const s = new Set(alumniData.map((a) => a.batch));
		return ["all", ...Array.from(s).sort((a, b) => b - a)];
	}, []);

	const filtered = alumniData.filter((a) => {
		if (batch !== "all" && String(a.batch) !== String(batch)) return false;
		if (search && !`${a.name}`.toLowerCase().includes(search.toLowerCase()))
			return false;
		return true;
	});

	return (
		<div className="space-y-4">
			<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
				<h2 className="text-2xl font-semibold">Alumni</h2>
				<div className="flex items-center gap-3">
					<input
						className="px-3 py-2 rounded border"
						placeholder="Search by name"
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					/>
					<select
						className="px-3 py-2 rounded border"
						value={batch}
						onChange={(e) => setBatch(e.target.value)}
					>
						{batches.map((b) => (
							<option
								key={b}
								value={b}
							>
								{b}
							</option>
						))}
					</select>
				</div>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
				{filtered.map((a) => (
					<AlumniCard
						key={a.id}
						alum={a}
					/>
				))}
			</div>

			{filtered.length === 0 && (
				<div className="text-sm text-gray-500">
					No alumni match your search.
				</div>
			)}
		</div>
	);
}
