"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faFolderOpen, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useFullPage } from "@alvalens/react-fullpage-snap";
import { motion } from "framer-motion";

const navItems = [
	{ icon: faHome, label: "صفحه اصلی", anchor: "home" },
	{ icon: faUser, label: "درباره من", anchor: "about" },
	{ icon: faFolderOpen, label: "پروژه‌ها", anchor: "projects" },
	{ icon: faEnvelope, label: "تماس", anchor: "contact" },
];

const Sidebar = () => {
	const { moveTo, activeIndex } = useFullPage();

	return (
		<div className="right-0 hidden md:flex fixed z-40 bg-white/30 backdrop-blur-md border border-white/20 shadow-lg h-[45vh] w-14 flex-col justify-between items-center p-3 left-0 top-1/4 rounded-e-3xl">
			<ul className="flex flex-col justify-evenly items-center h-full text-gray-700">
				{navItems.map((item, index) => (
					<li key={item.anchor}>
						<button
							aria-label={item.label}
							onClick={() => moveTo(index)}
							className="relative flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300 hover:bg-white/30"
						>
							{activeIndex === index && (
								<motion.div
									layoutId="sidebar-active"
									className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl border border-white/60 shadow-lg"
									transition={{ type: "spring", stiffness: 350, damping: 30 }}
								/>
							)}
							<FontAwesomeIcon
								icon={item.icon}
								className={`relative z-10 text-xl transition-all duration-300 ${
									activeIndex === index
										? "text-purple-400 scale-120 drop-shadow-md"
										: "text-white hover:text-gray-800"
								}`}
							/>
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Sidebar;