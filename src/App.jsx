import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Alumni from "./pages/Alumni";
import Events from "./pages/Events";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
	const [sidebarOpen, setSidebarOpen] = useState(false);

	useEffect(() => {
		// no-op placeholder for future global logic
	}, []);

	return (
		<div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
			<Header
				onToggleDark={() => {
					document.documentElement.classList.toggle("dark");
				}}
			/>
			<Navbar onToggleSidebar={() => setSidebarOpen((s) => !s)} />
			<div className="flex flex-1 w-full px-4 md:px-8 lg:px-16 py-6">
				<div
					className={`hidden md:block md:w-1/4 lg:w-1/5 mr-6 transition-smooth ${
						sidebarOpen ? "block" : ""
					}`}
				>
					<Sidebar />
				</div>
				<main className="w-full md:w-3/4 lg:w-4/5">
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
							path="/events"
							element={<Events />}
						/>
						<Route
							path="/about"
							element={<About />}
						/>
						<Route
							path="/contact"
							element={<Contact />}
						/>
					</Routes>
				</main>
			</div>
			<Footer />
		</div>
	);
}
