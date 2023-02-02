import React, { useEffect, useRef } from "react";
import styles from "./style.module.css";

export default function ChatBox({ message, time }) {
	const chatBoxElement = useRef();
	useEffect(() => {
		let top = 40;
		const flyIn = setInterval(() => {
			top -= 5;
			chatBoxElement.current.style.top = top + "px";
			chatBoxElement.current.style.opacity = 1;
			if (top <= 0) clearInterval(flyIn);
		}, 20);

		let fadeOut = null;
		if (time !== "unset") {
			fadeOut = setTimeout(() => {
				chatBoxElement.current.style.opacity = 0;
			}, 3000);
		}

		return () => {
			if (fadeOut !== null) clearTimeout(fadeOut);
			clearInterval(flyIn);
		};
	}, [message, time]);

	return (
		<div
			className={
				styles.chatBox +
				" relative bg-white shadow border py-2 px-6 ml-4 rounded-full mb-2 font-rowdies text-primary transition-all will-change-auto opacity-0"
			}
			ref={chatBoxElement}
		>
			<p>{message}</p>
		</div>
	);
}
