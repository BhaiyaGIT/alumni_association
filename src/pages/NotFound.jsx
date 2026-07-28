import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
	return (
		<div className="flex flex-col items-center justify-center text-center py-20 space-y-4">
			<div className="text-6xl font-bold text-brand">404</div>
			<h2 className="text-2xl font-semibold">Page not found</h2>
			<p className="text-sm text-gray-500 dark:text-gray-400 max-w-md">
				The page you're looking for doesn't exist or may have been moved.
			</p>
			<Link
				to="/"
				className="px-4 py-2 bg-brand text-white rounded hover:opacity-90 transition-smooth"
			>
				Back to Home
			</Link>
		</div>
	);
}
