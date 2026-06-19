import Image from "next/image";
import { motion } from "framer-motion";
import Me1 from "@/public/image/me1.jpg";
import Me2 from "@/public/image/me7.jpg";
import Me3 from "@/public/image/setup.jpg";

export default function About() {
	return (
		<section className="py-20 px-4 sm:px-8 bg-gradient-to-b from-white via-gray-50/50 to-gray-100/30">
			<div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
				{/* گالری تصاویر خلاقانه */}
				<div className="relative w-full aspect-square max-w-md mx-auto lg:mx-0">
					{/* تصویر اول - بزرگ */}
					<div className="absolute top-[5%] left-[10%] w-[55%] aspect-square rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/20 ring-2 ring-purple-400/30 grayscale hover:grayscale-0 transition-all duration-500 z-20">
						<motion.div
							initial={{ opacity: 0, x: -50, rotate: -5 }}
							whileInView={{ opacity: 1, x: 0, rotate: 0 }}
							transition={{ type: "spring", stiffness: 120 }}
							className="w-full h-full"
						>
							<Image src={Me1} alt="تصویر ۱" fill className="object-cover" />
						</motion.div>
					</div>

					{/* تصویر دوم - کوچک */}
					<div className="absolute top-[25%] right-[5%] w-[40%] aspect-square rounded-2xl overflow-hidden shadow-2xl shadow-pink-500/20 ring-2 ring-pink-400/30 grayscale hover:grayscale-0 transition-all duration-500 z-30">
						<motion.div
							initial={{ opacity: 0, x: 50, rotate: 5 }}
							whileInView={{ opacity: 1, x: 0, rotate: 0 }}
							transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
							className="w-full h-full"
						>
							<Image src={Me2} alt="تصویر ۲" fill className="object-cover" />
						</motion.div>
					</div>

					{/* تصویر سوم - متوسط */}
					<div className="absolute bottom-[5%] right-[20%] w-[50%] aspect-square rounded-2xl overflow-hidden shadow-2xl shadow-emerald-500/20 ring-2 ring-emerald-400/30 grayscale hover:grayscale-0 transition-all duration-500 z-10">
						<motion.div
							initial={{ opacity: 0, scale: 0.8 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ delay: 0.4, type: "spring", stiffness: 120 }}
							className="w-full h-full"
						>
							<Image src={Me3} alt="تصویر ۳" fill className="object-cover" />
						</motion.div>
					</div>
				</div>

				{/* متن بیوگرافی */}
				<motion.div
					className="flex flex-col items-center lg:items-start text-center lg:text-right"
					initial={{ opacity: 0, x: 80 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.3, type: "spring" }}
				>
					<div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-purple-500/10 border border-purple-400/20 text-purple-700 text-xs tracking-[0.2em]">
						👨‍💻 مهندس نرم‌افزار و معمار سیستم
					</div>

					<h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
						حسین محمدیان نژاد
						<span className="block text-base sm:text-lg font-normal text-gray-500 mt-1">
              CTO & Senior Programmer
            </span>
					</h2>

					<div className="text-gray-600 text-base sm:text-lg leading-relaxed space-y-4 mt-4">
						<p>
							من <span className="text-purple-700 font-semibold">مهندس نرم‌افزاری</span> هستم که بر{" "}
							<span className="text-purple-700 font-semibold">معماری سیستم‌های مقیاس‌پذیر</span> و توسعهٔ راه‌حل‌های نرم‌افزاری پیچیده تمرکز دارم. تخصص اصلی من در نقطهٔ تلاقی{" "}
							<span className="text-purple-700 font-semibold">توسعهٔ نرم‌افزار، شبکه‌های کامپیوتری و هوش مصنوعی</span> قرار گرفته است.
						</p>
						<p>
							فارغ‌التحصیل{" "}
							<span className="text-emerald-700 font-semibold">کارشناسی مهندسی کامپیوتر</span> هستم و مسیر حرفه‌ای‌ام با پروژه‌های چالش‌برانگیزی تعریف شده که از{" "}
							<span className="text-emerald-700 font-semibold">میکروسرویس‌های برای حل مشکلات واقعی</span> تا{" "}
							<span className="text-emerald-700 font-semibold">پلتفرم‌های پیشرفته درون سازمانی</span> را شامل می‌شود.
						</p>
						<p>
							در حال حاضر، به‌عنوان{" "}
							<span className="text-orange-600 font-semibold">مسئول فنی و توسعه‌دهنده</span> در شرکت{" "}
							<span className="text-orange-600 font-semibold">ارتین ارتباط آینده</span> مشغول به فعالیت هستم و مسئولیت طراحی و پیاده‌سازی سیستم‌های با کارایی بالا و امن را بر عهده دارم. همچنین،{" "}
							<span className="text-orange-600 font-semibold">دیدگاه فنی</span> تیم را به‌عنوان{" "}
							<span className="text-orange-600 font-semibold">مدیر فنی (CTO)</span> هدایت می‌کنم.
						</p>
					</div>

					{/* دکمه‌های اجتماعی کوچک */}
					<div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-6">
						<a
							href="https://github.com/hosseinhunta"
							target="_blank"
							rel="noopener noreferrer"
							className="px-4 py-2 rounded-xl bg-gray-200/80 text-gray-700 hover:bg-gray-300 transition text-sm font-medium"
						>
							گیت‌هاب
						</a>
						<a
							href="https://www.linkedin.com/in/hosseinhunta"
							target="_blank"
							rel="noopener noreferrer"
							className="px-4 py-2 rounded-xl bg-blue-100/80 text-blue-700 hover:bg-blue-200 transition text-sm font-medium"
						>
							لینکدین
						</a>
						<a
							href="mailto:contact@hosseinhunta.ir"
							className="px-4 py-2 rounded-xl bg-purple-100/80 text-purple-700 hover:bg-purple-200 transition text-sm font-medium"
						>
							ایمیل
						</a>
					</div>
				</motion.div>
			</div>
		</section>
	);
}