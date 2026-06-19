"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/image/logo.webp";

const navVariant = {
	open: {
		clipPath: "circle(2000px at calc(100% - 40px) 40px)",
		transition: {
			type: "tween",
			duration: 0.6,
			ease: [0.22, 1, 0.36, 1],
		},
	},
	closed: {
		clipPath: "circle(0px at calc(100% - 40px) 40px)",
		transition: {
			delay: 0.2,
			type: "tween",
			duration: 0.4,
			ease: [0.4, 0, 1, 1],
		},
	},
};

const itemVariants = {
	open: (custom) => ({
		opacity: 1,
		x: 0,
		transition: {
			delay: custom,
			type: "tween",
			duration: 0.4,
			ease: [0.22, 1, 0.36, 1],
		},
	}),
	closed: {
		opacity: 0,
		x: -60,
		transition: {
			type: "tween",
			duration: 0.2,
		},
	},
};

const NavItems = ({ isNavOpen, setIsNavOpen }) => {
	const handleItemClick = () => setIsNavOpen(false);

	return (
		<motion.div
			className={`fixed z-[45] w-full h-screen flex items-center justify-center overflow-hidden`}
			variants={navVariant}
			animate={isNavOpen ? "open" : "closed"}
			initial={false}
		>
			<div className="relative opacity-95 flex flex-col items-center min-h-[100vh] min-w-[100vw] bg-gradient-to-b from-gray-100/90 via-white/80 to-gray-100/90 backdrop-blur-xl">
				<div className="flex flex-col items-center space-y-6 my-auto mx-0 z-50">
					<motion.h1
						variants={itemVariants}
						animate={isNavOpen ? "open" : "closed"}
						className="text-5xl sm:text-6xl font-extralight text-gray-600 tracking-widest"
					>
						منو
					</motion.h1>
					<Link href="/#home" onClick={handleItemClick}>
						<motion.h2
							className="text-3xl sm:text-4xl font-medium text-gray-800 hover:text-purple-600 transition-colors"
							variants={itemVariants}
							animate={isNavOpen ? "open" : "closed"}
							custom={0.1}
						>
							صفحه اصلی
						</motion.h2>
					</Link>
					<Link href="/about" onClick={handleItemClick}>
						<motion.h2
							className="text-3xl sm:text-4xl font-medium text-gray-800 hover:text-emerald-600 transition-colors"
							variants={itemVariants}
							animate={isNavOpen ? "open" : "closed"}
							custom={0.2}
						>
							درباره من
						</motion.h2>
					</Link>
					<Link href="/projects" onClick={handleItemClick}>
						<motion.h2
							className="text-3xl sm:text-4xl font-medium text-gray-800 hover:text-orange-600 transition-colors"
							variants={itemVariants}
							animate={isNavOpen ? "open" : "closed"}
							custom={0.3}
						>
							پروژه‌ها
						</motion.h2>
					</Link>
					<Link href="/#contact" onClick={handleItemClick}>
						<motion.h2
							className="text-3xl sm:text-4xl font-medium text-gray-800 hover:text-pink-600 transition-colors"
							variants={itemVariants}
							animate={isNavOpen ? "open" : "closed"}
							custom={0.4}
						>
							تماس با من
						</motion.h2>
					</Link>
				</div>
			</div>
		</motion.div>
	);
};

const Navbar = () => {
	const navRef = useRef(null);
	const [isNavOpen, setIsNavOpen] = useState(false);

	const toggleNav = () => setIsNavOpen(!isNavOpen);

	return (
		<>
			<nav
				ref={navRef}
				className={`navbar px-5 md:px-12 w-screen fixed transition-all duration-500 ${
					isNavOpen
						? "backdrop-blur-xl bg-gray-100/80"
						: "backdrop-blur-md bg-white/30"
				} flex flex-row justify-between items-center h-16 z-50 shadow-sm`}
			>
				<div className="relative w-12 h-12 bg-white/85 rounded-full">
					<Image
						src={Logo}
						placeholder="blur"
						fill
						alt="حسین محمدیان نژاد"
						className="rounded-full object-cover"
						priority
					/>
				</div>
				<button
					aria-label={isNavOpen ? "بستن منو" : "باز کردن منو"}
					className="burger button flex flex-col justify-center items-center space-y-1.5 p-2 rounded-xl transition"
					onClick={toggleNav}
				>
					<div
						className={`w-8 h-0.5 bg-white rounded-full transition-all duration-300 ${
							isNavOpen ? "bg-gray-800! rotate-45 translate-y-1.5" : ""
						}`}
					/>
					<div
						className={`w-8 h-0.5 bg-white rounded-full transition-all duration-300 ${
							isNavOpen ? "bg-gray-800! -rotate-45 -translate-y-1.5" : ""
						}`}
					/>
				</button>
			</nav>
			<NavItems isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
		</>
	);
};

export default Navbar;