import "./Main.scss";

import "swiper/css/bundle";
import "../Reviews/Reviews.scss";

import { BackToTopButton } from "../BackToTopButton";
import { Header } from "../Header/Header";
import { InfoBlock } from "../InfoBlock/InfoBlock";
import { Pros } from "../Pros/Pros";
import { Benefits } from "../Benefits/Benefits";
import { Analiz } from "../Analiz/Analiz";
import { Documents } from "../Documents/Documents";
import { Footer } from "../Footer/Footer";
import { Etaps } from "../Etaps/Etaps";
import { Prichina } from "../Prichina/Prichina";
import { Reviews } from "../Reviews/Reviews";
import { Burger } from "../Burger/Burger";

export const Main = () => {
	return (
		<div className="App">
			<Burger/>
			<Header />
            <InfoBlock/>
			<Pros />
			<Benefits />
			<Analiz />
			<Documents />
			<Etaps />
			<Prichina />
			<Reviews />
			<Footer />
			<BackToTopButton />
		</div>
	);
};
