import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import ScrollToTop from "./components/ScrollToTop";
import PageTransition from "./components/PageTransition";
import Home from "./pages/Home";
import Alumni from "./pages/Alumni";
import AlumniDetail from "./pages/AlumniDetail";
import Events from "./pages/Events";
import HallOfFame from "./pages/HallOfFame";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
	return (
		<div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
			<ScrollToTop />
			<Header />
			<Navbar />
			<div className="flex flex-1 w-full px-4 md:px-8 lg:px-16 py-6">
				<div className="hidden md:block md:w-1/4 lg:w-1/5 mr-6">
					<Sidebar />
				</div>
				<main className="w-full md:w-3/4 lg:w-4/5">
					<PageTransition>
					<Routes>
						<Route
							path="/"
							element={<Home />}
						/>
						<Route
							path="/alumni"
							element={<Alumni />}
						/>
						<Route
							path="/alumni/:id"
							element={<AlumniDetail />}
						/>
						<Route
							path="/events"
							element={<Events />}
						/>
						<Route
							path="/hall-of-fame"
							element={<HallOfFame />}
						/>
						<Route
							path="/gallery"
							element={<Gallery />}
						/>
						<Route
							path="/about"
							element={<About />}
						/>
						<Route
							path="/contact"
							element={<Contact />}
						/>
						<Route
							path="*"
							element={<NotFound />}
						/>
					</Routes>
					</PageTransition>
				</main>
			</div>
			<Footer />
		</div>
	);
}
