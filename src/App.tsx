import React from "react";
import "./App.scss";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

const App: React.FC = () => {
	return (
		<>
			<Header />
			<div className="container p-5 pt-0 mx-auto">
				<Outlet />
			</div>
		</>
	);
};

export default App;
