import React from "react";
// import { NavLink } from "react-router-dom";
import "./Footer.scss";

import { ReactComponent as IconHelpTelegram } from "../../assets/Images/icon-telegram.svg";
import { ReactComponent as IconHelpWhatsapp } from "../../assets/Images/icon-whatsapp.svg";
import { ReactComponent as IconPhone } from "../../assets/Images/phone-icon.svg";
import { ReactComponent as Logoza } from "../../assets/Images/logoza8.svg";
import { ReactComponent as Location } from "../../assets/Images/location-icon.svg";
import { ReactComponent as Clock } from "../../assets/Images/clock-icon.svg";
import { ReactComponent as Email } from "../../assets/Images/mail-icon.svg";
import { ReactComponent as Arrow } from "../../assets/Images/arrow4.svg";

export const Footer = () => {
	return (
		<div className="footer-background" id="contacts">
			<div className="footer">
				<div>
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
								<a
									target="_blank"
									href="https://t.me/MontenegroLive_Bot"
								>
									Связаться с нами
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="footer-top-info-line">
					<div className="container">
						<div className="footer-top-info">
							<div className="footer-logo">
								<a href="/">
									<Logoza />
								</a>
							</div>
							<div className="footer-top-info-location-wrapper">
								<div className="footer-top-info-location">
									<a
										target="_blank"
										href="https://goo.gl/maps/4utxgoeVmjfo4DD78"
									>
										<Location />
									</a>
									<a
										target="_blank"
										href="https://goo.gl/maps/4utxgoeVmjfo4DD78"
									>
										Herceg-Novi,Podi, bb
									</a>
								</div>
								<div className="footer-top-info-location">
									<a href="#">
										<Clock />
									</a>
									<p>Пн - Пт с 10 до 19</p>
								</div>
							</div>
							<div className="footer-top-info-tel-wrapper">
								<a target="_blank" href="tel:+38268380128">
									+38268380128
								</a>

								<div className="footer-top-info-icons">
									<a target="_blank" href="tel:+38268380128">
										<IconPhone />
									</a>

									<a
										target="_blank"
										href="https://wa.me/738268380128"
									>
										<IconHelpWhatsapp />
									</a>

									<a
										target="_blank"
										href="https://t.me/738268380128"
									>
										<IconHelpTelegram />
									</a>
								</div>
							</div>
							<div className="footer-top-info-mail">
								<a href="mailto:info@montenegrolive.ru">
									<Email />
								</a>
								<a href="mailto:info@montenegrolive.ru">
									info@montenegrolive.ru
								</a>
							</div>
						</div>
						<div>
							<p className="footer-copyright">
								Copyright © «Montenegro Live» 2022. All rights reserved.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
