import React, { useState, useEffect } from "react";
import WeatherCard from "../components/WeatherCard";
import { fetchWeatherApi } from "openmeteo";

type CurrentWeather = {
	time: Date;
	temperature: number;
	relativeHumidity: number;
	apparentTemperature: number;
	weatherCode: number;
	windSpeed: number;
	windDirection: number;
};

export interface IWeatherData {
	current: CurrentWeather;
}

const City: React.FC = () => {
	const [weather, setWeather] = useState<IWeatherData>();
	const [errorMessage, setErrorMessage] = useState<unknown>();

	useEffect(() => {
		const fetchWeather = async () => {
			const params = {
				latitude: 59.9481,
				longitude: 30.5591,
				current: [
					"temperature_2m",
					"relative_humidity_2m",
					"apparent_temperature",
					"weather_code",
					"wind_speed_10m",
					"wind_direction_10m",
				],
			};

			const url = "https://api.open-meteo.com/v1/forecast";

			try {
				const responses = await fetchWeatherApi(url, params);

				const response = responses[0];

				// Attributes for timezone and location
				const utcOffsetSeconds = response.utcOffsetSeconds();
				const timezone = response.timezone();
				const timezoneAbbreviation = response.timezoneAbbreviation();
				const latitude = response.latitude();
				const longitude = response.longitude();

				const current = response.current()!;

				for (let i = 0; i < current.variablesLength(); i++)
					console.log(current.variables(i)!.value());

				// Note: The order of weather variables in the URL query and the indices below need to match!
				setWeather({
					current: {
						time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
						temperature: Math.round(current.variables(0)!.value()),
						relativeHumidity: current.variables(1)!.value(),
						apparentTemperature: Math.round(current.variables(2)!.value()),
						weatherCode: current.variables(3)!.value(),
						windSpeed: Math.round(current.variables(4)!.value()),
						windDirection: current.variables(5)!.value(),
					},
				});
			} catch (error) {
				setErrorMessage(error);
			}
		};

		fetchWeather();
	}, []);

	if (!weather) return <div>Загрузка подождите...</div>;

	return (
		<div className="flex justify-center gap-10">
			<WeatherCard weather={weather} />
		</div>
	);
};

export default City;
