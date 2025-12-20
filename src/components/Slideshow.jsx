import React, { useEffect, useState } from "react";

const defaultImages = [
	"/baba.jpg",
	"/baba2.jpg",
	"/cs_lab.jpg",
	"/lab.jpg",
	"/library.jpg",
	"/news1.jpg",
	"/principal.jpg",
	"/principal2.jpg",
	"/principal3.jpg",
	"/principal4.jpg",
	"/raj_aryan.jpg",
	"/raj_aryan2.jpg",
	"/ritik_prize.jpg",
	"/ritik_prize2.jpg",
	"/ritik_rahul.jpg",
	"/ritik_stage.jpg",
	"/ritikspeech.jpg",
	"/satakshi_anjali_kalpana.jpg",
	"/school.jpg",
	"/school1.jpg",
	"/sing.jpg",
	"/taiquando.jpg",
	"/taiquando2.jpg",
];

export default function Slideshow({ images = defaultImages, interval = 3000 }) {
	const [index, setIndex] = useState(0);
	const [isPaused, setIsPaused] = useState(false);
	const [slides, setSlides] = useState([]);
	const [touchStartX, setTouchStartX] = useState(null);

	// Preload images and filter out broken ones
	useEffect(() => {
		let mounted = true;
		const loaders = images.map(
			(src) =>
				new Promise((resolve) => {
					const img = new Image();
					img.src = src;
					img.onload = () => resolve({ src, ok: true });
					img.onerror = () => resolve({ src, ok: false });
				})
		);
		Promise.all(loaders).then((results) => {
			if (!mounted) return;
			const ok = results.filter((r) => r.ok).map((r) => r.src);
			setSlides(ok);
			setIndex(0);
		});
		return () => {
			mounted = false;
		};
	}, [images]);

	useEffect(() => {
		if (!slides.length || isPaused) return;
		const id = setInterval(
			() => setIndex((i) => (i + 1) % slides.length),
			interval
		);
		return () => clearInterval(id);
	}, [slides.length, interval, isPaused]);

	const onTouchStart = (e) => setTouchStartX(e.touches[0].clientX);
	const onTouchEnd = (e) => {
		if (touchStartX == null) return;
		const endX = e.changedTouches[0].clientX;
		const dx = endX - touchStartX;
		if (dx < -40) setIndex((i) => (i + 1) % slides.length);
		else if (dx > 40) setIndex((i) => (i - 1 + slides.length) % slides.length);
		setTouchStartX(null);
	};

	if (!slides.length)
		return (
			<div className="rounded overflow-hidden shadow-sm h-64 md:h-96 bg-gray-100 flex items-center justify-center">
				<span className="text-gray-500">No images available</span>
			</div>
		);

	return (
		<div
			className="rounded overflow-hidden shadow-sm h-64 md:h-96 relative touch-pan-y"
			onMouseEnter={() => setIsPaused(true)}
			onMouseLeave={() => setIsPaused(false)}
			onTouchStart={onTouchStart}
			onTouchEnd={onTouchEnd}
			aria-live="polite"
		>
			{slides.map((src, i) => (
				<img
					key={i}
					src={src}
					alt={`slide-${i + 1}`}
					loading="lazy"
					className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ${
						i === index ? "opacity-100" : "opacity-0"
					}`}
				/>
			))}

			{/* Prev / Next controls (touch-friendly) */}
			<button
				className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full md:p-3 focus:outline-none"
				onClick={() => setIndex((i) => (i - 1 + slides.length) % slides.length)}
				aria-label="Previous slide"
			>
				‹
			</button>
			<button
				className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full md:p-3 focus:outline-none"
				onClick={() => setIndex((i) => (i + 1) % slides.length)}
				aria-label="Next slide"
			>
				›
			</button>

			<div className="absolute left-4 bottom-4 bg-black/40 text-white px-3 py-1 rounded text-sm">
				Bharti Vidyapeeth
			</div>

			<div className="absolute right-4 bottom-4 flex space-x-2">
				{slides.map((_, i) => (
					<button
						key={i}
						onClick={() => setIndex(i)}
						className={`w-3 h-3 rounded-full ${
							i === index ? "bg-white" : "bg-white/50"
						} focus:outline-none`}
						aria-label={`Go to slide ${i + 1}`}
					></button>
				))}
			</div>
		</div>
	);
}
