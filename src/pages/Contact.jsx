import React, { useState } from "react";

export default function Contact() {
	const [form, setForm] = useState({ name: "", email: "", message: "" });
	const onSubmit = (e) => {
		e.preventDefault();
		console.info("Contact form", form);
		alert("Thanks — we'll be in touch!");
	};
	return (
		<div className="space-y-4">
			<h2 className="text-2xl font-semibold">Contact</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<form
					onSubmit={onSubmit}
					className="bg-white dark:bg-gray-800 rounded p-4 shadow-sm space-y-3"
				>
					<input
						value={form.name}
						onChange={(e) => setForm({ ...form, name: e.target.value })}
						placeholder="Your name"
						className="w-full px-3 py-2 rounded border"
					/>
					<input
						value={form.email}
						onChange={(e) => setForm({ ...form, email: e.target.value })}
						placeholder="Email"
						className="w-full px-3 py-2 rounded border"
					/>
					<textarea
						value={form.message}
						onChange={(e) => setForm({ ...form, message: e.target.value })}
						placeholder="Message"
						className="w-full px-3 py-2 rounded border"
						rows={5}
					/>
					<button className="px-4 py-2 bg-brand text-white rounded">
						Send
					</button>
				</form>

				<div className="bg-white dark:bg-gray-800 rounded p-4 shadow-sm">
					<h4 className="font-semibold">Office</h4>
					<p className="text-sm text-gray-500 mt-2">
						Bharti Vidyapeeth, Rani Kothi, Williams Town, B. Deoghar, Jharkhand
					</p>
					<p className="text-sm text-gray-500 mt-2">
						Email: alumni@bhartividyapeeth.edu
					</p>
				</div>
			</div>
		</div>
	);
}
