export default function useSetting() {
	const key = "PEACH_TOEIC";

	const get = () => {
		const localData = JSON.parse(window.localStorage.getItem(key)) || null;
		if (!localData.setting) {
			localData.setting = { quantity: 5, time: 10, type: 0 };
			window.localStorage.setItem(key, JSON.stringify(localData));
		}
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
