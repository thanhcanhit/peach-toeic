import React from "react";
import { twMerge } from "tailwind-merge";

export default React.forwardRef(function Button(
	{ children, onClick, isPrimary, icon, fullWidth, disabled },
	ref
) {
	let className =
		"px-6 py-2 text-black bg-s-white transition-all rounded-lg shadow-md active:shadow-none active:bg-blue-300 disabled:bg-light-gray";
	if (icon) className = twMerge(className, " flex items-center gap-5 ");
	if (isPrimary) className = twMerge(className, " bg-primary text-white ");
	if (fullWidth) className = twMerge(className, " w-full");

	return (
		<button ref={ref} onClick={onClick} className={className} disabled={disabled}>
			{icon}
			{children}
		</button>
	);
});
