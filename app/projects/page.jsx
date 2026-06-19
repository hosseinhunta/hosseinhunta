"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import Button from "@/components/Button";
import FixedButton from "@/components/FixedButton";
import ProjectCard from "./components/ProjectCard";
import ProjectsData from "@/json/data.json";

export default function ProjectsPage() {
	const [activeCategory, setActiveCategory] = useState(1);
	const projects = ProjectsData.Projects.filter((item) => item.show === true);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const scrollToContent = () => {
		window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
	};

	return (
		<main className="overflow-x-hidden">
			{/* دکمه بازگشت */}
			<FixedButton href="/#projects">
				<FontAwesomeIcon icon={faChevronRight} className="text-sm" />
			</FixedButton>

			{/* ===== هدر (Hero) ===== */}
			<section className="relative min-h-screen flex items-center justify-center px-4 sm:px-8 overflow-hidden bg-gradient-to-br from-[#1a0e05] via-[#2d1b0e] to-[#3d2415]">
				{/* المان‌های تزئینی */}
				<motion.div
					className="absolute -top-20 -right-20 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl"
					animate={{ scale: [1, 1.3, 1], rotate: [0, 60, 0] }}
					transition={{ duration: 25, repeat: Infinity }}
				/>
				<motion.div
					className="absolute -bottom-20 -left-20 w-80 h-80 bg-yellow-600/10 rounded-full blur-3xl"
					animate={{ scale: [1, 1.2, 1], rotate: [0, -45, 0] }}
					transition={{ duration: 20, repeat: Infinity }}
				/>
				<div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5" />

				<div className="relative z-10 w-full max-w-7xl mx-auto text-center text-white">
					<motion.div
						className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-[10px] sm:text-xs tracking-[0.2em] text-orange-200"
						initial={{ opacity: 0, y: -15 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.1 }}
					>
						🚀 نمونه کارها
					</motion.div>

					<motion.h1
						className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight bg-gradient-to-r from-orange-300 via-yellow-300 to-amber-200 bg-clip-text text-transparent"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2, type: "spring" }}
					>
						پروژه‌های من
					</motion.h1>

					<motion.p
						className="text-lg sm:text-xl text-gray-300/70 leading-relaxed mt-4 max-w-3xl mx-auto backdrop-blur-sm bg-black/15 p-4 rounded-2xl border border-white/5"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.3 }}
					>
						مروری بر پروژه‌های شاخص در حوزه‌های وب، هوش مصنوعی و کتابخانه‌های متن‌باز که ساخته یا در آنها مشارکت داشته‌ام.
					</motion.p>

					<motion.button
						onClick={scrollToContent}
						className="mt-8 inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-medium shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4 }}
					>
						<span>مشاهده پروژه‌ها</span>
						<FontAwesomeIcon icon={faArrowDown} className="text-sm animate-bounce" />
					</motion.button>
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

			{/* ===== پروژه شاخص ===== */}
			<section className="py-20 px-4 sm:px-8 bg-gradient-to-b from-white via-gray-50/50 to-orange-50/30">
				<div className="w-full max-w-7xl mx-auto">
					<motion.div
						className="text-center space-y-4 mb-16"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						<div className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-400/20 text-orange-700 text-xs tracking-[0.2em]">
							⭐ پروژه شاخص
						</div>
						<h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
							HuntFeed – PHP Feed Management Library
						</h2>
					</motion.div>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<motion.div
							className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-orange-500/20 ring-2 ring-orange-400/30"
							initial={{ x: -60, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{ type: "spring", stiffness: 100 }}
						>
							<Image
								src="/image/projects/huntfeed-openGraph.png"
								alt="HuntFeed"
								fill
								className="object-cover"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
						</motion.div>

						<motion.div
							className="text-center lg:text-right space-y-4"
							initial={{ x: 60, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{ delay: 0.2, type: "spring" }}
						>
							<p className="text-gray-600 text-lg leading-relaxed">
								HuntFeed یک کتابخانهٔ آمادهٔ تولید و رویدادمحور برای مصرف، نرمال‌سازی و توزیع به‌روزرسانی‌های خوراک‌های RSS، Atom و WebSub با قابلیت اعلان‌های لحظه‌ای است. این کتابخانه برای اگریگیتورهای خوراک، نرم‌افزارهای مطالعهٔ اخبار و برنامه‌های پایش محتوا ایده‌آل است.
							</p>
							<div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
								<Button variation="primary" className="bg-gradient-to-r from-orange-500 to-yellow-500 border-0 shadow-lg shadow-orange-500/30">
									<Link href="/projects/huntfeed">بیشتر</Link>
								</Button>
								<Button variation="secondary" className="border-orange-500/50 text-orange-700 hover:bg-orange-500 hover:text-white">
									<a href="https://github.com/hosseinhunta/huntfeed" target="_blank" rel="noopener noreferrer">
										مشاهده سایت
									</a>
								</Button>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* ===== لیست پروژه‌ها ===== */}
			<section className="py-20 px-4 sm:px-8 bg-white">
				<div className="w-full max-w-7xl mx-auto">
					<motion.div
						className="text-center space-y-4 mb-12"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						<div className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-400/20 text-purple-700 text-xs tracking-[0.2em]">
							📦 همه پروژه‌ها
						</div>
						<h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
							سایر پروژه‌ها
						</h2>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{projects.map((project, index) => (
							<ProjectCard
								key={project.slug}
								project={project}
								index={index}
								activeCategory={activeCategory}
							/>
						))}
					</div>

					<div className="flex justify-center mt-12">
						<Button variation="primary" className="bg-gradient-to-r from-orange-500 to-yellow-500 border-0 shadow-lg shadow-orange-500/30">
							<Link href="/projects/archive">مشاهده آرشیو کامل</Link>
						</Button>
					</div>
				</div>
			</section>
		</main>
	);
}