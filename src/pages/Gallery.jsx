import React, { useState } from "react";
import gallery from "../data/galleryData";
import Lightbox from "../components/Lightbox";

export default function Gallery() {
	const [openIndex, setOpenIndex] = useState(null);

	return (
		<div className="space-y-4">
			<div>
				<h2 className="text-2xl font-semibold">Gallery</h2>
				<p className="text-sm text-gray-500 dark:text-gray-400">
					Moments from campus life, events, and celebrations. Click any photo
					to enlarge.
				</p>
			</div>

			<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
				{gallery.map((item, i) => (
					<button
						key={i}
						onClick={() => setOpenIndex(i)}
						className="group relative overflow-hidden rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-brand"
						aria-label={`View ${item.caption}`}
					>
						<img
							src={item.src}
							alt={item.caption}
							loading="lazy"
							className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-105"
						/>
						<span className="absolute inset-x-0 bottom-0 bg-black/50 text-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
							{item.caption}
						</span>
					</button>
				))}
			</div>

			<Lightbox
				items={gallery}
				index={openIndex}
				onClose={() => setOpenIndex(null)}
				onNavigate={setOpenIndex}
			/>
		</div>
	);
}
