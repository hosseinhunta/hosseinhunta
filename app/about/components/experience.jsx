"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faMapPin, faBriefcase } from "@fortawesome/free-solid-svg-icons";

const experiences = [
	// ... داده‌های شما (همان‌هایی که قبلاً داشتید)
];

experiences.reverse();

export default function Experience() {
	const [showAll, setShowAll] = useState(false);
	const displayed = showAll ? experiences : experiences.slice(0, 3);

	return (
		<section className="relative py-20 px-4 sm:px-8 bg-gradient-to-b from-gray-50/50 via-white to-orange-50/30">
			<div className="w-full max-w-6xl mx-auto">
				{/* هدر */}
				<motion.div
					className="text-center space-y-4 mb-16"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					<div className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-400/20 text-orange-700 text-xs tracking-[0.2em]">
						💼 سابقه کاری
					</div>
					<h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
						تجربه‌های حرفه‌ای
					</h2>
					<p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
						مروری بر پروژه‌ها و نقش‌های من در شرکت‌ها و استارتاپ‌های مختلف
					</p>
				</motion.div>

				{/* تایم‌لاین */}
				<div className="relative">
					{/* خط عمودی */}
					<div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-orange-400/60 via-yellow-400/40 to-transparent" />

					{displayed.map((exp, index) => (
						<motion.div
							key={exp.id}
							className={`relative flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 mb-12 ${
								index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
							}`}
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.1, duration: 0.5 }}
						>
							{/* نقطه روی تایم‌لاین */}
							<div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-orange-500 border-4 border-white shadow-lg z-10" />

							{/* کارت تاریخ */}
							<div className="md:w-5/12 flex justify-center md:justify-end">
								<div className="bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-2xl px-6 py-3 shadow-lg flex items-center gap-4">
									<div className="text-center">
										<p className="text-sm font-bold text-gray-800">{exp.startDate}</p>
										<p className="text-[10px] text-gray-400">شروع</p>
									</div>
									<div className="w-px h-8 bg-gray-300" />
									<div className="text-center">
										<p className="text-sm font-bold text-gray-800">{exp.endDate}</p>
										<p className="text-[10px] text-gray-400">پایان</p>
									</div>
									<div className="w-px h-8 bg-gray-300" />
									<div className="text-center">
										<FontAwesomeIcon icon={faMapPin} className="text-gray-400 text-sm" />
										<p className="text-xs text-gray-500">{exp.location}</p>
									</div>
								</div>
							</div>

							{/* کارت محتوا */}
							<div className={`md:w-5/12 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
								<div className="bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
									<div className="flex items-center gap-3 mb-2">
										<FontAwesomeIcon icon={faBriefcase} className="text-orange-500" />
										<h3 className="font-bold text-xl text-gray-800">{exp.company}</h3>
									</div>
									<h4 className="font-semibold text-lg text-gray-700">
										{exp.position}
										<span className="text-sm font-normal text-gray-400 mr-2">• {exp.type}</span>
									</h4>
									<p className="text-gray-600 text-sm leading-relaxed mt-3">{exp.description}</p>
									<div className="flex flex-wrap gap-2 mt-4">
										{exp.skills.map((skill) => (
											<span
												key={skill}
												className="px-3 py-1 bg-orange-100/60 border border-orange-200/40 rounded-full text-xs font-medium text-orange-800"
											>
                        {skill}
                      </span>
										))}
									</div>
								</div>
							</div>
						</motion.div>
					))}

					{/* دکمه نمایش بیشتر */}
					{experiences.length > 3 && (
						<motion.div
							className="flex justify-center mt-8"
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
						>
							<button
								onClick={() => setShowAll(!showAll)}
								className="px-8 py-3 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-medium shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105"
							>
								{showAll ? "نمایش کمتر" : "مشاهده همه تجربه‌ها"}
							</button>
						</motion.div>
					)}
				</div>
			</div>
		</section>
	);
}