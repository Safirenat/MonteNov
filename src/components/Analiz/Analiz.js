import React from "react";
// import { NavLink } from "react-router-dom";
import "./Analiz.scss";

// import { ReactComponent as IconHelpTelegram } from "../../assets/Images/icon-help-telegram.svg";
// import { ReactComponent as IconHelpWhatsapp } from "../../assets/Images/icon-help-whatsapp.svg";
// import { ReactComponent as IconHelpMobile } from "../../assets/Images/icon-help-mobile.svg";
import { ReactComponent as Arrow } from "../../assets/Images/arrow4.svg";

// import BgTest from "../../assets/Images/img-block-two.jpeg";

export const Analiz = () => {
	return (
		<div className="benefits-background">
			<div className="container">
				<div className="analiz">
					<p>
						Получите бесплатный
						<br /> анализ документов
						<br /> для оформления ВНЖ Черногории
						<br /> от опытных
						<br /> юристов Montenegro Live
					</p>
					<div className="analiz-arrow-wrapper">
						<Arrow />
						<div className="analiz-arrow-button">
							<a target="_blank" href="https://t.me/MontenegroLive_Bot">
								Связаться с нами
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
