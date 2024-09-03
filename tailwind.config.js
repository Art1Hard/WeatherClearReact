import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			spac: {},
		},
	},
	plugins: [
		plugin(function ({ addUtilities, theme, e }) {
			// Получаем цвета из темы Tailwind
			const colors = theme("colors");

			// Создаем утилиты для разных цветов
			const strokeUtilities = Object.entries(colors).reduce(
				(acc, [colorName, colorValue]) => {
					// Если значение цвета - объект, мы обрабатываем его как палитру
					if (typeof colorValue === "object") {
						Object.entries(colorValue).forEach(([shadeName, shadeValue]) => {
							acc[`.${e(`text-stroke-${colorName}-${shadeName}`)}`] = {
								"-webkit-text-stroke": `1.5px ${shadeValue}`,
							};
						});
					} else {
						acc[`.${e(`text-stroke-${colorName}`)}`] = {
							"-webkit-text-stroke": `1.5px ${colorValue}`,
						};
					}
					return acc;
				},
				{}
			);

			addUtilities(strokeUtilities, ["responsive", "hover"]);
			addUtilities({
				".font-palan": {
					"font-family": '"Palanquin Dark", sans-serif',
				},
			});
		}),
	],
};
