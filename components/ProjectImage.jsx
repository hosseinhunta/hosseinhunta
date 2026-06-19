"use client";

import { useState } from "react";
import Image from "next/image";
import BlurImage from "@/public/image/placeholder/blur.jpg";

export default function ProjectImage({ src, alt, index }) {
	const [loaded, setLoaded] = useState(false);
	return (
		<div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg mb-6 bg-gray-100">
			{!loaded && (
				<div className="absolute inset-0 animate-pulse bg-gradient-to-r from-gray-200 to-gray-300" />
			)}
			<Image
				src={src}
				alt={alt}
				fill
				className={`object-contain transition-opacity duration-700 ${
					loaded ? "opacity-100" : "opacity-0"
				}`}
				placeholder="blur"
				blurDataURL={BlurImage.src}
				loading={index === 0 ? "eager" : "lazy"}
				onLoad={() => setLoaded(true)}
			/>
		</div>
	);
}