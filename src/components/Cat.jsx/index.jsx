import React, { useEffect, useRef, useState } from "react";
import catUp from "./img/cat-up.png";
import catDown from "./img/cat-down.png";
import { useSound } from "use-sound";
import ChatBox from "./ChatBox";
import meowSFX from "./meow.mp3";

export default function Cat({ message, time }) {
	const [isDown, setIsDown] = useState();
	const cat = useRef();
	const [meowSound] = useSound(meowSFX, { volume: 0.2 });
	useEffect(() => {
		const catSlap = setInterval(() => {
			setIsDown((prev) => !prev);
			if (isDown) cat.current.src = catDown;
			else cat.current.src = catUp;
		}, 500);

		return () => {
			clearInterval(catSlap);
		};
	}, [isDown, meowSound]);

	useEffect(() => {
		meowSound();
	}, [meowSound, message]);

	return (
		<div>
			<ChatBox message={message} time={time}/>
			<img
				ref={cat}
				src={catUp}
				alt="cat"
				className="w-[200px] ml-auto lg:cursor-pointer"
			/>
		</div>
	);
}
