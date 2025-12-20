import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
	return (
		<aside className="bg-white dark:bg-gray-800 rounded p-4 shadow-sm sticky top-6">
			<h3 className="text-sm font-semibold mb-3">Quick Links</h3>
			<ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
				<li>
					<Link
						to="/alumni?batch=2020"
						className="hover:text-brand transition-smooth"
					>
						Batch-wise Alumni
					</Link>
				</li>
				<li>
					<Link
						to="/events"
						className="hover:text-brand transition-smooth"
					>
						Upcoming Events
					</Link>
				</li>
				<li>
					<a
						href="#gallery"
						className="hover:text-brand transition-smooth"
					>
						Gallery
					</a>
				</li>
			</ul>
		</aside>
	);
}
