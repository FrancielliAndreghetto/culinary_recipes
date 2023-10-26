export default function button({ ...props }) {
	return (
		<button
			className="w-full h-12 bg-[rgba(225,152,83,0.7)] rounded-md text-white hover:bg-[rgba(207,140,76,0.7)]"
			{...props}
		>
		</button>
	)
}