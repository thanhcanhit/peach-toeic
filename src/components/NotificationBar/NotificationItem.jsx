import React, { useCallback, useEffect, useState } from "react";
import {
	IoInformationCircle,
	IoAlertCircleSharp,
	IoWarning,
	IoCheckmarkCircle,
	IoClose,
} from "react-icons/io5";
import { useRef } from "react";
import useSound from "use-sound";
import notificationSFX from "../../assets/sfx/notice.mp3";
import { useMemo } from "react";

const notificationType = [
	{
		type: "info",
		title: "Information",
		borderColor: "#3B82F6",
		icon: (
			<div className="text-blue-500">
				<IoInformationCircle />
			</div>
		),
	},
	{
		type: "warn",
		title: "Warning",
		borderColor: "#EAB308",
		icon: (
			<div className="text-yellow-500">
				<IoWarning />
			</div>
		),
	},
	{
		type: "success",
		title: "Success",
		borderColor: "#22C55E",
		icon: (
			<div className="text-green-500">
				<IoCheckmarkCircle />
			</div>
		),
	},
	{
		type: "error",
		title: "Error",
		borderColor: "#EF4444",
		icon: (
			<div className="text-red-500">
				<IoAlertCircleSharp />
			</div>
		),
	},
];
export default React.memo(function NotificationItem({
	type,
	message,
	popFromQueue,
}) {
	const thisItem = useRef();
	const [notificationSound] = useSound(notificationSFX, { volume: 0.6 });
	const [hide, setHide] = useState(false);

	const handleHide = useCallback(() => {
		let opacity = 1;
		let y = 0;
		const fadeStyle = setInterval(() => {
			try {
				thisItem.current.style.opacity = opacity;
				thisItem.current.style.transform = `translateY(-${y}px)`;
				y += 1.5;
				opacity -= 0.01;
				if (thisItem.current.style.opacity <= 0) {
					popFromQueue();
					clearInterval(fadeStyle);
				}
			} catch (e) {
				popFromQueue();
				clearInterval(fadeStyle);
			}
		}, 1);
	}, [popFromQueue, thisItem]);

	useEffect(() => {
		notificationSound();
		let timeRest = 2000;
		const timeInterval = setInterval(() => {
			timeRest -= 100;

			if (timeRest <= 0) {
				clearInterval(timeInterval);
				setHide(true);
			}
		}, 100);

		return () => clearInterval(timeInterval);
	}, [notificationSound, type, message]);

	useEffect(() => {
		if (hide) handleHide();
	}, [handleHide, hide]);

	const itemType = useMemo(
		() => notificationType.find((item) => item.type === type),
		[type]
	);

	return (
		<div
			className="relative flex gap-4 px-4 py-2 mx-4 my-2 bg-white border-2 border-l-8 rounded-lg shadow-lg opacity-100 animate-slide-in-top"
			style={{ borderLeftColor: itemType.borderColor }}
			onClick={popFromQueue}
			ref={thisItem}
		>
			<div className="flex items-center justify-center text-3xl text-blue-500">
				{itemType.icon}
			</div>
			<div className="pr-2">
				<h5 className="font-bold text-15">{itemType.title}</h5>
				<span className="text-14 two-line">{message}</span>
			</div>
			<span className="absolute right-2 top-[50%] translate-y-[-50%] text-18 opacity-60">
				<IoClose />
			</span>
		</div>
	);
});
