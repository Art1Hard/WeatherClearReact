declare module "../data/WeatherImg.json" {
	export interface IWeatherImg {
		alt: string;
		img: string;
	}

	const value: IWeatherImg[];
	export default value;
}
