import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import BlurImage from "@/public/image/placeholder/blur.jpg";

export default function ProjectCard({ project, index, activeCategory }) {
	if (!project.category.includes(parseInt(activeCategory))) return null;

	return (
		<Link href={`/projects/${project.slug}`}>
			<motion.div
				className="group relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-orange-50 to-yellow-50 border border-orange-100/50"
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ delay: index * 0.08, type: "spring", damping: 20 }}
				whileHover={{ y: -8 }}
			>
				{/* تصویر با هاور بزرگ‌نمایی */}
				<div className="relative w-full h-full">
					<Image
						src={project.thumbnail}
						alt={project.title}
						fill
						className="object-contain transition-transform duration-700 group-hover:scale-110"
						placeholder="blur"
						blurDataURL={BlurImage.src}
					/>
					{/* گرادینت روی تصویر */}
					<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/60 transition-all duration-500" />
				</div>

				{/* برچسب سال */}
				<div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
					{project.year}
				</div>

				{/* محتوای پایین */}
				<div className="absolute bottom-0 left-0 right-0 p-6 text-white">
					<h3 className="text-2xl font-bold mb-1 group-hover:text-orange-200 transition-colors">
						{project.title}
					</h3>
					<p className="text-sm text-gray-200/80 line-clamp-2 max-w-[90%]">
						{project.desc[0].length > 100
							? `${project.desc[0].slice(0, 100)}...`
							: project.desc[0]}
					</p>
					<div className="flex flex-wrap gap-2 mt-3">
						{project.tech.slice(0, 4).map((t) => (
							<span
								key={t}
								className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs border border-white/10"
							>
                {t}
              </span>
						))}
						{project.tech.length > 4 && (
							<span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs border border-white/10">
                +{project.tech.length - 4}
              </span>
						)}
					</div>
				</div>

				{/* افکت نور روی کارت */}
				<div className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
					<div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 blur-xl" />
				</div>
			</motion.div>
		</Link>
	);
}

ProjectCard.propTypes = {
	project: PropTypes.object.isRequired,
	index: PropTypes.number.isRequired,
	activeCategory: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
		.isRequired,
};