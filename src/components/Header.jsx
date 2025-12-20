import React, { useState, useEffect } from "react";

export default function Header({ onToggleDark }) {
	const [dark, setDark] = useState(() =>
		document.documentElement.classList.contains("dark")
	);

	useEffect(() => {
		if (dark) document.documentElement.classList.add("dark");
		else document.documentElement.classList.remove("dark");
		try {
			localStorage.setItem("bv-dark", dark);
		} catch (e) {}
	}, [dark]);

	useEffect(() => {
		const v = localStorage.getItem("bv-dark");
		if (v === "true") setDark(true);
	}, []);

	return (
		<header className="w-full bg-white dark:bg-gray-800 shadow-sm">
			<div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center md:items-start justify-between space-y-3 md:space-y-0">
				<div className="flex items-center space-x-3 w-full md:w-auto">
					<img
						src="/school_logo.jpg"
						alt="Bharti Vidyapeeth Logo"
						className="w-12 h-12 md:w-20 md:h-18 object-contain"
					/>
					<div className="ml-2">
						<h1 className="text-xl md:text-3xl font-bold text-brand">
							Bharti Vidyapeeth Alumni Association
						</h1>
						<p className="text-sm md:text-lg text-gray-600 dark:text-gray-300 hidden sm:block">
							Rani Kothi, Williams Town, B. Deoghar, Jharkhand, 814142
						</p>
					</div>
				</div>
				<div className="flex items-center space-x-3">
					<span className="text-sm text-gray-500 hidden sm:inline">
						Connecting BVP-alumni worldwide
					</span>
					<button
						onClick={() => setDark((d) => !d)}
						className="px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded transition-smooth text-sm"
					>
						{dark ? "Light" : "Dark"}
					</button>
				</div>
			</div>
		</header>
	);
}
