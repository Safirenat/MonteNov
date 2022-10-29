import React from "react";
// import { NavLink } from "react-router-dom";
import "./Benefits.scss";

// import { ReactComponent as IconHelpTelegram } from "../../assets/Images/icon-help-telegram.svg";
// import { ReactComponent as IconHelpWhatsapp } from "../../assets/Images/icon-help-whatsapp.svg";
// import { ReactComponent as IconHelpMobile } from "../../assets/Images/icon-help-mobile.svg";

import BgTest from "../../assets/Images/img-block-two.jpeg";

export const Benefits = () => {
	return (
		<div className="benefits">
			<div className="container">
				<h1 className="benefits-title">Преимущества</h1>

				<div className="benefits-text-wrapper">
					<div className="benefits-text">
						<img src={BgTest} alt="BgTest" />
                        <p>Упрощенное получение шенген визы и США <br/> Упрощенное получение шенген визы и США</p>

					</div>
					<div className="benefits-text">
						<img src={BgTest} alt="BgTest" />
						<p>Упрощенное получение шенген визы и США <br/> Упрощенное получение шенген визы и США</p>
						
					</div>
					<div className="benefits-text">
						<img src={BgTest} alt="BgTest" />
                        <p>Упрощенное получение шенген визы и США <br/> Упрощенное получение шенген визы и США</p>

					</div>
					<div className="benefits-text">
						<img src={BgTest} alt="BgTest" />
                        <p>Упрощенное получение шенген визы и США <br/> Упрощенное получение шенген визы и США</p>

					</div>
					<div className="benefits-text">
						<img src={BgTest} alt="BgTest" />
                        <p>Упрощенное получение шенген визы и США <br/> Упрощенное получение шенген визы и США</p>

					</div>
					<div className="benefits-text">
						<img src={BgTest} alt="BgTest" />
                        <p>Упрощенное получение шенген визы и США <br/> Упрощенное получение шенген визы и США</p>

					</div>
				</div>
			</div>
		</div>
	);
};
