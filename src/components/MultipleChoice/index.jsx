import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useSound } from "use-sound";

// Components
import Timer from "../../components/Timer";
import QuestionCard from "./../../components/QuestionCard";
import AnswerButton from "./../../components/AnswerButton";
import Button from "./../../components/Button";

// Images wibu
import goodJobGIF from "../../assets/gif/good_job.gif";

// Sounds
import completeSFX from "./../../assets/sfx/complete.mp3";
import useUser from "../../hooks/useLocalData";

export default function MultipleChoice({
	timeSetting,
	numberOfQuestions,
	vocabularyData,
}) {
	// Played list vocabulary
	const playedList = useRef([]);

	//Get array of 4 random vocabulary, one of that has property question
	const getQuestionList = useRef(() => {
		const list = [];
		// Toget the list of 4 vocabulary items
		do {
			// Random number generator
			const random = Math.floor(Math.random() * vocabularyData.length);
			let item = vocabularyData[random];

			// Check replacements
			if (!list.includes(item)) list.push(item);

			// Check all 4 item is played, If true pop last element from list
			if (list.every((item) => playedList.current.includes(item.id)))
				list.pop();
		} while (list.length < 4);

		//  Set one of that become question & answers and not played again
		let random;
		do {
			random = Math.floor(Math.random() * 4);
		} while (playedList.current.includes(list[random].id));
		// Add this question to played list
		playedList.current.push(list[random].id);

		return list.map((item, index) => {
			const question = index === random;
			return { ...item, isQuestion: question };
		});
	});

	// Sound
	const [completeSound] = useSound(completeSFX, { volume: 1 });

	// State
	const [life, setLife] = useState(true);
	const [time, setTime] = useState(timeSetting);
	const [score, setScore] = useState(0);
	const [current, setCurrent] = useState(1);

	// This state contain 4 vocabulary variables will be used to render
	const [questionList, setQuestionList] = useState(getQuestionList.current);

	// Calculate the user result
	const [usedTime, setUsedTime] = useState(0);
	const [wrongCounter, setWrongCounter] = useState(0);

	// Handle when the game is over
	const endGame = useCallback(() => {
		setTime(-1);
		setTimeout(() => {
			setLife(false);
			completeSound();
		}, 600);
	}, [completeSound]);

	// Handle when clicked on a correct answer
	const correct = useCallback(() => {
		setScore((prev) => prev + 100);

		// If complete quantity vocabulary
		if (current === numberOfQuestions) {
			endGame();
		}
		// If not
		else
			setTimeout(() => {
				setCurrent((prev) => prev + 1);
				setTime(timeSetting);
				setQuestionList(getQuestionList.current());
			}, 300);
	}, [current, endGame, numberOfQuestions, timeSetting]);

	// Handle when clicked on a wrong answer
	const wrong = useCallback(() => {
		setWrongCounter((prev) => prev + 1);
		setScore((prev) => prev - 100);
	}, []);

	// Navigate to correct function
	const checkAnswer = useCallback(
		(result) => {
			if (result) {
				correct();
			} else {
				wrong();
			}
		},
		[correct, wrong]
	);

	// Handle time
	useEffect(() => {
		// Handle what happens every second.
		const countDown = setTimeout(() => {
			setTime((prev) => prev - 1);
			setUsedTime((prev) => prev + 1);
		}, 1000);

		// Handle time out
		if (time <= 0) {
			clearTimeout(countDown);
			endGame();
		}

		// Handle remove time out when unmounted
		return () => {
			try {
				clearTimeout(countDown);
			} catch (e) {}
		};
	}, [time, endGame]);

	// Get the question
	const question = useMemo(() => {
		return questionList.find((item) => item.isQuestion === true);
	}, [questionList]);

	const [getUser, setUser] = useUser();
	const userData = getUser();
	useEffect(() => {
		if (!life) {
			if (
				score > userData.highScore.score ||
				(score === userData.highScore.score &&
					usedTime < userData.highScore.time)
			) {
				setUser({
					...userData,
					highScore: { score: score, time: usedTime },
				});
			}
		}
	}, [life, score, setUser, usedTime, userData]);

	return (
		<div>
			{life ? (
				<div className="h-[100vh] p-4 flex flex-col">
					{/* Top block */}
					<header className="mb-4">
						<Timer percent={(time / timeSetting) * 100} />
						<div className="flex justify-between text-15 text-primary font-semibold mt-2">
							<p>
								Score:
								<span
									className={
										"ml-1 " +
										(score >= 0
											? "text-green-500"
											: "text-red-500")
									}
								>
									{score}
								</span>
							</p>
							<p>
								{current}/{numberOfQuestions}
							</p>
						</div>
					</header>
					{/* Main block */}
					<main className="grid grid-rows-2 grid-cols-1 justify-between h-full w-full">
						{/* Question */}
						<div>
							<QuestionCard item={question} />
						</div>

						{/* 4 Answer */}
						<div className="mt-auto w-full">
							<ul className="grid grid-cols-1 gap-2">
								{questionList.map((item, index) => (
									<AnswerButton
										key={index}
										value={item.meaning}
										isCorrect={item.isQuestion}
										question={question}
										handleClick={checkAnswer}
									/>
								))}
							</ul>
						</div>
					</main>
				</div>
			) : (
				<div className="fixed lg:absolute inset-0">
					{/* Show result */}
					<div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[80%] bg-white rounded z-10">
						<h3 className="title text-center border-b p-4 mb-4">
							Congratulation🎉
						</h3>
						<div className="px-4 pb-4">
							<p>
								You learned
								<span className="text-primary">
									{` ${current} `}
								</span>
								words in
								<span className="text-primary">
									{` ${usedTime}s `}
								</span>
								!
							</p>
							<img
								className="my-4 rounded-lg"
								src={goodJobGIF}
								alt="loli says good job!"
							/>
							<div className="opacity-75">
								<p>
									This time you made
									<span className="text-blue-500 mx-1">
										{wrongCounter}
									</span>
									mistakes
								</p>
								<p>
									Your score is:
									<span
										className={
											(score > 0
												? "text-green-500"
												: "text-red-500") + " ml-1"
										}
									>
										{score}
									</span>
								</p>
							</div>
							<div className="mt-4">
								<Button isPrimary>
									<Link to="/practice">Back</Link>
								</Button>
							</div>
						</div>
					</div>
					{/* Black Layer */}
					<div className="fixed lg:absolute inset-0 bg-black opacity-50"></div>
				</div>
			)}
		</div>
	);
}
