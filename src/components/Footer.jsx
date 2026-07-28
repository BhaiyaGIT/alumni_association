import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
	return (
		<footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-8">
			<div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
				<div>
					<h4 className="font-semibold text-brand">
						Bharti Vidyapeeth Alumni Association
					</h4>
					<p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
						Rani Kothi, Williams Town, B. Deoghar, Jharkhand, 814142
					</p>
					<p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
						Email: alumni@bhartividyapeeth.edu
					</p>
				</div>

				<div>
					<h4 className="font-semibold text-sm">Explore</h4>
					<ul className="mt-2 space-y-1 text-sm text-gray-500 dark:text-gray-400">
						<li>
							<Link to="/alumni" className="hover:text-brand transition-smooth">
								Alumni
							</Link>
						</li>
						<li>
							<Link
								to="/hall-of-fame"
								className="hover:text-brand transition-smooth"
							>
								Hall of Fame
							</Link>
						</li>
						<li>
							<Link to="/gallery" className="hover:text-brand transition-smooth">
								Gallery
							</Link>
						</li>
						<li>
							<Link to="/events" className="hover:text-brand transition-smooth">
								Events
							</Link>
						</li>
					</ul>
				</div>

				<div>
					<h4 className="font-semibold text-sm">Get in touch</h4>
					<ul className="mt-2 space-y-1 text-sm text-gray-500 dark:text-gray-400">
						<li>
							<Link
								to="/contact"
								className="hover:text-brand transition-smooth"
							>
								Contact us
							</Link>
						</li>
						<li>
							<a
								href="mailto:alumni@bhartividyapeeth.edu"
								className="hover:text-brand transition-smooth"
							>
								Email the association
							</a>
						</li>
					</ul>
				</div>
			</div>

			<div className="border-t border-gray-100 dark:border-gray-700">
				<div className="max-w-7xl mx-auto px-4 py-4 text-center text-xs text-gray-400">
					© {new Date().getFullYear()} Bharti Vidyapeeth Alumni Association —
					All rights reserved.
				</div>
			</div>
		</footer>
	);
}
