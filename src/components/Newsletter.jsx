import React, { useState } from "react";

export default function Newsletter() {
	const [email, setEmail] = useState("");
	const [msg, setMsg] = useState(null);
	const onSubmit = (e) => {
		e.preventDefault();
		if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
			setMsg({ type: "err", text: "Please enter a valid email" });
			return;
		}
		setMsg({ type: "ok", text: "Thanks for subscribing!" });
		setEmail("");
		console.info("Newsletter subscribe:", email);
	};

	return (
		<section
			id="newsletter"
			className="bg-white dark:bg-gray-800 rounded p-6 shadow-sm mt-6"
		>
			<h3 className="text-lg font-semibold mb-2">
				Subscribe to our Newsletter
			</h3>
			<p className="text-sm text-gray-500 dark:text-gray-300 mb-4">
				Get updates on alumni events, news, and spotlights.
			</p>
			<form
				onSubmit={onSubmit}
				className="flex flex-col sm:flex-row items-start sm:items-center gap-3"
			>
				<input
					className="flex-1 px-4 py-2 rounded border"
					placeholder="Email address"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<button className="px-4 py-2 bg-brand text-white rounded">
					Subscribe
				</button>
			</form>
			{msg && (
				<p
					className={`mt-3 text-sm ${
						msg.type === "ok" ? "text-green-500" : "text-red-500"
					}`}
				>
					{msg.text}
				</p>
			)}
		</section>
	);
}
