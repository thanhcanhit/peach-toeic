export default function useSetting() {
	const key = "PEACH_TOEIC";

	const get = () => {
		const localData = JSON.parse(window.localStorage.getItem(key)) || null;
		return localData?.setting;
	};

	const set = (newData) => {
		const localData = JSON.parse(window.localStorage.getItem(key)) || {};
		if (localData) {
			localData.setting = newData;
			window.localStorage.setItem(key, JSON.stringify(localData));
		}
	};

	return [get, set];
}
