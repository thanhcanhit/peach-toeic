import React, { useEffect, useState } from "react";
import { useSound } from "use-sound";

// Sounds
import correctSFX from "../../assets/sfx/correct.mp3";
import wrongSFX from "../../assets/sfx/notice.mp3";

export default React.memo(function AnswerButton({ isCorrect, value, handleClick, question }) {

	const [sound] = useSound(isCorrect ? correctSFX : wrongSFX, {
		volume: 0.5,
	});

	const [show, setShow] = useState(false);
	const [isClicked, setIsClicked] = useState(false);

	// This side effect will be triggered by question changes
	useEffect(() => {
		setShow(false);
		setIsClicked(false);
	}, [question]);

	return (
		<li>
			<button
				onClick={() => {
					setShow(true);
					sound();
					setIsClicked(true);
					handleClick(isCorrect);
				}}
				disabled={isClicked}
				className="w-full bg-s-white text-14 border shadow-md min-h-[60px] p-2 rounded-lg tap-highlight-none transition-all duration-300"
				style={
					show
						? {
								backgroundColor: isCorrect
									? "#00E676"
									: "#F44336",
								color: "#fff",
						  }
						: {}
				}
			>
				<p className="two-line">{value}</p>
			</button>
		</li>
	);
})