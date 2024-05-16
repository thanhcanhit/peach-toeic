import { useContext, useEffect, useState } from "react";
import useSound from "use-sound";

// Custom hooks
import useLibrary from "./../../hooks/useLibrary";

// Context
import { VocabularyContext } from "./../../context/VocabularyContext";

// Components
import ContentCard from "../../components/ContentCard";
import DetailCard from "../../components/DetailCard";

// Sounds
import bubblePopSFX from "../../assets/sfx/bubble-pop.mp3";
import paperSFX from "../../assets/sfx/page-flip.mp3";
import { NotificationContext } from "../../App";
import { Link } from "react-router-dom";

export default function Library() {
	// Sounds
	const [clickSound] = useSound(bubblePopSFX, { volume: 0.8 });
	const [deleteSound] = useSound(paperSFX, { volume: 0.8 });

	// Local Data
	const vocaList = useContext(VocabularyContext);
	const [getLocalLibraryData, setLocalLibraryData] = useLibrary();

	// State
	const [library, setLibrary] = useState(getLocalLibraryData());
	const [activeIndex, setActiveIndex] = useState(0);

	// Remove item in state library by id
	const removeItem = (id) => {
		if (library.includes(id)) {
			deleteSound();
			setLibrary((prev) => {
				return prev.filter((item) => item !== id);
			});
		}
	};

	// Update local storage contain library data
	useEffect(() => {
		setLocalLibraryData(library);
	}, [library, setLocalLibraryData]);

	// Notification
	const addNotification = useContext(NotificationContext);

	return (
		<div className="px-4 pt-8 pb-24">
			<h2 className="mb-4 text-center title">Saved Vocabulary</h2>

			{library.length >= 4 ? (
				<div className="flex justify-center">
					<button className="px-4 py-2 mb-8 font-semibold text-white rounded-full shadow bg-primary text-12">
						<Link to="/game-saved">Practice saved vocabulary</Link>
					</button>
				</div>
			) : (
				<div>
					<p className="mx-auto text-sm italic text-center text-gray-400">
						To practice you must have least 4 item
					</p>
				</div>
			)}
			<ul className="grid grid-cols-1 gap-2">
				{library.map((id, index) => (
					<li
						key={id}
						className="p-2 transition-colors duration-300 border rounded odd:bg-indigo-100 even:bg-teal-100 active:bg-blue-100"
						onClick={() => {
							clickSound();
							setActiveIndex(index);
						}}
					>
						<DetailCard
							index={index}
							name={vocaList[id].name}
							removeItem={() => {
								removeItem(id);
								addNotification(
									"info",
									`Removed ${vocaList[id].name} from Library`
								);
							}}
							activeIndex={activeIndex}
						>
							<ContentCard item={vocaList[id]} />
						</DetailCard>
					</li>
				))}
				{library.length === 0 && (
					<div className="mt-4 text-center opacity-60">
						<p>You have not saved any words yet.</p>
						<p className="italic text-14">
							Try adding a few words to query them faster!
						</p>
					</div>
				)}
			</ul>
		</div>
	);
}
