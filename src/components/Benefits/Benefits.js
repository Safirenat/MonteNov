import React from "react";
// import { NavLink } from "react-router-dom";
import "./Benefits.scss";

// import { ReactComponent as IconHelpTelegram } from "../../assets/Images/icon-help-telegram.svg";
// import { ReactComponent as IconHelpWhatsapp } from "../../assets/Images/icon-help-whatsapp.svg";
// import { ReactComponent as IconHelpMobile } from "../../assets/Images/icon-help-mobile.svg";
import { ReactComponent as Preimuch } from "../../assets/Images/preimuch.svg";

// import BgTest from "../../assets/Images/img-block-two.jpeg";

export const Benefits = () => {
	return (
		<div className="benefits">
			<div className="container">
				<h1 className="benefits-title">Преимущества ВНЖ через открытие юридического лица</h1>

				<div className="benefits-text-wrapper">
					<div className="benefits-text">
						{/* <img src={BgTest} alt="BgTest" /> */}
						<Preimuch />
						<p>Получение ВНЖ за 30 дней</p>
					</div>
					<div className="benefits-text">
						{/* <img src={BgTest} alt="BgTest" /> */}
						<Preimuch />
						<p>Резидентство для всех членов семьи соискателя</p>
					</div>
					<div className="benefits-text">
						{/* <img src={BgTest} alt="BgTest" /> */}
						<Preimuch />
						<p>
							Право на трудоустройство без оформления рабочей визы
						</p>
					</div>
					<div className="benefits-text">
						{/* <img src={BgTest} alt="BgTest" /> */}
						<Preimuch />
						<p>Возможность получения ПМЖ через 5 лет</p>
					</div>
					<div className="benefits-text">
						{/* <img src={BgTest} alt="BgTest" /> */}
						<Preimuch />
						<p>Отсутствие требований к знанию местного языка</p>
					</div>
					<div className="benefits-text">
						{/* <img src={BgTest} alt="BgTest" /> */}
						<Preimuch />
						<p>
							Самый быстрый, бюджетный и гарантированный способ
							получения ВНЖ
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
