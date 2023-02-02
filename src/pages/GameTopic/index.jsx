import { useContext, useMemo } from "react";

// Custom hooks
import useSetting from "./../../hooks/useSetting";
import usePrevious from "./../../hooks/usePrevious";

// Context
import { VocabularyContext } from "./../../context/VocabularyContext";

// Component
import MultipleChoice from "../../components/MultipleChoice";

export default function Game() {
	// Local setting data
	const [getSetting] = useSetting();
	const setting = useMemo(getSetting, [getSetting]);
	// Destructuring setting
	const timeSetting = setting.time;

	// This contains all vocabulary from context
	let vocabularyContextData = useContext(VocabularyContext);

	// Get previous topic view
	const [getPreviousTopic] = usePrevious();
	const topicID = getPreviousTopic();

	const vocabularyData = useMemo(() => {
		// Learn vocabulary each topic
		const start = topicID * 12;
		const end = start + 11;
		const result = [];
		for (let i = start; i <= end; i++)
			result.push(vocabularyContextData[i]);

		return result;
	}, [topicID, vocabularyContextData]);

	return (
		<MultipleChoice
			numberOfQuestions={12}
			vocabularyData={vocabularyData}
			timeSetting={timeSetting}
		/>
	);
}
