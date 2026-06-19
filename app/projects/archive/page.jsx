"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
	faArrowUpRightFromSquare,
	faChevronLeft, faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import FixedButton from "@/components/FixedButton";
import Projects from "@/json/data.json";

export default function ArchivePage() {
	const projects = Projects.Projects;

	return (
		<main className="min-h-screen py-12 px-4 sm:px-8 bg-gradient-to-b from-orange-50/30 via-white to-yellow-50/20">
			<FixedButton href="/projects">
				<FontAwesomeIcon icon={faChevronRight} className="text-sm" />
			</FixedButton>

			<div className="w-full max-w-7xl mx-auto mt-12">
				<motion.div
					className="text-center space-y-4 mb-10"
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					<div className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-400/20 text-orange-700 text-xs tracking-[0.2em]">
						📚 آرشیو کامل
					</div>
					<h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
						آرشیو پروژه‌ها
					</h1>
					<p className="text-gray-500 max-w-2xl mx-auto text-lg">
						همه پروژه‌های من در یک نگاه — از قدیمی‌ترین تا جدیدترین
					</p>
				</motion.div>

				<div className="overflow-x-auto rounded-2xl shadow-xl bg-white/80 backdrop-blur-sm border border-gray-200/60">
					<table className="w-full text-right border-collapse">
						<thead className="bg-gradient-to-r from-orange-500/10 to-yellow-500/10 text-gray-700 border-b border-gray-200">
						<tr>
							<th className="p-4 text-sm font-semibold">سال</th>
							<th className="p-4 text-sm font-semibold">عنوان</th>
							<th className="p-4 text-sm font-semibold hidden md:table-cell">
								تکنولوژی
							</th>
							<th className="p-4 text-sm font-semibold">لینک‌ها</th>
						</tr>
						</thead>
						<tbody>
						{projects.map((project, index) => (
							<motion.tr
								key={project.slug}
								className="border-b border-gray-100 hover:bg-orange-50/50 transition-colors duration-300"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: index * 0.03 }}
							>
								<td className="p-4 text-gray-600 font-mono text-sm">
									{project.year}
								</td>
								<td className="p-4">
									<Link
										href={`/projects/${project.slug}`}
										className="text-gray-800 hover:text-orange-600 font-medium transition-colors hover:underline underline-offset-2"
									>
										{project.title}
									</Link>
								</td>
								<td className="p-4 hidden md:table-cell">
									<div className="flex flex-wrap gap-1">
										{project.tech.slice(0, 3).map((t) => (
											<span
												key={t}
												className="px-2 py-1 bg-gray-100/80 rounded-full text-xs text-gray-700 border border-gray-200"
											>
                          {t}
                        </span>
										))}
										{project.tech.length > 3 && (
											<span className="px-2 py-1 bg-gray-100/80 rounded-full text-xs text-gray-500">
                          +{project.tech.length - 3}
                        </span>
										)}
									</div>
								</td>
								<td className="p-4">
									<div className="flex items-center gap-3">
										{project.code && (
											<a
												href={project.code}
												target="_blank"
												rel="noopener noreferrer"
												className="text-gray-500 hover:text-orange-600 transition-colors duration-300 hover:scale-110"
												aria-label="مخزن گیت‌هاب"
											>
												<FontAwesomeIcon icon={faGithub} className="text-xl" />
											</a>
										)}
										{project.preview && (
											<a
												href={project.preview}
												target="_blank"
												rel="noopener noreferrer"
												className="text-gray-500 hover:text-orange-600 transition-colors duration-300 hover:scale-110"
												aria-label="پیش‌نمایش"
											>
												<FontAwesomeIcon
													icon={faArrowUpRightFromSquare}
													className="text-xl"
												/>
											</a>
										)}
									</div>
								</td>
							</motion.tr>
						))}
						</tbody>
					</table>
				</div>

				<div className="flex justify-center mt-8">
					<Link
						href="/projects"
						className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium transition-colors"
					>
						<FontAwesomeIcon icon={faChevronLeft} className="text-sm" />
						بازگشت به لیست پروژه‌ها
					</Link>
				</div>
			</div>
		</main>
	);
}