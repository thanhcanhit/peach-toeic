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
		`Yu progress iz ${Math.floor((localData.learned.length / 600) * 100)} purcent`,
		`Curent peak iz ${localData.highScore.score} in ${localData.highScore.time}s`,
		`Wuw yu studid ${localData.dayStreak} deys in a ruw`,
		`Yu with me ${localData.dayLearned.length} deys`,
		'Insanity iz duing the sem thing, uver and uver again, but expectung differunt results',
		'Be where yur fit are',
		'Life iz nut fair, please gut used tu it',
		'The wey to get started iz tu quit talking and begyn doing.',
		'A winner niver stops trying.',
		'Know yur limits, but never stop trying tu exceed them.',
		'Gu tu thanhcanhit.github.io to see another bullshit application.'
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
		}, 20000);

		return () => clearInterval(changeMessage);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="fixed lg:absolute bottom-[4.5rem] right-4 left-auto" onClick={randomMessage}>
			<Cat message={message} />
		</div>
	);
}
