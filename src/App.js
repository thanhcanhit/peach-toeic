/* eslint-disable react-hooks/exhaustive-deps */
import { Routes, Route, HashRouter } from "react-router-dom";
import { Fragment, useContext, useEffect } from "react";

// Routes and context
import routes from "./routes";
import { TopicContext } from "./context/TopicContext";
// Components
import DefaultLayout from "./components/layout/DefaultLayout";
import Learn from "./pages/Learn";
import Loading from "./components/Loading";
import UserForm from "./components/UserForm/index";
// Utilities functions
import { transformName } from "./assets/utilities/transform_text";
// Custom hooks
import useLocalData from "./hooks/useLocalData";
import { formatDate, substractDay } from "./assets/utilities/transform_date";

function App() {
	// Get topic list context
	const topicList = useContext(TopicContext);
	const [getLocalData, setLocalData] = useLocalData();
	const localData = getLocalData();

	useEffect(() => {
		if (localData) {
			//Day learned
			const today = formatDate(Date.now());
			if (!localData.dayLearned.includes(today))
				localData.dayLearned.push(today);

			//Day Streak
			const gap = substractDay(Date.now(), localData.lastTimeLogin);
			if (gap === 1) localData.dayStreak++;
			else if (gap === 0);
			else localData.dayStreak = 1;

			//Save last time login
			localData.lastTimeLogin = Date.now();

			//Save to local storage
			setLocalData(localData);
		}
	}, []);
	return (
		<HashRouter>
			<Loading time={3000} />
			{localData.name === null && (
				<UserForm
					message="When we first met, what's your name?"
					title="Welcome new user"
				/>
			)}
			<div className="App tap-highlight-none bg-white lg:relative min-h-[100vh] lg:max-w-sm lg:mx-auto lg:border lg:overflow-y-scroll lg:shadow-lg">
				<Routes>
					{/* Main route */}
					{routes.map((route, index) => {
						let Layout = DefaultLayout;
						if (route.layout) {
							Layout = route.layout;
						} else if (route.layout === null) {
							Layout = Fragment;
						}

						const Page = route.component;

						return (
							<Route
								key={index}
								path={route.path}
								element={
									<Layout>
										<Page />
									</Layout>
								}
							></Route>
						);
					})}

					{/* Learn route */}
					{topicList.map((topic) => (
						<Route
							key={topic.id}
							path={transformName(topic.name)}
							element={<Learn topic={topic} />}
						></Route>
					))}
						
				</Routes>
			</div>
		</HashRouter>
	);
}

export default App;
