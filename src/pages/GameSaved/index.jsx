import { useContext, useMemo } from "react";

// Custom hooks
import useSetting from "./../../hooks/useSetting";

// Context
import { VocabularyContext } from "./../../context/VocabularyContext";

// Component
import MultipleChoice from "../../components/MultipleChoice";
import useLibrary from "./../../hooks/useLibrary";

export default function GameSaved() {
	// Local setting data
	const [getSetting] = useSetting();
	const setting = useMemo(getSetting, [getSetting]);
	// Destructuring setting
	const timeSetting = setting.time;

	// This contains all vocabulary from context
	let vocabularyContextData = useContext(VocabularyContext);

	const [getSavedList] = useLibrary();
	const savedList = getSavedList();
	const vocabularyData = useMemo(() => {
		return savedList.map((index) => vocabularyContextData[index]);
	}, [vocabularyContextData, savedList]);

	if (vocabularyData.length === 0) return <h1>No vocabulary saved</h1>;
	return (
		<MultipleChoice
			numberOfQuestions={vocabularyData.length}
			vocabularyData={vocabularyData}
			timeSetting={timeSetting}
		/>
	);
}
