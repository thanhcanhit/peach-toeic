import {
	Home,
	Library,
	Practice,
	Progress,
	Game,
	GameTopic,
	Learn,
} from "../pages";

const routes = [
	{
		path: "*",
		component: Home,
	},
	{
		path: "/",
		component: Home,
	},
	{
		path: "/library",
		component: Library,
	},
	{
		path: "/practice",
		component: Practice,
	},
	{
		path: "/progress",
		component: Progress,
	},
	{
		path: "/game",
		component: Game,
		layout: null,
	},
	{ path: "/game-topic", component: GameTopic, layout: null },
	{
		path: "/learn",
		component: Learn,
		layout: null,
	},
];

export default routes;
