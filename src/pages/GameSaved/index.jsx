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
	const vocabularyData = useMemo(() => {
		const savedList = getSavedList();
		const result = [];
		for (let i = 0; i < savedList.length; i++)
			result.push(vocabularyContextData[savedList[i]]);
		return result;
	}, [vocabularyContextData, getSavedList]);

	return (
		<MultipleChoice
			numberOfQuestions={vocabularyData.length}
			vocabularyData={vocabularyData}
			timeSetting={timeSetting}
		/>
	);
}
