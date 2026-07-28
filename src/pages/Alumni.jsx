import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import alumniData from "../data/alumniData";
import AlumniCard from "../components/AlumniCard";
import { getField, getAllFields } from "../utils/alumni";

const SORTS = {
	"batch-desc": { label: "Batch (newest)", fn: (a, b) => b.batch - a.batch },
	"batch-asc": { label: "Batch (oldest)", fn: (a, b) => a.batch - b.batch },
	"name-asc": {
		label: "Name (A–Z)",
		fn: (a, b) => a.name.localeCompare(b.name),
	},
};

export default function Alumni() {
	const [searchParams, setSearchParams] = useSearchParams();
	const [search, setSearch] = useState("");
	const [batch, setBatch] = useState(searchParams.get("batch") || "all");
	const [field, setField] = useState("all");
	const [sort, setSort] = useState("batch-desc");

	// Keep the batch filter in sync with the ?batch= query param
	// (e.g. navigating from a Sidebar quick link).
	useEffect(() => {
		setBatch(searchParams.get("batch") || "all");
	}, [searchParams]);

	const onBatchChange = (value) => {
		setBatch(value);
		if (value === "all") {
			searchParams.delete("batch");
		} else {
			searchParams.set("batch", value);
		}
		setSearchParams(searchParams, { replace: true });
	};

	const batches = useMemo(() => {
		const s = new Set(alumniData.map((a) => a.batch));
		return ["all", ...Array.from(s).sort((a, b) => b - a)];
	}, []);

	const fields = useMemo(() => ["all", ...getAllFields()], []);

	const filtered = useMemo(() => {
		const list = alumniData.filter((a) => {
			if (batch !== "all" && String(a.batch) !== String(batch)) return false;
			if (field !== "all" && getField(a) !== field) return false;
			if (search && !`${a.name}`.toLowerCase().includes(search.toLowerCase()))
				return false;
			return true;
		});
		return [...list].sort(SORTS[sort].fn);
	}, [batch, field, search, sort]);

	const resetFilters = () => {
		setSearch("");
		setField("all");
		setSort("batch-desc");
		onBatchChange("all");
	};

	return (
		<div className="space-y-4">
			<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
				<h2 className="text-2xl font-semibold">Alumni</h2>
				<div className="flex flex-col sm:flex-row sm:flex-wrap gap-2">
					<input
						className="w-full sm:w-auto px-3 py-2 rounded border dark:bg-gray-700 dark:border-gray-600"
						placeholder="Search by name"
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					/>
					<div className="grid grid-cols-3 sm:flex gap-2">
						<select
							className="w-full px-3 py-2 rounded border dark:bg-gray-700 dark:border-gray-600"
							value={batch}
							onChange={(e) => onBatchChange(e.target.value)}
							aria-label="Filter by batch"
						>
							{batches.map((b) => (
								<option key={b} value={b}>
									{b === "all" ? "All batches" : b}
								</option>
							))}
						</select>
						<select
							className="w-full px-3 py-2 rounded border dark:bg-gray-700 dark:border-gray-600"
							value={field}
							onChange={(e) => setField(e.target.value)}
							aria-label="Filter by field"
						>
							{fields.map((f) => (
								<option key={f} value={f}>
									{f === "all" ? "All fields" : f}
								</option>
							))}
						</select>
						<select
							className="w-full px-3 py-2 rounded border dark:bg-gray-700 dark:border-gray-600"
							value={sort}
							onChange={(e) => setSort(e.target.value)}
							aria-label="Sort alumni"
						>
							{Object.entries(SORTS).map(([key, { label }]) => (
								<option key={key} value={key}>
									{label}
								</option>
							))}
						</select>
					</div>
				</div>
			</div>

			<div className="flex items-center justify-between text-sm text-gray-500">
				<span>
					Showing {filtered.length} of {alumniData.length} alumni
				</span>
				{(search || batch !== "all" || field !== "all") && (
					<button
						onClick={resetFilters}
						className="text-brand hover:underline"
					>
						Clear filters
					</button>
				)}
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
				{filtered.map((a) => (
					<AlumniCard key={a.id} alum={a} />
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
