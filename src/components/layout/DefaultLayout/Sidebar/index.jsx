import { useState } from "react";
import { Link } from "react-router-dom";
import { useSound } from "use-sound";

// Icons
import { HiAcademicCap, HiPlay } from "react-icons/hi2";
import { HiClipboardList, HiFlag } from "react-icons/hi";

// Sound Effects
import bubbleSoundSrc from "../../../../assets/sfx/bubble-pop.mp3";

const sidebarList = [
	{
		id: 0,
		title: "Home",
		path: "/",
		icon: <HiAcademicCap />,
		color: "#5C6BC0",
	},
	{
		id: 1,
		title: "Practice",
		path: "/practice",
		icon: <HiPlay />,
		color: "#FA8072",
	},
	{
		id: 2,
		title: "Library",
		path: "/library",
		icon: <HiFlag />,
		color: "#3CB371",
	},
	{
		id: 3,
		title: "Progress",
		path: "/progress",
		icon: <HiClipboardList />,
		color: "#7A9CC6",
	},
];

export default function Sidebar() {
	// Current tab id
	const [activeTab, setActiveTab] = useState(() => {
		// Analysis path name to get current active tab
		const currentPath = window.location.pathname;
		const active = sidebarList.find((item) => item.path === currentPath);

		// If one item has path = currentPath return this item
		if (active) return active.id;

		// Else navigate to first tab
		// window.location.pathname = sidebarList[0].path;
		return sidebarList[0].id;
	});

	// Sound effects
	const [bubbleSound] = useSound(bubbleSoundSrc);

	// Play sound when change tab
	const changeTab = (tabID) => {
		bubbleSound();
		setActiveTab(tabID);
	};

	return (
		<aside className="block fixed inset-0 top-[unset] lg:max-w-sm lg:mx-auto z-50 border-t shadow bg-white">
			<ul className="grid grid-cols-4 tap-highlight-none">
				{sidebarList.map((item) => (
					<li key={item.id} onClick={() => changeTab(item.id)}>
						<Link to={item.path}>
							<div
								className="relative h-[60px] text-black flex items-center justify-center rounded-t-md transition-all"
								style={
									item.id === activeTab
										? {
												color: item.color,
												backgroundColor: "#ECEFF1",
												transform: "translateY(-4px)",
												borderBottom: "1px solid gray",
										  }
										: {}
								}
							>
								<div className="relative text-2xl -top-1">
									{item.icon}
								</div>
								{item.id === activeTab && (
									<p className="absolute font-normal bottom-1 text-12 animate-sidebar-text">
										{item.title}
									</p>
								)}
							</div>
						</Link>
					</li>
				))}
			</ul>
		</aside>
	);
}
