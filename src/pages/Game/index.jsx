import { useContext, useMemo, useRef } from "react";
// Custom hooks
import useSetting from "./../../hooks/useSetting";
import useLearned from "./../../hooks/useLearned";

// Context
import { VocabularyContext } from "./../../context/VocabularyContext";

// Component
import MultipleChoice from "../../components/MultipleChoice";

export default function Game() {
	// Local setting data
	const [getSetting] = useSetting();
	const setting = useMemo(getSetting, [getSetting]);
	// Destructuring setting
	const {
		time: timeSetting,
		quantity: quantitySetting,
		topic: topicSetting,
	} = setting;

	// This contains all vocabulary from context
	let vocabularyContextData = useContext(VocabularyContext);

	// Local learned data
	const [getLearned] = useLearned();

	const vocabularyData = useMemo(() => {
		// If topic setting is "learned" and learnedList has more than 4 item, change vocabularyData (all) to learned vocabulary
		const learnedList = getLearned();
		if (topicSetting === 1 && learnedList.length >= 4)
			return learnedList.map((id) => vocabularyContextData[id]);

		// Default return all vocabulary data
		return vocabularyContextData;
	}, [getLearned, topicSetting, vocabularyContextData]);

	// Get true vocabulary quantity
	const maxQuantityQuestion = useRef(
		useMemo(() => {
			return Math.min(quantitySetting, vocabularyData.length);
		}, [quantitySetting, vocabularyData.length])
	);

	return (
		<MultipleChoice
			numberOfQuestions={maxQuantityQuestion.current}
			vocabularyData={vocabularyData}
			timeSetting={timeSetting}
		/>
	);
}
