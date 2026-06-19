"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

export default function ScrollButton() {
	const [isAtBottom, setIsAtBottom] = useState(false);

	const toggleScroll = () => {
		const scrollHeight = document.documentElement.scrollHeight;
		const clientHeight = document.documentElement.clientHeight;
		if (window.scrollY < scrollHeight - clientHeight) {
			window.scrollTo({ top: scrollHeight, behavior: "smooth" });
			setIsAtBottom(true);
		} else {
			window.scrollTo({ top: 0, behavior: "smooth" });
			setIsAtBottom(false);
		}
	};

	return (
		<button
			onClick={toggleScroll}
			className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-gradient-to-r from-orange-500 to-yellow-500 text-white p-3.5 rounded-full shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 hover:scale-110"
			aria-label="اسکرول به بالا/پایین"
		>
			<FontAwesomeIcon
				icon={isAtBottom ? faChevronUp : faChevronDown}
				className="text-xl"
			/>
		</button>
	);
}