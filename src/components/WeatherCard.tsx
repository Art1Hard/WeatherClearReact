import React from "react";
import weatherImg from "../data/WeatherImg.json";

const WeatherCard: React.FC = () => {
	return (
		<div className="bg-white rounded-lg p-5 text-center flex flex-col">
			<h3 className="text-2xl mb-1">Сейчас</h3>
			<p className="text-1xl">20°С</p>
			<img src={weatherImg[0].img} alt={weatherImg[0].alt} />
			<p>Ясно</p>
		</div>
	);
};

export default WeatherCard;
