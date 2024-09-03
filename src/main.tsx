import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import Home from "./pages/Home.tsx";
import City from "./pages/City.tsx";
import "./index.css";

const router = createBrowserRouter(
	[
		{
			path: "/",
			element: <App />,
			children: [
				{
					path: "/",
					element: <Home />,
				},
				{
					path: "city",
					element: <City />,
				},
			],
		},
	],
	{
		basename: "/WeatherClearReact",
	}
);

createRoot(document.getElementById("root") as HTMLElement).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
