import React from "react";
// import { NavLink } from "react-router-dom";
import "./Pros.scss";

// import { ReactComponent as IconHelpTelegram } from "../../assets/Images/icon-help-telegram.svg";
// import { ReactComponent as IconHelpWhatsapp } from "../../assets/Images/icon-help-whatsapp.svg";
// import { ReactComponent as IconHelpMobile } from "../../assets/Images/icon-help-mobile.svg";

import BgTest from "../../assets/Images/img-block-two.jpeg";

export const Pros = () => {
	return (
		<div className="pros-background">
			<div className="container">
				<h1 className="pros-title">Плюсы Черногории для иммигрантов</h1>
				<div className="pros">
					<div className="pro-left">
						<div className="pro-left-text">
							<img src={BgTest} alt="BgMain" />
							<p>Преспектива вступл в ЕС</p>
						</div>
						<div className="pro-left-text">
							<img src={BgTest} alt="BgMain" />
							<p>Упрощенное получение шенген визы и США</p>
						</div>
						<div className="pro-left-text">
							<img src={BgTest} alt="BgMain" />
							<p>Низкий налог на дох ф.л. 9%</p>
						</div>
					</div>
					<div className="pros-midle">
						<img src={BgTest} alt="BgMain" />
					</div>
					<div className="pros-right">
						<div className="pro-left-text">
							<p>Резидентство для членов всей семьи</p>
							<img src={BgTest} alt="BgMain" />
						</div>
						<div className="pro-left-text">
							<p>Резидентство для членов всей семьи</p>
							<img src={BgTest} alt="BgMain" />
						</div>
						<div className="pro-left-text">
							<p>Резидентство для членов всей семьи</p>
							<img src={BgTest} alt="BgMain" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
