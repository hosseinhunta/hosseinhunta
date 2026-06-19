const Button = ({ children, variation, className = "", ...props }) => {
	const base =
		"inline-flex items-center justify-center gap-2 font-medium rounded-2xl px-6 py-2.5 text-sm sm:text-base transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";

	const variants = {
		primary:
			"bg-gray-800 text-white hover:bg-gray-700 hover:shadow-lg hover:scale-[1.02] shadow-md",
		secondary:
			"bg-transparent border-2 border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white hover:shadow-lg hover:scale-[1.02]",
	};

	return (
		<button
			{...props}
			className={`${base} ${variants[variation] || variants.primary} ${className}`}
		>
			{children}
		</button>
	);
};

export default Button;