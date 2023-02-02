export default function usePrevious() {
	const key = "PEACH_TOEIC";

	const get = () => {
		const localData = JSON.parse(window.localStorage.getItem(key)) || null;
		return localData?.data?.previous;
	};

	const set = (newData) => {
		const localData = JSON.parse(window.localStorage.getItem(key)) || null;
		if (localData) {
			localData.data.previous = newData;
			window.localStorage.setItem(key, JSON.stringify(localData));
		}
	};

	return [get, set];
}
