import React from "react";
// import { NavLink } from "react-router-dom";
import "./Etaps.scss";

// import { ReactComponent as IconHelpTelegram } from "../../assets/Images/icon-help-telegram.svg";
// import { ReactComponent as IconHelpWhatsapp } from "../../assets/Images/icon-help-whatsapp.svg";
// import { ReactComponent as IconHelpMobile } from "../../assets/Images/icon-help-mobile.svg";
// import { ReactComponent as Plusi } from "../../assets/Images/plusi.svg";
// import { ReactComponent as EuropeanUnion } from "../../assets/Images/european-union.svg";
// import { ReactComponent as Family } from "../../assets/Images/family.svg";
// import { ReactComponent as UnitedStatesOfAmerica } from "../../assets/Images/united-states-of-america.svg";
// import { ReactComponent as Tax } from "../../assets/Images/tax.svg";
// import { ReactComponent as DutyFree } from "../../assets/Images/duty-free.svg";
// import { ReactComponent as LowPrice } from "../../assets/Images/low-price.svg";

// import BgTest from "../../assets/Images/img-block-two.jpeg";
// import Plus from "../../assets/Images/plus.jpg";

export const Etaps = () => {
	return (
		<div className="pros-background">
			<div className="container">
			<div className="etaps-wrapper">
				<h1 className="etaps-title">Этапы оформления ВНЖ Черногории</h1>
				<div className="etaps">
					<div className="etaps-items">
						<div className="etaps-img">1</div>
						<p>Обращение к юристам компании Montenegro Live</p>
					</div>
					<div className="etaps-items">
						<div className="etaps-img">2</div>
						<p>
							Бесплатный анализ Ваших документов нашими
							специалистами
						</p>
					</div>
					<div className="etaps-items">
						<div className="etaps-img">3</div>
						<p>
							Оформление документов, открытие юридического лица и
							подача досье в миграционную службу
						</p>
					</div>
					<div className="etaps-items">
						<div className="etaps-img">4</div>
						<p>Получение ВНЖ</p>
					</div>
				</div>
			</div>
            </div>
		</div>
	);
};
