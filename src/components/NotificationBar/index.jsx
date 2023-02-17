import React from "react";
import NotificationItem from "./NotificationItem";

export default React.memo(function NotificationBar({ queue, popFromQueue }) {
	return (
		<div className="fixed lg:absolute top-4 left-0 right-0 z-[999]">
			{queue.map((item, index) => (
				<NotificationItem
					type={item.type}
					message={item.message}
					key={index}
					popFromQueue={popFromQueue}
				/>
			))}
		</div>
	);
});
