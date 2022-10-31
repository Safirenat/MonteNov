import React from "react";
// import { NavLink } from "react-router-dom";
import "./Prichina.scss";

// import { ReactComponent as IconHelpTelegram } from "../../assets/Images/icon-help-telegram.svg";
// import { ReactComponent as IconHelpWhatsapp } from "../../assets/Images/icon-help-whatsapp.svg";
// import { ReactComponent as IconHelpMobile } from "../../assets/Images/icon-help-mobile.svg";
// import { ReactComponent as Plusi } from "../../assets/Images/plusi.svg";
// import { ReactComponent as EuropeanUnion } from "../../assets/Images/european-union.svg";
// import { ReactComponent as Family } from "../../assets/Images/family.svg";
// import { ReactComponent as UnitedStatesOfAmerica } from "../../assets/Images/united-states-of-america.svg";
// import { ReactComponent as Tax } from "../../assets/Images/tax.svg";
// import { ReactComponent as DutyFree } from "../../assets/Images/duty-free.svg";
import { ReactComponent as IconOpit } from "../../assets/Images/icon-opit.svg";

// import BgTest from "../../assets/Images/img-block-two.jpeg";
// import Plus from "../../assets/Images/plus.jpg";

export const Prichina = () => {
	return (
		<div className="prichina" id="prichina">
			<div className="container">
				<h1 className="prichina-title">
					Почему выбирают Montenegro Live
				</h1>
				<div className="prichina-wrapper">
					<div className="prichina-img-wrapper">
						{/* <IconOpit /> */}
						<div className="prichina-text">
							<h3 className="prichina-subtitle">
								Многолетний опыт работы
							</h3>
							<p>
								Специалисты Montenegro Live на протяжении 5 лет
								успешно помогают в решении миграционных вопросах
								тысячам клиентов из России и стран СНГ
							</p>
						</div>
					</div>
					<div className="prichina-img-wrapper">
						{/* <IconOpit /> */}
						<div className="prichina-text">
							<h3 className="prichina-subtitle">
								{" "}
								Высокий уровень компетентности
							</h3>
							<p>
								Наши опытные специалисты оказывают весь спектр
								услуг с учетом законодательства Черногории и в
								соответствии со стандартами бухгалтерского учета
								в Черногории
							</p>
						</div>
					</div>
					<div className="prichina-img-wrapper">
						{/* <IconOpit /> */}
						<div className="prichina-text">
							<h3 className="prichina-subtitle">
								Индивидуальный подход и прозрачность
								взаимодействия
							</h3>
							<p>
								Заключение договора с каждым клиентом и помощь
								на каждом этапе оформления ВНЖ
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
