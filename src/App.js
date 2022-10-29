// import logo from "./logo.svg";
import "./App.scss";

import { Route, Routes } from "react-router-dom";
import { Main } from "./components/Main/Main";
// import { BackToTopButton } from "./components/BackToTopButton";


export const App = () => {
	return (
		<Routes>
			<Route index element={<Main />} />
			{/* <Route element={<Wooden />} path="/wooden/" />
			<Route element={<Glass />} path="/glass/" />
			<Route element={<Combined />} path="/combined/" />
			<Route element={<Window />} path="/window/" />
			<Route element={<Furniture />} path="/furniture/" />
			<Route element={<Accessories />} path="/accessories/" />
			<Route element={<Info />} path="/info/" /> */}
		
		</Routes>
	);
}

;
