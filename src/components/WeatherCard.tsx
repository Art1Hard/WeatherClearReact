import React from "react";
import weatherImg from "../data/WeatherImg.json";
import { IWeatherData } from "../pages/City";

interface IWeatherCardProps {
	weather: IWeatherData;
}

const WeatherCard: React.FC<IWeatherCardProps> = ({ weather }) => {
	return (
		<div className="bg-white dark:bg-slate-800 rounded-lg p-5 text-center flex flex-col text-black dark:text-neutral-300">
			<h3 className="text-2xl mb-1">Сейчас в Янино-1</h3>
			<p className="text-1xl">{weather.current.temperature}°</p>
			<p>Ощущается как: {weather.current.apparentTemperature}°</p>
			<img src={weatherImg[0].img} alt={weatherImg[0].alt} />
			<p>Влажность: {weather.current.relativeHumidity} %</p>
			<p>Скорость ветра: {weather.current.windSpeed} км/ч</p>
			<p>Направление ветра: {weather.current.windDirection}°</p>
			<p>{weather.current.weatherCode}</p>
		</div>
	);
};

export default WeatherCard;
