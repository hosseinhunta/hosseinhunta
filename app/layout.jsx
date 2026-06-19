import "./globals.css";
import { Poppins, Jost,Vazirmatn } from "next/font/google";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import { Analytics } from "@vercel/analytics/react";
import ClientTopProgressBar from "@/components/ClientTopProgressBar";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
	style: ["normal", "italic"],
	display: "swap",
	variable: "--font-poppins",
});

const jost = Jost({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	display: "swap",
	variable: "--font-jost",
});

const vazirmatn = Vazirmatn({
	subsets: ["arabic"],
	display: "block",
	variable: "--font-vazirmatn",
});

export const metadata = {
	metadataBase: new URL("https://hosseinhunta.ir"),
	title: {
		default: "حسین محمدیان نژاد | مهندس نرم‌افزار و معمار سیستم",
		template: "%s | حسین محمدیان نژاد",
	},
	description:
		"من حسین محمدیان نژاد، مهندس نرم‌افزار و معمار سیستم‌های مقیاس‌پذیر هستم. تخصص من در تلاقی توسعه نرم‌افزار، شبکه‌های کامپیوتری و هوش مصنوعی قرار دارد. به طراحی و پیاده‌سازی سیستم‌های امن، مقاوم و هوشمند با تکنیک‌های مدرن AI علاقه‌مندم.",

	authors: [{ name: "Hossein Mohammadian Nejad" }],
	applicationName: "Hossein Hunta - Portfolio",

	keywords: [
		"حسین محمدیان نژاد",
		"Hossein Mohammadian Nejad",
		"مهندس نرم‌افزار",
		"معمار سیستم",
		"برنامه‌نویس ارشد",
		"هوش مصنوعی",
		"شبکه‌های کامپیوتری",
		"سیستم‌های مقیاس‌پذیر",
		"توسعه بک‌اند",
		"برنامه‌نویسی پایتون",
		"Next.js",
		"React",
		"پورتفولیو برنامه‌نویسی",
		"hosseinhunta",
	],

	alternates: {
		canonical: "https://hosseinhunta.ir",
		languages: {
			"fa-IR": "https://hosseinhunta.ir",
			"en-US": "https://hosseinhunta.ir/en",
		},
	},

	openGraph: {
		type: "website",
		url: "https://hosseinhunta.ir",
		title: "حسین محمدیان نژاد | مهندس نرم‌افزار و معمار سیستم",
		siteName: "وب سایت شخصی حسین محمدیان نژاد",
		description:
			"معمار سیستم‌های مقیاس‌پذیر و توسعه‌دهنده هوش مصنوعی | مشاهده رزومه و مقالات فنی",
		images: [
			{
				url: "/og-image-rev.png",
				alt: "لوگوی برند حسین محمدیان نژاد - برنامه‌نویس و معمار سیستم",
				width: 1200,
				height: 630,
			},
		],
		locale: "fa_IR",
	},

	twitter: {
		card: "summary_large_image",
		title: "حسین محمدیان نژاد | مهندس نرم‌افزار",
		description:
			"معمار سیستم‌های مقیاس‌پذیر و توسعه‌دهنده هوش مصنوعی | مشاهده رزومه و مقالات فنی",
		images: ["/og-image-rev.png"],
		creator: "@hosseinhunta",
	},

	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},

	verification: {
		// اگر نیاز به تایید در سرچ کنسول دارید
		// google: "کد-تایید-گوگل",
	},
};

const jsonLd = {
	"@context": "https://schema.org",
	"@type": "Person",
	"@id": "https://hosseinhunta.ir/#person",
	name: "Hossein Mohammadian Nejad",
	alternateName: "حسین محمدیان نژاد",
	url: "https://hosseinhunta.ir",
	image: "https://hosseinhunta.ir/og-image-rev.png",
	description:
		"مهندس نرم‌افزار و معمار سیستم‌های مقیاس‌پذیر با تخصص در هوش مصنوعی و شبکه‌های کامپیوتری",
	jobTitle: "CTO و معمار ارشد نرم‌افزار",
	worksFor: {
		"@type": "Organization",
		name: "Astel",
		url: "https://astel.ir",
	},
	alumniOf: {
		"@type": "CollegeOrUniversity",
		name: "Ferdowsi University of Mashhad",
	},
	knowsAbout: [
		"Software Architecture",
		"Scalable Systems",
		"Artificial Intelligence",
		"Computer Networking",
		"Backend Development",
		"System Design",
		"Python",
		"Next.js",
		"Microservices",
	],
	sameAs: [
		"https://github.com/hosseinhunta",
		"https://t.me/hosseinhunta",
		"https://gravatar.com/hosseinhunta",
		"https://www.linkedin.com/in/hosseinhunta",
	],
	inLanguage: "fa-IR",
};

export default function RootLayout({ children }) {
	return (
		<html lang="fa" dir="rtl" className={`${poppins.variable} ${jost.variable} ${vazirmatn.variable}`}>
			<body>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
				<ClientTopProgressBar />
				<Navbar />
				{children}
				<Analytics />
			</body>
		</html>
	);
}
