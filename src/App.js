import "./App.scss";

import { Route, Routes } from "react-router-dom";
import { Main } from "./components/Main/Main";

export const App = () => {
	return (
		<Routes>
			<Route index element={<Main />} />
		</Routes>
	);
};
