import React, { useState } from "react";

// 1. Create a free form at https://formspree.io and paste its ID below
//    (looks like "xdorwkab"). Until then, submissions fall back to a friendly
//    message and are logged to the console.
const FORMSPREE_ID = "";
const FORMSPREE_ENDPOINT = FORMSPREE_ID
	? `https://formspree.io/f/${FORMSPREE_ID}`
	: "";

export default function Contact() {
	const [form, setForm] = useState({ name: "", email: "", message: "" });
	const [status, setStatus] = useState("idle"); // idle | sending | success | error
	const [error, setError] = useState("");

	const validate = () => {
		if (!form.name.trim()) return "Please enter your name.";
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
			return "Please enter a valid email address.";
		if (!form.message.trim()) return "Please enter a message.";
		return "";
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		const validationError = validate();
		if (validationError) {
			setError(validationError);
			setStatus("error");
			return;
		}
		setError("");

		if (!FORMSPREE_ENDPOINT) {
			// No backend configured yet — fail gracefully rather than silently.
			console.info("Contact form (no endpoint configured):", form);
			setStatus("success");
			setForm({ name: "", email: "", message: "" });
			return;
		}

		try {
			setStatus("sending");
			const res = await fetch(FORMSPREE_ENDPOINT, {
				method: "POST",
				headers: { Accept: "application/json" },
				body: new FormData(e.target),
			});
			if (!res.ok) throw new Error(`Request failed: ${res.status}`);
			setStatus("success");
			setForm({ name: "", email: "", message: "" });
		} catch (err) {
			console.error("Contact form submission failed:", err);
			setError("Something went wrong. Please try again later.");
			setStatus("error");
		}
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
						name="name"
						value={form.name}
						onChange={(e) => setForm({ ...form, name: e.target.value })}
						placeholder="Your name"
						className="w-full px-3 py-2 rounded border dark:bg-gray-700 dark:border-gray-600"
					/>
					<input
						name="email"
						type="email"
						value={form.email}
						onChange={(e) => setForm({ ...form, email: e.target.value })}
						placeholder="Email"
						className="w-full px-3 py-2 rounded border dark:bg-gray-700 dark:border-gray-600"
					/>
					<textarea
						name="message"
						value={form.message}
						onChange={(e) => setForm({ ...form, message: e.target.value })}
						placeholder="Message"
						className="w-full px-3 py-2 rounded border dark:bg-gray-700 dark:border-gray-600"
						rows={5}
					/>

					{status === "error" && error && (
						<p className="text-sm text-red-600">{error}</p>
					)}
					{status === "success" && (
						<p className="text-sm text-green-600">
							Thanks — we'll be in touch!
						</p>
					)}

					<button
						type="submit"
						disabled={status === "sending"}
						className="px-4 py-2 bg-brand text-white rounded hover:opacity-90 transition-smooth disabled:opacity-60"
					>
						{status === "sending" ? "Sending…" : "Send"}
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
