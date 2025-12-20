import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar({ onToggleSidebar }) {
	const [open, setOpen] = useState(false);
	return (
		<nav className="bg-white dark:bg-gray-800 border-t border-b border-gray-100 dark:border-gray-700">
			<div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
				<div className="flex items-center space-x-6">
					<button
						onClick={() => {
							setOpen((o) => !o);
							onToggleSidebar?.();
						}}
						aria-label="Toggle menu"
						className="md:hidden p-3 rounded bg-gray-100 dark:bg-gray-700 text-lg"
					>
						☰
					</button>
					<Link
						to="/"
						className="text-lg font-semibold"
					>
						Home
					</Link>
					<div className="hidden md:flex items-center space-x-4">
						<NavLink
							to="/alumni"
							className={({ isActive }) =>
								isActive
									? "text-brand font-medium"
									: "text-gray-600 dark:text-gray-300"
							}
						>
							Alumni
						</NavLink>
						<NavLink
							to="/events"
							className={({ isActive }) =>
								isActive
									? "text-brand font-medium"
									: "text-gray-600 dark:text-gray-300"
							}
						>
							Events
						</NavLink>
						<NavLink
							to="/about"
							className={({ isActive }) =>
								isActive
									? "text-brand font-medium"
									: "text-gray-600 dark:text-gray-300"
							}
						>
							About
						</NavLink>
						<NavLink
							to="/contact"
							className={({ isActive }) =>
								isActive
									? "text-brand font-medium"
									: "text-gray-600 dark:text-gray-300"
							}
						>
							Contact
						</NavLink>
					</div>
				</div>

				{/* <div className="hidden md:flex items-center space-x-3">
					<a
						className="text-sm text-gray-600 dark:text-gray-300"
						href="#newsletter"
					>
						Subscribe
					</a>
				</div> */}
			</div>

			{/* Mobile links */}
			{open && (
				<div className="md:hidden px-4 pb-4 space-y-2">
					<NavLink
						to="/alumni"
						onClick={() => setOpen(false)}
						className="block py-3 text-base"
					>
						Alumni
					</NavLink>
					<NavLink
						to="/events"
						onClick={() => setOpen(false)}
						className="block py-3 text-base"
					>
						Events
					</NavLink>
					<NavLink
						to="/about"
						onClick={() => setOpen(false)}
						className="block py-3 text-base"
					>
						About
					</NavLink>
					<NavLink
						to="/contact"
						onClick={() => setOpen(false)}
						className="block py-3 text-base"
					>
						Contact
					</NavLink>
				</div>
			)}
		</nav>
	);
}
