"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import FixedButton from "@/components/FixedButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronLeft, faArrowDown, faChevronRight} from "@fortawesome/free-solid-svg-icons";

// components
import About from "./components/about/about";
import Skills from "./components/skills/skills";
import Education from "./components/education";
// import Experience from "./components/experience";

// images
import Hero from "@/public/image/me6.jpg";

export default function AboutPage() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const scrollToContent = () => {
		window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
	};

	return (
		<main className="overflow-x-hidden">
			<FixedButton href="/#about">
				<FontAwesomeIcon icon={faChevronRight} className="text-sm" />
			</FixedButton>
			{/* ===== هدر (Hero) ===== */}
			<section className="relative min-h-screen flex items-center justify-center px-4 sm:px-8 overflow-hidden bg-gradient-to-br from-[#0d0b1e] via-[#1a1744] to-[#2a1f5e]">
				{/* المان‌های تزئینی */}
				<motion.div
					className="absolute -top-20 -right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"
					animate={{ scale: [1, 1.3, 1], rotate: [0, 60, 0] }}
					transition={{ duration: 25, repeat: Infinity }}
				/>
				<motion.div
					className="absolute -bottom-20 -left-20 w-80 h-80 bg-pink-600/10 rounded-full blur-3xl"
					animate={{ scale: [1, 1.2, 1], rotate: [0, -45, 0] }}
					transition={{ duration: 20, repeat: Infinity }}
				/>

				<div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center text-white">
					{/* تصویر هدر با انیمیشن scale */}
					<motion.div
						className="relative w-full max-w-sm mx-auto lg:mx-0 aspect-square rounded-3xl overflow-hidden shadow-2xl shadow-purple-500/20 ring-4 ring-purple-400/30"
						initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
						animate={{ scale: 1, opacity: 1, rotate: 0 }}
						transition={{ duration: 1, ease: "circOut" }}
					>
						<Image
							src={Hero}
							alt="حسین محمدیان نژاد"
							fill
							className="object-cover"
							priority
						/>
						{/* گرادینت روی تصویر برای زیبایی */}
						<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
					</motion.div>

					{/* متن هدر */}
					<div className="flex flex-col items-center lg:items-start text-center lg:text-right">
						<motion.div
							className="inline-block px-4 py-1.5 mb-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-[10px] sm:text-xs tracking-[0.2em] text-purple-200"
							initial={{ opacity: 0, y: -15 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.2 }}
						>
							✨ درباره من
						</motion.div>

						<motion.h1
							className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent"
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.3, type: "spring" }}
						>
							از کدنویسی تا<br className="hidden sm:block" /> معماری هوشمند
						</motion.h1>

						<motion.p
							className="text-lg sm:text-xl text-gray-300/70 leading-relaxed mt-4 max-w-2xl backdrop-blur-sm bg-black/15 p-4 rounded-2xl border border-white/5"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.4 }}
						>
							خلاصه‌ای از مسیر مهندسی من — از خط‌های اول کد تا طراحی سیستم‌های مقیاس‌پذیر و هوشمند.
						</motion.p>

						<motion.button
							onClick={scrollToContent}
							className="mt-6 inline-flex items-center gap-3 px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.5 }}
						>
							<span>بیشتر بدانید</span>
							<FontAwesomeIcon icon={faArrowDown} className="text-sm animate-bounce" />
						</motion.button>
					</div>
				</div>

				{/* اسکرول ایندیکیتور */}
				<motion.div
					className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1.5, duration: 0.8 }}
				>
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-light">
            اسکرول کن
          </span>
					<motion.div
						className="w-5 h-9 rounded-full border-2 border-white/20 flex items-start justify-center p-1"
						animate={{ y: [0, 6, 0] }}
						transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
					>
						<motion.div
							className="w-1.5 h-1.5 bg-white/40 rounded-full"
							animate={{ y: [0, 10, 0] }}
							transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
						/>
					</motion.div>
				</motion.div>
			</section>

			{/* ===== بخش‌های محتوایی ===== */}
			<About />
			<Skills />
			<Education />
			{/* <Experience /> */}
		</main>
	);
}