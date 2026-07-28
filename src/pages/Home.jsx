import React from "react";
import { Link } from "react-router-dom";
import Slideshow from "../components/Slideshow";
import Newsletter from "../components/Newsletter";
import NoticeBoard from "../components/NoticeBoard";
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

const achievementCount = alumni.reduce(
	(sum, a) => sum + (a.achievements?.length || 0),
	0
);

export default function Home() {
	return (
		<div className="space-y-6">
			{/* Hero */}
			<section className="relative overflow-hidden rounded-lg bg-gradient-to-br from-brand to-blue-800 text-white shadow-sm">
				<div className="px-6 py-10 md:px-10 md:py-14 max-w-2xl animate-fadeInUp">
					<h1 className="text-2xl md:text-4xl font-bold leading-tight">
						Once a Bhartian, always a Bhartian.
					</h1>
					<p className="mt-3 text-white/90 text-sm md:text-base">
						Reconnect with your batchmates, celebrate achievements, and stay
						part of the Bharti Vidyapeeth family — wherever life has taken you.
					</p>
					<div className="mt-6 flex flex-wrap gap-3">
						<Link
							to="/alumni"
							className="px-5 py-2.5 bg-white text-brand font-medium rounded hover:bg-white/90 transition-smooth"
						>
							Explore Alumni
						</Link>
						<Link
							to="/hall-of-fame"
							className="px-5 py-2.5 bg-white/10 border border-white/40 rounded hover:bg-white/20 transition-smooth"
						>
							Hall of Fame
						</Link>
					</div>
				</div>
			</section>

			<Slideshow
				images={slides}
				interval={2000}
			/>

			<div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
				<div className="bg-white dark:bg-gray-800 rounded p-4 shadow-sm hover:shadow-md transition-smooth">
					<h4 className="text-gray-500 text-sm">Total Alumni</h4>
					<div className="text-3xl font-bold">200+</div>
				</div>
				<div className="bg-white dark:bg-gray-800 rounded p-4 shadow-sm hover:shadow-md transition-smooth">
					<h4 className="text-gray-500 text-sm">Achievements</h4>
					<div className="text-3xl font-bold">{achievementCount}+</div>
				</div>
				<div className="bg-white dark:bg-gray-800 rounded p-4 shadow-sm hover:shadow-md transition-smooth">
					<h4 className="text-gray-500 text-sm">Upcoming Events</h4>
					<div className="text-3xl font-bold">{events.length}</div>
				</div>
				<div className="bg-white dark:bg-gray-800 rounded p-4 shadow-sm hover:shadow-md transition-smooth">
					<h4 className="text-gray-500 text-sm">Featured Alumni</h4>
					<div className="text-3xl font-bold">{alumni.length}</div>
				</div>
			</div>

			{/* <Newsletter /> */}

			<NoticeBoard />

			<section
				id="gallery"
				className="bg-white dark:bg-gray-800 rounded p-6 shadow-sm"
			>
				<div className="flex items-center justify-between mb-3">
					<h3 className="text-lg font-semibold">Gallery Highlights</h3>
					<Link to="/gallery" className="text-sm text-brand hover:underline">
						View all →
					</Link>
				</div>
				<div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
					{slides.slice(0, 6).map((s, i) => (
						<img
							key={i}
							src={s}
							loading="lazy"
							className="rounded h-40 object-cover w-full hover:opacity-90 transition-smooth"
							alt={`Campus and event highlight ${i + 1}`}
						/>
					))}
				</div>
			</section>
		</div>
	);
}
