import React, { useEffect, useRef, useState } from "react";
import { HiTrash } from "react-icons/hi2";

export default function DetailCard({
	name,
	index,
	removeItem,
	activeIndex,
	children,
}) {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		if (activeIndex !== index) setIsOpen(false);
		else
			currentElement.current.scrollIntoView({
				block: "center",
				behavior: "smooth",
			});
	}, [activeIndex, index]);

	const currentElement = useRef();

	return (
		<article ref={currentElement}>
			<header
				className="flex justify-between items-center px-2"
				onClick={() => setIsOpen((prev) => !prev)}
			>
				<h3 className="text-18 one-line">
					{index + 1}. {name}
				</h3>
				<div
					className="text-20 active:text-red-400 text-gray-500 transition-colors"
					onClick={removeItem}
				>
					<HiTrash />
				</div>
			</header>
			{isOpen && <div className="mt-2 z-10"> {children}</div>}
		</article>
	);
}
