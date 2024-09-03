import React from "react";

const Home: React.FC = () => {
	return (
		<div className="pt-48">
			<h1 className="text-center text-4xl text-black dark:text-neutral-300 mb-7">
				Самая{" "}
				<span className="text-amber-500 font-bold dark:text-yellow-500">
					точная
				</span>{" "}
				<span className="text-blue-800 font-bold dark:text-blue-500">
					погода
				</span>{" "}
				во вселенной!
			</h1>
			<h3 className="text-center text-2xl mb-5 dark:text-neutral-300">
				Введите свой город
			</h3>
			<input
				className="mx-auto block px-5 py-1 w-72 text-base rounded-sm text-center dark:text-neutral-300 dark:bg-slate-900 outline-none"
				type="search"
			/>
		</div>
	);
};

export default Home;
