import React from "react";
// import { NavLink } from "react-router-dom";
import "./Documents.scss";

// import { ReactComponent as IconHelpTelegram } from "../../assets/Images/icon-help-telegram.svg";
// import { ReactComponent as IconHelpWhatsapp } from "../../assets/Images/icon-help-whatsapp.svg";
// import { ReactComponent as IconHelpMobile } from "../../assets/Images/icon-help-mobile.svg";
// import { ReactComponent as Arrow } from "../../assets/Images/arrow4.svg";

import BgTest from "../../assets/Images/img-block-two.jpeg";

export const Documents = () => {
	return (
		<div className="documents">
			<div className="container">
				<div>
					<h1 className="documents-title">
						Документы, которые потребуются
					</h1>
					<div className="documents-text-wrapper">
						<div className="documents-text">
							<img src={BgTest} alt="BgMain" />
							<p>Паспорт </p>
						</div>
						<div className="documents-text">
							<img src={BgTest} alt="BgMain" />
							<p>Вод.Уд. </p>
						</div>
						<div className="documents-text">
							<img src={BgTest} alt="BgMain" />
							<p>Полис </p>
						</div>
						<div className="documents-text">
							<img src={BgTest} alt="BgMain" />
							<p>Паспорт </p>
						</div>
						<div className="documents-text">
							<img src={BgTest} alt="BgMain" />
							<p>Паспорт </p>
						</div>
						<div className="documents-text">
							<img src={BgTest} alt="BgMain" />
							<p>Паспорт </p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
