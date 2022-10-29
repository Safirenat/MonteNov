import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.scss";

import { ReactComponent as IconHelpTelegram } from "../../assets/Images/icon-help-telegram.svg";
import { ReactComponent as IconHelpWhatsapp } from "../../assets/Images/icon-help-whatsapp.svg";
// import { ReactComponent as IconHelpMobile } from "../../assets/Images/icon-help-mobile.svg";

export const Footer = () => {
	return (
		<div className="footer-background">
			<div className="container">
				<div className="footer">
					{/* <div className="footer__item-wrapper">
						<NavLink className="footer__item" to="/info">
							О нас
						</NavLink>
						<NavLink className="footer__item" to="/">
							Каталог
						</NavLink>
						<NavLink className="footer__item" to="/">
							Контакты
						</NavLink>
						<NavLink className="footer__item" to="/">
							Магазины-партнеры
						</NavLink>
					</div> */}
					<div>
								<div className="header-top-info-location">
									<a href="https://t.me/MontenegroLive2">
										{/* <Location /> */}
									</a>
									<p>Herceg-Novi,Podi, bb</p>
								</div>
								<div className="header-top-info-location">
									<a href="https://t.me/MontenegroLive2">
										{/* <Clock /> */}
									</a>
									<p>Пн - Пт с 10 до 19</p>
								</div>
							</div>
					<div>
						<div className="footer__social">
						<p>+38268380128</p>

						<p>info@montenegrolive.ru</p>


							{/* <div>
							<a href="tel:+7 (9950) 07 19 10">
								<IconHelpMobile />
							</a>
						</div> */}
							{/* <div className="mobaile__social_watsapp">
								<a href="https://wa.me/79950071910?text=Здравствуйте%2C+у+меня+есть+вопрос">
									<IconHelpWhatsapp />
								</a>
							</div>
							<div className="mobaile__social_telegram">
								<a href="https://t.me/SafinRenat">
									<IconHelpTelegram />
								</a>
							</div> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
