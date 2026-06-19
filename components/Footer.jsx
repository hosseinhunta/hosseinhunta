"use client";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
	const currentYear = new Date().getFullYear();

	const socialLinks = [
		{ icon: faGithub, href: "https://github.com/hosseinhunta", label: "گیت‌هاب" },
		{ icon: faLinkedin, href: "https://www.linkedin.com/in/hosseinhunta", label: "لینکدین" },
		{ icon: faTelegram, href: "https://t.me/hosseinhunta", label: "تلگرام" },
		{ icon: faInstagram, href: "https://www.instagram.com/hosseinhunta", label: "اینستاگرام" },
	];

	return (
		<footer className="relative mt-16 overflow-hidden bg-gradient-to-b from-transparent via-gray-50/60 to-gray-100/80 dark:via-gray-900/20 dark:to-gray-900/40">
			<div className="absolute inset-0 -z-10 opacity-20">
				<div className="absolute -top-20 -left-20 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl" />
				<div className="absolute -bottom-20 -right-20 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl" />
			</div>

			<div className="container mx-auto px-6 md:px-12 py-10">
				<div className="flex flex-col md:flex-row justify-between items-center gap-6">
					<div className="flex items-center gap-3">
						<div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center text-white font-bold text-sm shadow-md">
							ح
						</div>
						<div className="text-right">
							<p className="text-sm font-medium text-gray-700 dark:text-gray-200">
								حسین محمدیان نژاد
							</p>
							<p className="text-[11px] text-gray-400 dark:text-gray-500 font-mono">
								{currentYear} · مهندس نرم‌افزار
							</p>
						</div>
					</div>

					<div className="flex items-center gap-3">
						{socialLinks.map((item, index) => (
							<motion.a
								key={index}
								href={item.href}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={item.label}
								className="w-10 h-10 rounded-full bg-gray-200/80 dark:bg-gray-800/80 text-gray-600 dark:text-gray-400 hover:bg-purple-600 hover:text-white dark:hover:bg-purple-500 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
								initial={{ opacity: 0, scale: 0.8 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{ delay: 0.1 * index, duration: 0.3 }}
								whileHover={{ y: -3 }}
							>
								<FontAwesomeIcon icon={item.icon} className="text-lg" />
							</motion.a>
						))}
					</div>

					<div className="text-center md:text-left">
						<p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
							<span>ساخته شده با</span>
							<FontAwesomeIcon icon={faHeart} className="text-red-500 text-xs animate-pulse" />
							<span>اوپن سورس</span>
						</p>
						<p className="text-[10px] text-gray-400 dark:text-gray-600 mt-0.5 font-mono">
							کپی‌برداری آزاد، با ذکر منبع
						</p>
					</div>
				</div>

				<div className="mt-6 pt-4 border-t border-gray-200/40 dark:border-gray-700/30">
					<div className="flex justify-center items-center gap-2 text-[10px] text-gray-400 dark:text-gray-600 uppercase tracking-[0.2em] font-mono">
						<span>✦</span>
						<span>NextJS · Tailwind · Framer</span>
						<span>✦</span>
					</div>
				</div>
			</div>
		</footer>
	);
}