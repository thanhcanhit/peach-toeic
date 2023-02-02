import React from "react";
import { BiTimeFive } from "react-icons/bi";

export default React.memo(function Timer({ percent }) {
	return (
		<div className="flex gap-2 items-center">
			<span className="text-20">
				<BiTimeFive />
			</span>
			<div className="relative w-full h-2 bg-gray-200 rounded-full">
				<div
					className={
						"absolute inset-0 right-[unset] rounded-full bg-primary transition-all" +
						(percent === 100
							? " duration-150"
							: " duration-1000 ease-linear")
					}
					style={{
						right: 100 - percent + "%",
					}}
				></div>
			</div>
		</div>
	);
});
