import React from "react";
import Slideshow from "../components/Slideshow";
import Newsletter from "../components/Newsletter";
import alumni from "../data/alumniData";
import events from "../data/eventsData";

const slides = [
	//"/principal5.jpg",
	"/principal3.jpg",
	"/principal4.jpg",
	"/cs_lab.jpg",
	"/lab.jpg",
	"/library.jpg",
	"/baba2.jpg",
	"/school.jpg",
	"/school1.jpg",
	"/taiquando.jpg",
	"/taiquando2.jpg",
	"/ritikspeech.jpg",
	"/raj_aryan2.jpg",
	"/ritik_prize.jpg",
	"/abd_prize.jpg",
	"/ritik_prize2.jpg",
	"/sing.jpg",
	"/ritik_rahul.jpg",
	"/ritik_stage.jpg",
	"/satakshi_anjali_kalpana.jpg",
];

export default function Home() {
	return (
		<div className="space-y-6">
			<Slideshow
				images={slides}
				interval={2000}
			/>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
				<div className="bg-white dark:bg-gray-800 rounded p-4 shadow-sm">
					<h4 className="text-gray-500 text-sm">Total Alumni</h4>
					<div className="text-3xl font-bold">200+</div>
				</div>
				<div className="bg-white dark:bg-gray-800 rounded p-4 shadow-sm">
					<h4 className="text-gray-500 text-sm">Achievements</h4>
					<div className="text-3xl font-bold">100+</div>
				</div>
				<div className="bg-white dark:bg-gray-800 rounded p-4 shadow-sm">
					<h4 className="text-gray-500 text-sm">Upcoming Events</h4>
					<div className="text-3xl font-bold">{events.length}</div>
				</div>
				<div className="bg-white dark:bg-gray-800 rounded p-4 shadow-sm">
					<h4 className="text-gray-500 text-sm">Active Alumni</h4>
					<div className="text-3xl font-bold">{alumni.length}</div>
				</div>
			</div>

			{/* <Newsletter /> */}

			<section
				id="gallery"
				className="bg-white dark:bg-gray-800 rounded p-6 shadow-sm"
			>
				<h3 className="text-lg font-semibold mb-3">Gallery Highlights</h3>
				<div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
					{slides.map((s, i) => (
						<img
							key={i}
							src={s}
							className="rounded h-40 object-cover w-full"
							alt={`gallery-${i}`}
						/>
					))}
				</div>
			</section>
		</div>
	);
}
