import React from "react";
// import { NavLink } from "react-router-dom";
import "./Documents.scss";

// import { ReactComponent as IconHelpTelegram } from "../../assets/Images/icon-help-telegram.svg";
// import { ReactComponent as IconHelpWhatsapp } from "../../assets/Images/icon-help-whatsapp.svg";
// import { ReactComponent as IconHelpMobile } from "../../assets/Images/icon-help-mobile.svg";
// import { ReactComponent as Arrow } from "../../assets/Images/arrow4.svg";
import { ReactComponent as Document } from "../../assets/Images/document.svg";

import BgTest from "../../assets/Images/img-block-two.jpeg";

export const Documents = () => {
	return (
		<div className="documents" id="documents">
			<div className="container">
				<div>
					<h1 className="documents-title">
						Документы, которые потребуются
					</h1>
					<div className="documents-text-wrapper">
						<div className="documents-text">
							{/* <img src={BgTest} alt="BgMain" /> */}
							<Document />
							<p>Загранпаспорт </p>
						</div>
						<div className="documents-text">
							{/* <img src={BgTest} alt="BgMain" /> */}
							<Document />
							<p>
								Справка об отсутствии судимости, с живой
								подписью и печатью, не старше 6 месяцев
							</p>
						</div>
						<div className="documents-text">
							{/* <img src={BgTest} alt="BgMain" /> */}
							<Document />
							<p>
								Документ о среднем или высшем образовании
								(диплом, аттестат), с последующей нострификацией{" "}
							</p>
						</div>
						<div className="documents-text">
							{/* <img src={BgTest} alt="BgMain" /> */}
							<Document />
							<p>
								Подтверждение о месте проживания в Черногории
								(договор аренды или свидетельство о
								собственности на недвижимость){" "}
							</p>
						</div>
						<div className="documents-text">
							{/* <img src={BgTest} alt="BgMain" /> */}
							<Document />
							<p>Миграционная регистрация</p>
						</div>
						<div className="documents-text">
							{/* <img src={BgTest} alt="BgMain" /> */}
							<Document />
							<p>Медицинская страховка </p>
						</div>
						<div className="documents-text">
							{/* <img src={BgTest} alt="BgMain" /> */}
							<Document />
							Справка о прохождении медкомиссии
						</div>
						<div className="documents-text">
							{/* <img src={BgTest} alt="BgMain" /> */}
							<Document />
							<p>Выписка со счета (делают наши специалисты) </p>
						</div>
						<div className="documents-text">
							{/* <img src={BgTest} alt="BgMain" /> */}
							<Document />
							<p>
								Виза D - для граждан государств, у которых с
								Черногорией визовый режим{" "}
							</p>
						</div>
						<div className="documents-text">
							{/* <img src={BgTest} alt="BgMain" /> */}
							<Document />
							<p>
								Переводы всех документов на черногорский язык,
								выполняются на месте{" "}
							</p>
						</div>
						<div className="documents-text">
							{/* <img src={BgTest} alt="BgMain" /> */}
							<Document />
							<p>Свидетельства о рождении детей (при наличии) </p>
						</div>
						<div className="documents-text">
							{/* <img src={BgTest} alt="BgMain" /> */}
							<Document />
							<p>Свидетельство о браке</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
