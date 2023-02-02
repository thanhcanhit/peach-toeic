export default function useComplete() {
	const key = "PEACH_TOEIC";

	const get = () => {
		const localData = JSON.parse(window.localStorage.getItem(key)) || null;
		return localData?.data?.topicComplete;
	};

	const set = (newData) => {
		const localData = JSON.parse(window.localStorage.getItem(key)) || null;
		if (localData) {
			localData.data.topicComplete = newData;
			window.localStorage.setItem(key, JSON.stringify(localData));
		}
	};

	return [get, set];
}
