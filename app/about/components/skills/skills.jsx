"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { CodepenIcon, WebhookIcon, ActivityIcon, MobileIcon } from "./icons";

const skillCategories = {
	web: {
		title: "توسعه تحت وب",
		icon: CodepenIcon,
		description: "ساخت برنامه‌های وب، وب‌سایت‌های واکنش‌گرا و اپلیکیشن‌های پیشرفته",
		languages: [
			{ name: "NextJS", highlight: true },
			{ name: "Svelte", highlight: true },
			{ name: "TypeScript", highlight: true },
			{ name: "JavaScript", highlight: true },
			{ name: "PHP", highlight: true },
			{ name: "Python && Django", highlight: false },
			{ name: "HTML", highlight: false },
			{ name: "CSS", highlight: false },
			{ name: "TailwindCSS", highlight: true },
			{ name: "Bootstrap", highlight: false },
			{ name: "Flutter", highlight: true },
			{ name: "BunJS", highlight: true },
		],
		tools: [
			"Vercel",
			"Vite",
			"Figma",
			"Docker",
			"Git",
			"Github",
			"Postman",
			"Bun",
			"Prettier",
			"Eslint",
			"Prisma",
		],
	},
	api: {
		title: "Backend & API",
		icon: WebhookIcon,
		description: "ساخت سرویس‌های مقیاس‌پذیر و APIهای قدرتمند",
		languages: [
			{ name: "Java Spring Boot", highlight: false },
			{ name: "ASP.NET", highlight: false },
			{ name: "BunJS", highlight: true },
			{ name: "NestJS", highlight: true },
			{ name: "PHP", highlight: true },
			{ name: "Laravel", highlight: true },
			{ name: "FastAPI", highlight: true },
			{ name: "Python", highlight: true },
			{ name: "Flask", highlight: false },
			{ name: "Django", highlight: true },
			{ name: "PostgreSQL", highlight: true },
			{ name: "MySQL", highlight: true },
			{ name: "MongoDB", highlight: true },
		],
		tools: [
			"Docker",
			"GraphQL",
			"Postman",
			"Swagger",
			"Git",
			"Github",
			"ORM",
			"JWT",
			"BetterAuth",
			"MVT",
			"MVC",
		],
	},
	ai: {
		title: "مرکز تلفن و سرویس تحت شبکه",
		icon: ActivityIcon,
		description: "سیستم تلفنی هوشمند تحت شبکه و مدیریت شبکه",
		languages: [
			{ name: "Simotel", highlight: true },
			{ name: "Asterisk", highlight: true },
			{ name: "3CX", highlight: false },
			{ name: "Issabel", highlight: false },
			{ name: "Ubuntu", highlight: true },
			{ name: "Debian", highlight: true },
			{ name: "CentOS", highlight: false },
			{ name: "ArchLinux", highlight: false },
			{ name: "Socket", highlight: true },
			{ name: "FastAGI", highlight: true },
		],
		tools: [
			"Simotel PBX",
			"Ubuntu Linux Server",
			"Socket Programing Service",
			"AGI Script",
		],
	},
	mobile: {
		title: "توسعه اپلیکیشن موبایل",
		icon: MobileIcon,
		description: "طراحی و ساخت اپلیکیشن‌های موبایل کراس‌پلتفرم",
		languages: [
			{ name: "React Native", highlight: false },
			{ name: "Flutter", highlight: true },
			{ name: "Dart", highlight: true },
			{ name: "Tauri", highlight: true },
			{ name: "Kotlin", highlight: false },
			{ name: "Java", highlight: false },
			{ name: "Rust", highlight: true },
		],
		tools: ["Android Studio", "Tauri CLI", "BloC", "GetX", "MVC"],
	},
};

function SkillCard({ skill, isSelected, onClick }) {
	const Icon = skill.icon;

	return (
		<motion.div
			onClick={onClick}
			className={`relative cursor-pointer group p-6 rounded-2xl border transition-all duration-300 ${
				isSelected
					? "bg-gradient-to-br from-purple-50 to-pink-50 border-purple-400 shadow-lg shadow-purple-500/20"
					: "bg-white/60 border-gray-200/60 hover:bg-white/80 hover:border-purple-300/50"
			}`}
			whileHover={{ scale: 1.03 }}
			whileTap={{ scale: 0.97 }}
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.3 }}
		>
			<div className="relative z-10 flex flex-col items-center text-center space-y-4">
				<div
					className={`p-4 rounded-xl transition-all duration-300 ${
						isSelected
							? "bg-gradient-to-br from-purple-500/20 to-pink-500/20"
							: "bg-gray-100/50 group-hover:bg-purple-100/50"
					}`}
				>
					<Icon className="w-8 h-8 text-gray-700" />
				</div>
				<div>
					<h3 className="font-bold text-gray-800 text-lg mb-2">{skill.title}</h3>
					<p className="text-gray-500 text-sm leading-relaxed">{skill.description}</p>
				</div>
			</div>
		</motion.div>
	);
}

const tagVariants = {
	hidden: { opacity: 0, scale: 0.8 },
	show: { opacity: 1, scale: 1 },
};

function SkillDetails({ selectedSkill }) {
	if (!selectedSkill) return null;

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -20 }}
			transition={{ duration: 0.5 }}
			className="mt-12 space-y-8"
		>
			{/* Languages & Frameworks */}
			<motion.div
				className="bg-white/60 backdrop-blur-sm border border-gray-200/60 rounded-2xl p-8 shadow-lg"
				initial={{ opacity: 0, x: -50 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ delay: 0.2 }}
			>
				<h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
					فناوری‌های مورد استفاده
				</h3>
				<motion.div
					key={selectedSkill.title}
					className="flex flex-wrap justify-center gap-3"
					variants={{ hidden: {}, show: { transition: { staggerChildren: 0.04, delayChildren: 0.1 } } }}
					initial="hidden"
					animate="show"
				>
					{selectedSkill.languages.map((skill) => (
						<motion.span
							key={skill.name}
							variants={tagVariants}
							className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-default flex items-center gap-2
                ${
								skill.highlight
									? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md shadow-purple-500/30 scale-105 z-10 hover:shadow-lg"
									: "bg-gray-100/80 border border-gray-200 text-gray-700 hover:bg-gray-200/80"
							}`}
						>
							{skill.highlight && (
								<span className="text-yellow-300 text-[10px] animate-pulse">✦</span>
							)}
							{skill.name}
						</motion.span>
					))}
				</motion.div>
			</motion.div>

			{/* Tools */}
			<motion.div
				className="bg-white/40 backdrop-blur-sm border border-gray-200/40 rounded-2xl p-8 shadow-lg"
				initial={{ opacity: 0, x: 50 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ delay: 0.4 }}
			>
				<h3 className="text-xl font-medium text-gray-500 mb-6 text-center uppercase tracking-wider">
					زیرساخت فنی و ابزارهای توسعه
				</h3>
				<motion.div
					key={selectedSkill.title + "-tools"}
					className="flex flex-wrap justify-center gap-3"
					variants={{ hidden: {}, show: { transition: { staggerChildren: 0.04, delayChildren: 0.1 } } }}
					initial="hidden"
					animate="show"
				>
					{selectedSkill.tools.map((tool) => (
						<motion.span
							key={tool}
							variants={tagVariants}
							className="px-4 py-1.5 bg-gray-100/60 border border-gray-200/60 rounded-lg text-gray-600 text-xs font-medium"
						>
							{tool}
						</motion.span>
					))}
				</motion.div>
			</motion.div>
		</motion.div>
	);
}

export default function Skills() {
	const [selectedCategory, setSelectedCategory] = useState("web");

	return (
		<section className="relative py-20 px-4 sm:px-8 bg-gradient-to-b from-gray-50/50 via-white to-purple-50/30">
			<div className="w-full max-w-7xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-center space-y-4 mb-16"
				>
					<div className="inline-block px-4 py-1.5 mb-2 rounded-full bg-purple-500/10 border border-purple-400/20 text-purple-700 text-xs tracking-[0.2em]">
						🛠️ تخصص‌ها
					</div>
					<h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
						مهارت و تجربه‌ها
					</h2>
					<p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
						مهارت‌های فنی من را در حوزه‌های گوناگون بررسی کنید. با کلیک روی هر بخش، ابزارها و تکنولوژی‌های مورداستفاده‌ام را ببینید.
					</p>
				</motion.div>

				{/* Grid کارت‌ها */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{Object.entries(skillCategories).map(([key, skill], index) => (
						<motion.div
							key={key}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.1 }}
						>
							<SkillCard
								skill={skill}
								isSelected={selectedCategory === key}
								onClick={() => setSelectedCategory(key)}
							/>
						</motion.div>
					))}
				</div>

				{/* جزئیات */}
				<AnimatePresence mode="wait">
					<SkillDetails selectedSkill={skillCategories[selectedCategory]} />
				</AnimatePresence>
			</div>
		</section>
	);
}