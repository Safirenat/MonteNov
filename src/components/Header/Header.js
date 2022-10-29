import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import { ReactComponent as HeaderLogo } from "../../assets/Images/logo_nov.svg";
// import { ReactComponent as IconHelpTelegram } from "../../assets/Images/icon-help-telegram.svg";
import { ReactComponent as IconHelpTelegram } from "../../assets/Images/icon-telegram.svg";

import { ReactComponent as IconHelpWhatsapp } from "../../assets/Images/icon-whatsapp.svg";
// import { ReactComponent as IconHelpWhatsapp } from "../../assets/Images/icon-help-whatsapp.svg";
import { ReactComponent as IconPhone } from "../../assets/Images/phone-icon.svg";
// import { ReactComponent as IconPhone } from "../../assets/Images/icon-phone2.svg";
import { ReactComponent as Logoza } from "../../assets/Images/logoza8.svg";
import { ReactComponent as Location } from "../../assets/Images/location-icon.svg";
// import { ReactComponent as Location } from "../../assets/Images/location.svg";
import { ReactComponent as Clock } from "../../assets/Images/clock-icon.svg";
// import { ReactComponent as Clock } from "../../assets/Images/clock.svg";
import { ReactComponent as Email } from "../../assets/Images/mail-icon.svg";
// import { ReactComponent as Email } from "../../assets/Images/email.svg";
import { ReactComponent as Arrow } from "../../assets/Images/arrow4.svg";
// import BgTest from "../../assets/Images/trtr.jpg";

export const Header = () => {
	return (
		// <div className="header-fon">
		<div className="global-container">
			<div className="header">
				<div className="header-top-info-line">
					<div className="container">
						<div className="header-top-info">
							<div className="header-logo">
								<Logoza />
								{/* <img src={BgTest} alt="BgMain" /> */}
							</div>
							<div>
								<div className="header-top-info-location">
									<a href="https://t.me/MontenegroLive2">
										<Location />
									</a>
									<p>Herceg-Novi,Podi, bb</p>
								</div>
								<div className="header-top-info-location">
									<a href="https://t.me/MontenegroLive2">
										<Clock />
									</a>
									<p>Пн - Пт с 10 до 19</p>
								</div>
							</div>
							<div className="header-top-info-tel-wrapper">
								<p>+38268380128</p>
								<div className="header-top-info-icons">
									<a href="https://t.me/MontenegroLive2">
										<IconPhone />
									</a>
									<a href="https://t.me/MontenegroLive2">
										<IconHelpWhatsapp />
									</a>
									<a href="https://t.me/MontenegroLive2">
										<IconHelpTelegram />
									</a>
								</div>
							</div>
							<div className="header-top-info-mail">
								<a href="https://t.me/MontenegroLive2">
									<Email />
								</a>
								<p>info@montenegrolive.ru</p>
							</div>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="header-left">
						<NavLink className="" to="/">
							ВНЖ Черногория
						</NavLink>
						<NavLink className="" to="/">
							О нас
						</NavLink>
						<NavLink className="" to="/">
							Документы
						</NavLink>
						<NavLink className="" to="/">
							Контакты
						</NavLink>
					</div>
					<div className="header-center-wrapper">
						<h2 className="header-center-title">Montenegro Live</h2>
						{/* <span className="header-center-p">
							Наши специалисты помогут Вам получить ВНЖ в
							Черногории в кратчайшие сроки с помощью открытия
							юридического лица. Мы готовы сопровождать Вас на
							всех этапах - от регистрации фирмы до полного
							юридического и бухгалтерского сопровождения.
						</span> */}
						{/* <a className="header-scroll" href="#testr">
							<HeaderLogo />
						</a> */}
					</div>
					<div className="header-bot">
						<p>
							ВНЖ Черногории за 30 дней
							<br /> с полным юридическим
							<br /> сопровождением.
							<br /> Узнайте, как получить
						</p>
						<div className="header-arrow-wrapper">
							<Arrow />
							<div className="header-arrow-button">
								<button>Связаться с нами</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		// </div>
	);
};
