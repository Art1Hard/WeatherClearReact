import React from "react";
import "./App.scss";
import Header from "./components/Header";

const App: React.FC = () => {
	return (
		<>
			<Header />
			<div className="container p-5 pt-0 mx-auto">
				<h1 className="text-center text-4xl text-black mb-7">
					Самая <span className="font-bold">точная</span> погода во вселенной!
				</h1>
				<h3 className="text-center text-3xl mb-5">Введите свой город</h3>
				<input
					className="mx-auto block px-5 py-2 w-72 text-lg rounded-lg text-center"
					type="search"
				/>
			</div>
		</>
	);
};

export default App;
