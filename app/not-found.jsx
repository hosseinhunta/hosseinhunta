"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const NotFound = () => {
	const errorMessages = [
		"404 | صفحه‌ای که دنبالش هستی توی مخزن گیت‌هام نیست!",
		"Segmentation Fault (core dumped) | صفحه پیدا نشد!",
		"Null Pointer Exception | آدرس مورد نظر خالی است!",
		"404 Not Found | شاید یه جای دیگه کامیت شده!",
		"Broken Link | این لینک رو ربات‌های گوگل هم نتونستن کرال کنن!",
		"⛔ Access Denied | نه تو این مسیر رو بستیم! (شوخی می‌کنم، واقعاً وجود نداره!)",
	];

	const [randomError, setRandomError] = useState("");

	useEffect(() => {
		const randomIndex = Math.floor(Math.random() * errorMessages.length);
		setRandomError(errorMessages[randomIndex]);
	}, []);

	return (
		<div className="relative min-h-screen w-full flex justify-center items-center px-4 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
			<div className="max-w-2xl w-full text-center space-y-8 p-8 rounded-3xl bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm shadow-2xl border border-gray-200 dark:border-gray-700 transition-all duration-500">

				<div className="flex justify-center items-center gap-4">
					<span className="text-7xl animate-bounce">🚀</span>
					<h1 className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 animate-pulse">
						404
					</h1>
					<span className="text-7xl animate-bounce delay-100">🛸</span>
				</div>

				<div className="h-12 flex items-center justify-center">
					<p className="text-xl md:text-2xl font-mono text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 px-6 py-2 rounded-full border border-dashed border-gray-400 dark:border-gray-600">
						{randomError || "در حال بارگذاری خطا..."}
					</p>
				</div>

				<div className="space-y-2">
					<p className="text-lg text-gray-600 dark:text-gray-400">
						👨‍💻 ای داد! انگار این مسیر رو تو `routes` تعریف نکردی!
					</p>
					<p className="text-sm text-gray-500 dark:text-gray-500">
						شاید یه `git checkout` به برنچ اصلی کمکت کنه... یا نه؟!
					</p>
				</div>

				<div className="flex flex-wrap justify-center items-center gap-4 pt-4">
					<button
						onClick={() => window.history.back()}
						className="group relative inline-flex items-center gap-2 px-6 py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-xl hover:bg-gray-900 dark:hover:bg-gray-600 transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-1"
					>
						<span>↩️</span>
						<span>بازگشت به عقب</span>
					</button>

					<Link
						href="/"
						className="group relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-1"
					>
						<span>🏠</span>
						<span>برو خونه (صفحه اصلی)</span>
					</Link>

					<Link
						href="/blog"
						className="group relative inline-flex items-center gap-2 px-6 py-3 bg-amber-500 dark:bg-amber-600 text-white rounded-xl hover:bg-amber-600 dark:hover:bg-amber-700 transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-1"
					>
						<span>📝</span>
						<span>آخرین بلاگ‌ها</span>
					</Link>
				</div>


				<div className="pt-6 text-xs text-gray-400 dark:text-gray-600 font-mono border-t border-gray-200 dark:border-gray-700">
          <span className="select-none">
          </span>
				</div>
			</div>
		</div>
	);
};

export default NotFound;