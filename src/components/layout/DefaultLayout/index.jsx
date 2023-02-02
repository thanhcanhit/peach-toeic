import React from "react";
import Sidebar from "./Sidebar";

export default function DefaultLayout({ children }) {
	return (
		<React.Fragment>
			<main className="content pb-20 ">{children}</main>
			<Sidebar />
		</React.Fragment>
	);
}
