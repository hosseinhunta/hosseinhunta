import jsonData from "@/json/data.json";
import NotFound from "@/app/not-found";
import FixedButton from "@/components/FixedButton";
import ScrollButton from "@/components/ScrollButton";
import ProjectGallery from "@/components/ProjectGallery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
	faArrowUpRightFromSquare,
	faCalendar,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export async function generateStaticParams() {
	return jsonData.Projects.map((project) => ({
		slug: project.slug,
	}));
}

// صفحه به صورت Server Component (بدون "use client")
export default async function ProjectPage({ params }) {
	const { slug } = await params;
	const data = jsonData.Projects.find((item) => item.slug === slug);

	if (!data) return <NotFound />;

	return (
		<main className="min-h-screen py-12 px-4 sm:px-8 bg-gradient-to-b from-orange-50/30 via-white to-yellow-50/20">
			<FixedButton href="/projects">
				<FontAwesomeIcon icon={faChevronRight} className="text-sm" />
			</FixedButton>
			<ScrollButton />

			<div className="w-full max-w-7xl mx-auto mt-16">
				{/* هدر پروژه */}
				<div className="mb-12 text-center">
					<div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-orange-500/10 border border-orange-400/20 text-orange-700 text-xs tracking-[0.2em]">
						{data.category?.includes(1) ? "💻 وب" : data.category?.includes(2) ? "📱 موبایل" : "🤖 هوش مصنوعی"}
					</div>
					<h1 className="text-4xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
						{data.title}
					</h1>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
					{/* اطلاعات پروژه */}
					<div className="lg:col-span-1 space-y-6">
						<div className="bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-2xl p-6 shadow-lg">
							<div className="space-y-4">
								<div>
									<h3 className="text-xs uppercase tracking-widest text-gray-400 font-medium">
										سال ساخت
									</h3>
									<p className="text-xl font-bold text-gray-800 flex items-center gap-2 mt-1">
										<FontAwesomeIcon icon={faCalendar} className="text-orange-500 text-sm" />
										{data.year}
									</p>
								</div>
								<div>
									<h3 className="text-xs uppercase tracking-widest text-gray-400 font-medium">
										تکنولوژی‌ها
									</h3>
									<div className="flex flex-wrap gap-2 mt-2">
										{data.tech.map((t) => (
											<span
												key={t}
												className="px-3 py-1 bg-gradient-to-r from-orange-50 to-yellow-50 border border-orange-200/50 rounded-full text-sm font-medium text-gray-700"
											>
												{t}
											</span>
										))}
									</div>
								</div>
								{data.preview && (
									<div>
										<h3 className="text-xs uppercase tracking-widest text-gray-400 font-medium">
											پیش‌نمایش
										</h3>
										<a
											href={data.preview}
											target="_blank"
											rel="noopener noreferrer"
											className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium mt-1 transition-colors hover:underline"
										>
											<span>مشاهده پروژه</span>
											<FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-sm" />
										</a>
									</div>
								)}
								{data.code && (
									<div>
										<h3 className="text-xs uppercase tracking-widest text-gray-400 font-medium">
											مخزن
										</h3>
										<a
											href={data.code}
											target="_blank"
											rel="noopener noreferrer"
											className="inline-flex items-center gap-2 text-gray-700 hover:text-orange-600 font-medium mt-1 transition-colors hover:underline"
										>
											<FontAwesomeIcon icon={faGithub} className="text-lg" />
											<span>گیت‌هاب</span>
										</a>
									</div>
								)}
							</div>
						</div>
					</div>

					{/* توضیحات */}
					<div className="lg:col-span-2 space-y-4">
						<div className="bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-2xl p-6 shadow-lg">
							<h2 className="text-sm uppercase tracking-widest text-gray-400 font-medium mb-4">
								توضیحات پروژه
							</h2>
							{data.desc.map((paragraph, idx) => (
								<p
									key={idx}
									className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 last:mb-0"
								>
									{paragraph}
								</p>
							))}
						</div>
					</div>
				</div>

				{/* گالری تصاویر - کامپوننت کلاینت */}
				<ProjectGallery images={data.images} />
			</div>
		</main>
	);
}