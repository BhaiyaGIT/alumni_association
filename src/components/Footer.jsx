import React from "react";

export default function Footer() {
	return (
		<footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-8">
			<div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between">
				<div className="text-sm">
					© {new Date().getFullYear()} Bharti Vidyapeeth Alumni Association —
					All rights reserved.
				</div>
				<div className="flex items-center space-x-3 mt-3 md:mt-0">
					<a
						href="#"
						className="text-gray-500 hover:text-brand transition-smooth"
					>
						Twitter
					</a>
					<a
						href="#"
						className="text-gray-500 hover:text-brand transition-smooth"
					>
						LinkedIn
					</a>
					<a
						href="#"
						className="text-gray-500 hover:text-brand transition-smooth"
					>
						Facebook
					</a>
				</div>
			</div>
		</footer>
	);
}
