import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGraduationCap,
	faMedal,
	faUsers,
	faChalkboardTeacher,
	faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import Me4 from "@/public/image/me4.jpeg";
import Me5 from "@/public/image/me5.jpg";
import Me6 from "@/public/image/me6.jpg";

export default function Education() {
	return (
		<section className="relative py-20 px-4 sm:px-8 bg-gradient-to-b from-purple-50/30 via-white to-gray-50/50">
			<div className="w-full max-w-7xl mx-auto">
				{/* هدر */}
				<motion.div
					className="text-center space-y-4 mb-16"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					<div className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/20 text-emerald-700 text-xs tracking-[0.2em]">
						🎓 مسیر علمی
					</div>
					<h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
						مسیر علمی و حرفه‌ای
					</h2>
					<p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
						مروری بر تحصیلات، افتخارات و فعالیت‌های جانبی من در دوران دانشگاه
					</p>
				</motion.div>

				{/* محتوای اصلی */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
					{/* بخش چپ: تحصیلات و افتخارات */}
					<motion.div
						className="space-y-6"
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
					>
						{/* دانشگاه */}
						<div className="bg-white/60 backdrop-blur-sm border border-gray-200/60 rounded-2xl p-6 shadow-lg">
							<div className="flex items-center gap-4 mb-4">
								<div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
									<FontAwesomeIcon icon={faGraduationCap} className="text-2xl" />
								</div>
								<div>
									<h3 className="font-bold text-xl text-gray-800">کارشناسی مهندسی کامپیوتر</h3>
									<p className="text-sm text-gray-500">گرایش نرم‌افزار</p>
								</div>
							</div>
							<p className="text-gray-600 text-sm leading-relaxed">
								دوران کارشناسی من با <span className="font-semibold text-gray-800">تمرکز بر توسعه نرم‌افزار و معماری سیستم</span> گذشت. علاوه بر دروس تخصصی، همواره به دنبال کاربرد عملی دانش در پروژه‌های واقعی بودم.
							</p>
						</div>

						{/* افتخارات */}
						<div className="bg-white/60 backdrop-blur-sm border border-gray-200/60 rounded-2xl p-6 shadow-lg">
							<h4 className="text-sm font-medium uppercase tracking-wider text-gray-400 mb-4">
								✦ افتخارات دانشگاهی
							</h4>
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
								<div className="bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-xl p-4 border border-amber-200/50">
									<div className="flex items-center gap-3">
										<div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-600">
											<FontAwesomeIcon icon={faMedal} className="text-sm" />
										</div>
										<div>
											<p className="text-xs text-gray-500">افتخار</p>
											<p className="text-sm font-medium text-gray-800">پژوهشگر برتر</p>
										</div>
									</div>
								</div>
								<div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl p-4 border border-blue-200/50">
									<div className="flex items-center gap-3">
										<div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-600">
											<FontAwesomeIcon icon={faMedal} className="text-sm" />
										</div>
										<div>
											<p className="text-xs text-gray-500">افتخار</p>
											<p className="text-sm font-medium text-gray-800">دانشجوی ممتاز</p>
										</div>
									</div>
								</div>
								<div className="col-span-1 sm:col-span-2 bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-xl p-4 border border-purple-200/50">
									<div className="flex items-center gap-3">
										<div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-600">
											<FontAwesomeIcon icon={faUsers} className="text-sm" />
										</div>
										<div>
											<p className="text-xs text-gray-500">مسئولیت</p>
											<p className="text-sm font-medium text-gray-800">
												رئیس انجمن مهندسی کامپیوتر و مهندسی پزشکی
											</p>
										</div>
									</div>
								</div>
							</div>
							<p className="text-gray-600 text-sm leading-relaxed mt-4">
								به‌عنوان <span className="font-semibold text-gray-800">رئیس انجمن‌های مهندسی کامپیوتر و مهندسی پزشکی</span>، فرصت داشتم تا جامعه‌ی دانشجویی را به سمت یادگیری عمیق‌تر و پروژه‌های گروهی سوق دهم.
							</p>
						</div>
					</motion.div>

					{/* بخش راست: فعالیت‌های فوق‌برنامه */}
					<motion.div
						className="space-y-6"
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
					>
						<h3 className="font-bold text-2xl text-gray-800">فعالیت‌های فوق‌برنامه</h3>
						<p className="text-gray-500 text-sm">تجربه‌های آموزشی و اجرایی در کنار تحصیل</p>

						{/* گالری تصاویر */}
						<div className="flex gap-3 h-[200px] sm:h-[250px]">
							<div className="flex-1 transition-all duration-300 hover:flex-[2.5] group rounded-xl overflow-hidden shadow-lg">
								<Image
									src={Me5}
									alt="فعالیت علمی"
									className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
								/>
							</div>
							<div className="flex-1 transition-all duration-300 hover:flex-[2.5] group rounded-xl overflow-hidden shadow-lg">
								<Image
									src={Me4}
									alt="فعالیت دانشگاهی"
									className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
								/>
							</div>
							<div className="flex-1 transition-all duration-300 hover:flex-[2.5] group rounded-xl overflow-hidden shadow-lg">
								<Image
									src={Me6}
									alt="تجربه تدریس"
									className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
								/>
							</div>
						</div>

						{/* کارت‌های فعالیت‌ها */}
						<div className="space-y-3">
							<div className="bg-white/60 backdrop-blur-sm border border-gray-200/60 rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all">
								<div className="flex items-start gap-4">
									<div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
										<FontAwesomeIcon icon={faChalkboardTeacher} className="text-lg" />
									</div>
									<div>
										<h4 className="font-semibold text-gray-800">مربی برنامه‌نویسی</h4>
										<p className="text-gray-600 text-sm">
											تدریس <span className="font-medium text-gray-800">پایتون (Python)</span> و{" "}
											<span className="font-medium text-gray-800">PHP</span> به دانشجویان و علاقه‌مندان
										</p>
									</div>
								</div>
							</div>

							<div className="bg-white/60 backdrop-blur-sm border border-gray-200/60 rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all">
								<div className="flex items-start gap-4">
									<div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 flex-shrink-0">
										<FontAwesomeIcon icon={faShieldAlt} className="text-lg" />
									</div>
									<div>
										<h4 className="font-semibold text-gray-800">مدرس کارگاه امنیت</h4>
										<p className="text-gray-600 text-sm">
											برگزاری کارگاه‌های <span className="font-medium text-gray-800">امنیت سایبری</span> و آشنایی با تهدیدات و راهکارهای مقابله
										</p>
									</div>
								</div>
							</div>

							<div className="bg-white/60 backdrop-blur-sm border border-gray-200/60 rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all">
								<div className="flex items-start gap-4">
									<div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
										<FontAwesomeIcon icon={faUsers} className="text-lg" />
									</div>
									<div>
										<h4 className="font-semibold text-gray-800">مدیریت انجمن‌های علمی</h4>
										<p className="text-gray-600 text-sm">
											ریاست هم‌زمان <span className="font-medium text-gray-800">انجمن مهندسی کامپیوتر</span> و{" "}
											<span className="font-medium text-gray-800">مهندسی پزشکی</span> دانشگاه
										</p>
									</div>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}