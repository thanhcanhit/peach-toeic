import React from "react";

export default React.forwardRef(function CircleButton(
	{ children, onClick },
	ref
) {
	return (
		<button
			ref={ref}
			onClick={onClick}
			className="inline-flex items-center justify-center rounded-full w-[2.5rem] h-[2.5rem] bg-primary text-white text-20 shadow-sm active:shadow-none active:bg-blue-300"
		>
			{children}
		</button>
	);
});
