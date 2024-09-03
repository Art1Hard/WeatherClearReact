import React from "react";

const Logo: React.FC = () => {
	return (
		<div className="relative">
			<h2 className="text-4xl font-extrabold absolute text-transparent">
				<span className="text-stroke-blue-400">Weather</span>Clear
			</h2>
			<h2 className="text-4xl font-extrabold absolute text-amber-500">
				<span className="animate-wave text-blue-800">Weather</span>Clear
			</h2>
			<h2 className="text-4xl font-extrabold text-transparent">
				<span>Weather</span>Clear
			</h2>
		</div>
	);
};

export default Logo;
