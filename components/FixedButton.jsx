import Link from "next/link";

const FixedButton = ({ children, href = "/" }) => (
	<div className="absolute top-24 z-40 w-full px-4 sm:px-8 pointer-events-none">
		<Link
			href={href}
			className="pointer-events-auto inline-flex items-center justify-center w-11 h-11 rounded-full bg-white/80 backdrop-blur-md border border-gray-200/50 shadow-lg hover:shadow-xl hover:scale-105 hover:bg-white transition-all duration-300 text-gray-700 hover:text-gray-900"
			aria-label="بازگشت"
		>
			{children}
		</Link>
	</div>
);

export default FixedButton;