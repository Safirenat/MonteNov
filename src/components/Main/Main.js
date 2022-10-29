// import logo from "./logo.svg";
import "./Main.scss";

import { BackToTopButton } from "../BackToTopButton";
import { Header } from "../Header/Header";
import { InfoBlock } from "../InfoBlock/InfoBlock";
import { Pros } from "../Pros/Pros";
import { Benefits } from "../Benefits/Benefits";
import { Analiz } from "../Analiz/Analiz";
import { Documents } from "../Documents/Documents";
import { Footer } from "../Footer/Footer";

export const Main = () => {
	return (
		<div className="App">
			{/* <img src={logo} className="App-logo" alt="logo" /> */}
			<Header />
            <InfoBlock/>
			<Pros />
			<Benefits />
			<Analiz />
			<Documents />
			<Footer />
			<BackToTopButton />
		</div>
	);
};