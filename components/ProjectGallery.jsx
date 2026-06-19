"use client";

import { motion } from "framer-motion";
import ProjectImage from "./ProjectImage";

export default function ProjectGallery({ images }) {
	if (!images || images.length === 0) return null;

	return (
		<div className="mt-16">
			<motion.div
				className="text-center space-y-2 mb-8"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				<div className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-400/20 text-purple-700 text-xs tracking-[0.2em]">
					🖼️ گالری تصاویر
				</div>
				<h2 className="text-2xl font-bold text-gray-800">تصاویر پروژه</h2>
			</motion.div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{images.map((img, idx) => (
					<ProjectImage key={idx} src={img} alt={`تصویر ${idx + 1}`} index={idx} />
				))}
			</div>
		</div>
	);
}