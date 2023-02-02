import React, { useCallback, useLayoutEffect, useState } from "react";
import Cat from "../Cat.jsx";
import useLocalData from "../../hooks/useLocalData";

export default function Pet() {
	const [getLocalData] = useLocalData();
	const localData = getLocalData();

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const chatMessage = [
		"Long tim no sy, swizt",
		"Yu sould tri 5 seconb mode (handsome/beautiful Mode)",
		`Yu learned ${localData.learned.length}/600 wut`,
		`Yu have tu learn ${600 - localData.learned.length} mor wuts to komplete`,
		`Yu progress i ${Math.floor((localData.learned.length / 600) * 100)} purcent`,
		`Curent peak i ${localData.highScore.score} in ${localData.highScore.time}s`,
		`Wuw yu studid ${localData.dayStreak} deys in a ruw`,
		`Yu with me ${localData.dayLearned.length} deys`,
		'Insanity i duing the sem thing, uver and uver again, but expectung differunt results',
		'Be where yur fit are',
		'Life i nut fair, please gut used tu it',
		'The wey to gut started i tu quit talking and begun doing',
		'A wunner never stops trying.',
		'Know yur limits, but never stop trying tu exceed them.'
	];

	const [message, setMessage] = useState(
		chatMessage[Math.floor(Math.random() * chatMessage.length)]
	);

	const randomMessage = useCallback(() => {
		setMessage((prev) => {
			let message;
			do {
				message =
					chatMessage[Math.floor(Math.random() * chatMessage.length)];
			} while (prev === message);
			return message;
		});
	}, [chatMessage]);

	useLayoutEffect(() => {
		const changeMessage = setInterval(() => {
			randomMessage();
		}, 10000);

		return () => clearInterval(changeMessage);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="fixed lg:absolute bottom-[4.5rem] right-4 left-auto" onClick={randomMessage}>
			<Cat message={message} />
		</div>
	);
}
