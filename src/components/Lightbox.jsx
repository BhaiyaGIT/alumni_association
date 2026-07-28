import React, { useEffect, useCallback } from "react";

// Fullscreen image viewer. `items` is [{ src, caption }]; `index` is the
// currently shown item (null = closed). Supports Esc, arrow keys, and clicking
// the backdrop to close.
export default function Lightbox({ items, index, onClose, onNavigate }) {
	const isOpen = index !== null && index >= 0;

	const handleKey = useCallback(
		(e) => {
			if (!isOpen) return;
			if (e.key === "Escape") onClose();
			else if (e.key === "ArrowRight")
				onNavigate((index + 1) % items.length);
			else if (e.key === "ArrowLeft")
				onNavigate((index - 1 + items.length) % items.length);
		},
		[isOpen, index, items.length, onClose, onNavigate]
	);

	useEffect(() => {
		if (!isOpen) return;
		window.addEventListener("keydown", handleKey);
		document.body.style.overflow = "hidden";
		return () => {
			window.removeEventListener("keydown", handleKey);
			document.body.style.overflow = "";
		};
	}, [isOpen, handleKey]);

	if (!isOpen) return null;

	const item = items[index];

	return (
		<div
			className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
			onClick={onClose}
			role="dialog"
			aria-modal="true"
		>
			<button
				className="absolute top-4 right-4 text-white text-3xl leading-none"
				onClick={onClose}
				aria-label="Close"
			>
				×
			</button>

			<button
				className="absolute left-4 text-white text-4xl px-3"
				onClick={(e) => {
					e.stopPropagation();
					onNavigate((index - 1 + items.length) % items.length);
				}}
				aria-label="Previous image"
			>
				‹
			</button>

			<figure
				className="max-w-4xl max-h-[85vh] flex flex-col items-center"
				onClick={(e) => e.stopPropagation()}
			>
				<img
					src={item.src}
					alt={item.caption || "gallery image"}
					className="max-h-[75vh] max-w-full object-contain rounded"
				/>
				{item.caption && (
					<figcaption className="text-white/90 text-sm mt-3">
						{item.caption}
					</figcaption>
				)}
			</figure>

			<button
				className="absolute right-4 text-white text-4xl px-3"
				onClick={(e) => {
					e.stopPropagation();
					onNavigate((index + 1) % items.length);
				}}
				aria-label="Next image"
			>
				›
			</button>
		</div>
	);
}
