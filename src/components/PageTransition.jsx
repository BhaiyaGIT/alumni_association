import React from "react";
import { useLocation } from "react-router-dom";

// Wraps routed content and re-triggers a fade-in on every route change
// by changing the key (which remounts children).
export default function PageTransition({ children }) {
	const { pathname } = useLocation();
	return (
		<div key={pathname} className="page-enter">
			{children}
		</div>
	);
}
