import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSound } from "use-sound";

// Utility functions
import { transformName } from "../../assets/utilities/transform_text";

// Components
import TopicItem from "../../components/TopicItem";

// Context
import { TopicContext } from "../../context/TopicContext";

// Custom hooks
import useLearned from "./../../hooks/useLearned";
import usePrevious from "./../../hooks/usePrevious";
import useCompleteTopic from "../../hooks/useCompleteTopic";

// Icons
import { IoLocationSharp } from "react-icons/io5";

// Sound effects
import wipeSFX from "../../assets/sfx/wipe.mp3";

export default function Home() {
	// Sound effects
	const [wipeSound] = useSound(wipeSFX, {volume: .5});

	// Get topic data from context
	const topicData = useContext(TopicContext);

	// Get local learned data
	const [getLearned] = useLearned();
	const learnedList = getLearned();

	// Get complete topic
	const [getCompleteTopic, setCompleteTopic] = useCompleteTopic();
	const completeTopicList = getCompleteTopic();

	// Filter topic
	const [topicList] = useState(() => {
		return topicData.map((item) => {
			// Because one topic has 12 vocabulary => just get by index instead of filtered data
			const start = item.id * 12;
			const end = start + 11;

			// Linear check if the topic has completed
			let complete = true;
			for (let i = start; i <= end; i++) {
				if (!learnedList.includes(i)) {
					complete = false;
					break;
				}
			}

			// Add to complete list
			if (complete && !completeTopicList.includes(item.id)) completeTopicList.push(item.id);

			return { ...item, complete };
		});
	});

	useEffect(() => {
		setCompleteTopic(completeTopicList);
	}, [completeTopicList, setCompleteTopic])

	// Previous
	const [getPrevious, setPrevious] = usePrevious();
	const previousView = getPrevious();

	// Function scroll to previous item
	const scrollToPrevious = (smooth) => {
		const previousItem = document.querySelector(".previous");
		previousItem.scrollIntoView({
			block: "center",
			inline: "nearest",
			behavior: smooth ? "smooth" : "auto",
		});
	};

	// Scroll to previous view item in first time
	useEffect(() => {
		// Previous topic will has the 'previous' class applied => scroll to it
		scrollToPrevious();
	}, []);

	return (
		<section className="px-4 pt-8">
			<h3 className="title mb-4 text-center">Select a content topic</h3>
			<ul className="grid grid-cols-2 place-items-center gap-4 justify-center bg-white">
				{topicList.map((item) => (
					<li
						key={item.id}
						onClick={() => setPrevious(item.id)}
						className={
							(item.id === previousView ? "previous" : "") +
							" will-change-scroll"
						}
					>
						<Link to={transformName(item.name)}>
							<TopicItem
								topic={item}
								isCompleted={item.complete}
								isPrevious={item.id === previousView}
							/>
						</Link>
					</li>
				))}
			</ul>
			<button
				onClick={() => {
					wipeSound();
					scrollToPrevious(true);
				}}
				className="fixed z-[49] right-2 lg:right-[40%] bottom-[4.5rem] p-2 text-2xl text-white bg-primary active:bg-neutral-500 rounded-full shadow"
			>
				<IoLocationSharp />
			</button>
		</section>
	);
}
