// Copyright (C) 2025 Hossein Mohammadian Nejad
// This file is part of HosseinHunta-portfolio.
// Licensed under the GNU GPL v3.0. See LICENSE for details.

"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FullPageWrapper, Section, useFullPage } from "@alvalens/react-fullpage-snap";

// components
import Button from "@/components/Button";
import Me from "@/public/image/alvalen-front.webp";
import MeAbout from "@/public/image/me2.jpg";
import Setup from "@/public/image/tamas.png";
import ProjectAll from "@/public/image/projects.png";
import Hr from "@/components/Hr";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faWordpress } from "@fortawesome/free-brands-svg-icons";
import { faInstagram, faLinkedin, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function ScrollIndicator() {
	const { activeIndex } = useFullPage();
	const [dismissed, setDismissed] = useState(false);

	useEffect(() => {
		if (activeIndex !== 0) setDismissed(true);
	}, [activeIndex]);

	return (
		<AnimatePresence>
			{activeIndex === 0 && !dismissed && (
				<motion.div
					className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 1.5 } }}
					exit={{ opacity: 0, y: 20, transition: { duration: 0.4 } }}
				>
					<span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-white/60 font-light">
						اسکرول کن
					</span>
					<motion.div
						className="w-5 h-9 rounded-full border-2 border-white/30 flex items-start justify-center p-1"
						animate={{ y: [0, 6, 0] }}
						transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
					>
						<motion.div
							className="w-1.5 h-1.5 bg-white/60 rounded-full"
							animate={{ y: [0, 10, 0] }}
							transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
						/>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}

const SocialIcon = ({ href, icon, label, delay = 0, color = "bg-white/10" }) => (
	<motion.a
		href={href}
		target="_blank"
		rel="noopener noreferrer"
		aria-label={label}
		className={`flex justify-center items-center w-11 h-11 sm:w-13 sm:h-13 rounded-2xl backdrop-blur-md ${color} border border-white/15 text-white hover:scale-110 hover:border-white/50 hover:shadow-[0_0_25px_rgba(255,255,255,0.15)] transition-all duration-300`}
		initial={{ y: 40, opacity: 0, rotate: -8 }}
		whileInView={{ y: 0, opacity: 1, rotate: 0 }}
		transition={{ delay, type: "spring", stiffness: 200, damping: 20 }}
		whileHover={{ y: -4 }}
	>
		<FontAwesomeIcon icon={icon} className="text-lg sm:text-xl" />
	</motion.a>
);

const FloatingOrbs = ({ count = 3, color = "border-purple-400/20" }) => (
	<>
		{[...Array(count)].map((_, i) => (
			<motion.div
				key={i}
				className={`absolute rounded-full border ${color} w-28 h-28 md:w-40 md:h-40 pointer-events-none`}
				style={{
					top: `${15 + i * 22}%`,
					left: `${5 + i * 28}%`,
				}}
				animate={{
					x: [0, 25, -15, 0],
					y: [0, -15, 20, 0],
					rotate: [0, 30, -20, 0],
				}}
				transition={{
					duration: 14 + i * 3,
					repeat: Infinity,
					ease: "easeInOut",
				}}
			/>
		))}
	</>
);

const MyPage = () => {
	return (
		<FullPageWrapper>
			{/* ===== سکشن اول: معرفی ===== */}
			<Section>
				<div className="relative w-full h-full flex items-center justify-center px-4 sm:px-8 overflow-hidden bg-gradient-to-br from-[#0d0b1e] via-[#1a1744] to-[#2a1f5e]">
					<FloatingOrbs color="border-purple-400/20" />
					<motion.div
						className="absolute -top-20 -right-20 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl"
						animate={{ scale: [1, 1.3, 1], rotate: [0, 60, 0] }}
						transition={{ duration: 25, repeat: Infinity }}
					/>
					<div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-white">
						<motion.div
							className="col-span-2 flex flex-col items-center md:items-start text-center md:text-right order-2 md:order-1"
							initial={{ x: -50, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{ type: "spring", damping: 25 }}
						>
							{/* عکس موبایل */}
							<div className="block md:hidden mb-6">
								<div className="relative w-36 h-36 sm:w-48 sm:h-48 mx-auto rounded-full overflow-hidden ring-4 ring-purple-400/40 shadow-[0_0_50px_rgba(168,85,247,0.25)]">
									<Image src={Me} alt="حسین" fill className="object-cover" priority />
								</div>
							</div>

							<motion.div
								className="inline-block px-4 py-1.5 mb-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-[10px] sm:text-xs tracking-[0.2em] text-purple-200"
								initial={{ opacity: 0, y: -15 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.1 }}
							>
								🚀 توسعه‌دهنده ارشد
							</motion.div>

							<motion.h3
								className="text-lg sm:text-xl md:text-2xl font-light text-purple-200/70 mb-1"
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								transition={{ delay: 0.2 }}
							>
								حسین محمدیان نژاد
							</motion.h3>

							<motion.h1
								className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent"
								initial={{ opacity: 0, y: 25 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.3, type: "spring" }}
							>
								CTO &amp; Senior Programmer
							</motion.h1>

							<motion.p
								className="text-sm sm:text-base md:text-lg text-gray-300/70 leading-relaxed mt-4 max-w-2xl backdrop-blur-sm bg-black/15 p-4 rounded-2xl border border-white/5"
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								transition={{ delay: 0.4 }}
							>
								من مهندس نرم‌افزاری هستم که بر معماری سیستم‌های مقیاس‌پذیر و توسعهٔ راه‌حل‌های نرم‌افزاری پیچیده تمرکز دارم. تخصص اصلی من در نقطهٔ تلاقی توسعهٔ نرم‌افزار، شبکه‌های کامپیوتری و هوش مصنوعی قرار گرفته است.
							</motion.p>

							<motion.div
								className="flex flex-wrap justify-center md:justify-start gap-3 mt-6"
								initial={{ opacity: 0, y: 15 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.5 }}
							>
								<Button variation="primary" className="bg-gradient-to-r from-purple-500 to-pink-500 border-0 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50">
									<Link href="https://gravatar.com/hosseinhunta" target="_blank">Gravatar</Link>
								</Button>
								<Button variation="secondary" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20">
									<a href="https://blog.hosseinhunta.ir">وبلاگ</a>
								</Button>
							</motion.div>
						</motion.div>

						{/* عکس دسکتاپ */}
						<motion.div
							className="hidden md:flex col-span-1 justify-center order-1 md:order-2"
							initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
							whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
							transition={{ delay: 0.6, type: "spring", stiffness: 150 }}
						>
							<div className="relative w-56 h-80 lg:w-72 lg:h-72 xl:w-70 xl:h-96 rounded-t-[10vh] rounded-b-[20vh] lg:rounded-tl-[20vh] lg:rounded-tr-[5vh] lg:rounded-br-[15vh] lg:rounded-bl-[5vh] overflow-hidden ring-4 ring-purple-400/30 shadow-[0_0_70px_rgba(168,85,247,0.15)] hover:scale-105 transition duration-500">
								<Image src={Me} alt="حسین" fill className="object-cover" priority />
							</div>
						</motion.div>
					</div>
				</div>
			</Section>

			{/* ===== سکشن دوم: درباره من ===== */}
			<Section>
				<div className="relative w-full h-full flex items-center justify-center px-4 sm:px-8 overflow-hidden bg-gradient-to-br from-[#0d1f1f] via-[#1a3a3a] to-[#1f4d4d]">
					<FloatingOrbs color="border-emerald-400/20" />
					<div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center text-white">
						<motion.div
							className="relative w-64 h-72 sm:w-72 sm:h-80 md:w-80 md:h-96 lg:w-72 lg:h-80 xl:w-80 xl:h-96 rounded-tl-[20vh] rounded-tr-[5vh] rounded-br-[25vh] rounded-bl-[8vh] overflow-hidden shadow-2xl shadow-emerald-500/20 ring-4 ring-emerald-400/30 hover:scale-105 transition duration-500"
							initial={{ x: -70, opacity: 0, rotate: -3 }}
							whileInView={{ x: 0, opacity: 1, rotate: 0 }}
							transition={{ type: "spring", stiffness: 100 }}
						>
							<Image src={MeAbout} alt="درباره من" fill className="object-cover" />
						</motion.div>

						<div className="flex flex-col items-center lg:items-start text-center lg:text-right backdrop-blur-sm bg-black/15 p-6 sm:p-8 rounded-3xl border border-white/10">
							<motion.div
								className="inline-block px-3 py-1 mb-3 rounded-full bg-emerald-500/15 text-emerald-200 text-[10px] tracking-[0.2em] border border-emerald-400/20"
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
							>
								✨ داستان من
							</motion.div>
							<motion.h1
								className="text-4xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-emerald-200 to-cyan-200 bg-clip-text text-transparent"
								initial={{ x: 50, opacity: 0 }}
								whileInView={{ x: 0, opacity: 1 }}
								transition={{ delay: 0.1 }}
							>
								درباره من
							</motion.h1>
							<Hr className="my-4 w-16 border-emerald-400/40" />
							<motion.p
								className="text-lg sm:text-xl text-emerald-100/60 leading-relaxed"
								initial={{ x: 50, opacity: 0 }}
								whileInView={{ x: 0, opacity: 1 }}
								transition={{ delay: 0.2 }}
							>
								از کدنویسی تا معماری هوشمند: خلاصه‌ای از مسیر مهندسی من
							</motion.p>
							<motion.div
								className="mt-5"
								initial={{ y: 25, opacity: 0 }}
								whileInView={{ y: 0, opacity: 1 }}
								transition={{ delay: 0.3 }}
							>
								<Button variation="primary" className="bg-gradient-to-r from-emerald-500 to-cyan-500 border-0 shadow-lg shadow-emerald-500/25">
									<Link href="/about">بیشتر بدانید</Link>
								</Button>
							</motion.div>
						</div>
					</div>
				</div>
			</Section>

			{/* ===== سکشن سوم: پروژه‌ها ===== */}
			<Section>
				<div className="relative w-full h-full flex items-center justify-center px-4 sm:px-8 overflow-hidden bg-gradient-to-br from-[#1a0e05] via-[#2a180a] to-[#3d200e]">
					<FloatingOrbs color="border-orange-400/20" />
					<div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center text-white">
						<motion.div
							className="relative w-72 h-56 sm:w-80 sm:h-64 md:w-96 md:h-72 lg:w-80 lg:h-56 xl:w-88 xl:h-60 rounded-tl-[5vh] rounded-tr-[25vh] rounded-br-[8vh] rounded-bl-[20vh] overflow-hidden shadow-2xl shadow-orange-500/20 ring-4 ring-orange-400/30 hover:scale-105 transition duration-500"
							initial={{ x: -70, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{ type: "spring", stiffness: 100 }}
						>
							<Image src={ProjectAll} alt="پروژه‌ها" fill className="object-cover" />
						</motion.div>

						<div className="flex flex-col items-center lg:items-start text-center lg:text-right backdrop-blur-sm bg-black/15 p-6 sm:p-8 rounded-3xl border border-white/10">
							<motion.div
								className="inline-block px-3 py-1 mb-3 rounded-full bg-orange-500/15 text-orange-200 text-[10px] tracking-[0.2em] border border-orange-400/20"
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
							>
								🚀 نمونه کارها
							</motion.div>
							<motion.h1
								className="text-4xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-orange-200 to-yellow-200 bg-clip-text text-transparent"
								initial={{ x: 50, opacity: 0 }}
								whileInView={{ x: 0, opacity: 1 }}
								transition={{ delay: 0.1 }}
							>
								پروژه‌های من
							</motion.h1>
							<Hr className="my-4 w-16 border-orange-400/40" />
							<motion.p
								className="text-lg sm:text-xl text-orange-100/60 leading-relaxed"
								initial={{ x: 50, opacity: 0 }}
								whileInView={{ x: 0, opacity: 1 }}
								transition={{ delay: 0.2 }}
							>
								چند نمونه از کارهایی که ساخته‌ام و روی آنها کار می‌کنم.
							</motion.p>
							<motion.div
								className="mt-5"
								initial={{ y: 25, opacity: 0 }}
								whileInView={{ y: 0, opacity: 1 }}
								transition={{ delay: 0.3 }}
							>
								<Button variation="primary" className="bg-gradient-to-r from-orange-500 to-yellow-500 border-0 shadow-lg shadow-orange-500/25">
									<Link href="/projects">مشاهده پروژه‌ها</Link>
								</Button>
							</motion.div>
						</div>
					</div>
				</div>
			</Section>

			{/* ===== سکشن چهارم: ارتباط ===== */}
			<Section id="contact">
				<div className="relative w-full h-full flex items-center justify-center px-4 sm:px-8 overflow-hidden bg-gradient-to-br from-[#1a0a1a] via-[#2a142a] to-[#3d1f3d]">
					<FloatingOrbs color="border-pink-400/20" />
					<div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center text-white">
						<motion.div
							className="relative w-72 h-56 sm:w-80 sm:h-60 md:w-88 md:h-64 lg:w-80 lg:h-56 xl:w-84 xl:h-60 rounded-tl-[18vh] rounded-tr-[8vh] rounded-br-[22vh] rounded-bl-[12vh] overflow-hidden shadow-2xl shadow-pink-500/20 ring-4 ring-pink-400/30 hover:scale-105 transition duration-500"
							initial={{ x: -70, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{ type: "spring", stiffness: 100 }}
						>
							<Image src={Setup} alt="محیط کاری" fill className="object-cover" />
						</motion.div>

						<div className="flex flex-col items-center lg:items-start text-center lg:text-right backdrop-blur-sm bg-black/15 p-6 sm:p-8 rounded-3xl border border-white/10">
							<motion.div
								className="inline-block px-3 py-1 mb-3 rounded-full bg-pink-500/15 text-pink-200 text-[10px] tracking-[0.2em] border border-pink-400/20"
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
							>
								💬 ارتباط با من
							</motion.div>
							<motion.h1
								className="text-4xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-pink-200 to-purple-200 bg-clip-text text-transparent"
								initial={{ x: 50, opacity: 0 }}
								whileInView={{ x: 0, opacity: 1 }}
								transition={{ delay: 0.1 }}
							>
								در تماس باشید
							</motion.h1>
							<Hr className="my-4 w-16 border-pink-400/40" />
							<motion.p
								className="text-lg sm:text-xl text-pink-100/60 leading-relaxed"
								initial={{ x: 50, opacity: 0 }}
								whileInView={{ x: 0, opacity: 1 }}
								transition={{ delay: 0.2 }}
							>
								سرم شلوغه ولی راه ارتباط همیشه باز هست :)
							</motion.p>
							<motion.p
								className="text-base sm:text-lg text-pink-200/70 mt-2"
								initial={{ x: 50, opacity: 0 }}
								whileInView={{ x: 0, opacity: 1 }}
								transition={{ delay: 0.3 }}
							>
								<a href="mailto:contact@hosseinhunta.ir" className="hover:underline decoration-pink-400/40 underline-offset-4">
									contact@hosseinhunta.ir
								</a>
							</motion.p>

							<div className="flex flex-wrap justify-center lg:justify-end gap-3 mt-5">
								<SocialIcon href="mailto:contact@hosseinhunta.ir" icon={faEnvelope} label="ایمیل" delay={0.1} color="bg-pink-500/20" />
								<SocialIcon href="https://github.com/hosseinhunta" icon={faGithub} label="گیت‌هاب" delay={0.2} color="bg-purple-500/20" />
								<SocialIcon href="https://t.me/hosseinhunta" icon={faTelegram} label="تلگرام" delay={0.3} color="bg-blue-500/20" />
								<SocialIcon href="https://www.linkedin.com/in/hosseinhunta" icon={faLinkedin} label="لینکدین" delay={0.4} color="bg-cyan-500/20" />
								<SocialIcon href="https://blog.hosseinhunta.ir" icon={faWordpress} label="وبلاگ" delay={0.5} color="bg-green-500/20" />
								<SocialIcon href="https://www.instagram.com/hosseinhunta" icon={faInstagram} label="اینستاگرام" delay={0.6} color="bg-rose-500/20" />
							</div>
						</div>
					</div>
				</div>
			</Section>

			<ScrollIndicator />
		</FullPageWrapper>
	);
};

export default MyPage;