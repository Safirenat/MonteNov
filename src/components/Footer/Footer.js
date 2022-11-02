import React from "react";
// import { NavLink } from "react-router-dom";
import "./Footer.scss";
import { useState } from "react";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { notification } from "antd-notifications-messages";
import "antd-notifications-messages/lib/styles/style.css";
import { send } from "emailjs-com";

import { ReactComponent as IconHelpTelegram } from "../../assets/Images/icon-telegram.svg";
import { ReactComponent as IconHelpWhatsapp } from "../../assets/Images/icon-whatsapp.svg";
import { ReactComponent as IconPhone } from "../../assets/Images/phone-icon.svg";
import { ReactComponent as Logoza } from "../../assets/Images/logoza8.svg";
import { ReactComponent as Location } from "../../assets/Images/location-icon.svg";
import { ReactComponent as Clock } from "../../assets/Images/clock-icon.svg";
import { ReactComponent as Email } from "../../assets/Images/mail-icon.svg";
import { ReactComponent as Arrow } from "../../assets/Images/arrow4.svg";

export const Footer = () => {
	const [toSend, setToSend] = useState({
		from_name: "",
		to_name: "",
		message: "",
		reply_to: "",
	});

	const onSubmit = (e) => {
		e.preventDefault();
		send("service_exbz4dg", "template_qe62u6w", toSend, "EGF04yEuv7MdmYIlB")
			.then((response) => {
				console.log("SUCCESS!", response.status, response.text);
				window.location.reload();
			})

			.catch((err) => {
				console.log("FAILED...", err);
			});
	};

	const show = (type) => {
		notification({
			title: "Успешно",
			message: `Успешно отправлено`,
		});
	};

	const handleChange = (e) => {
		setToSend({ ...toSend, [e.target.name]: e.target.value });
	};

	return (
		<div className="footer-background" id="contacts">
			<div className="footer">
				<div>
					<div className="analiz footer-mobile-form">
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
					<div className="analiz footer-desktop-form">
						<p>
							Получите бесплатный
							<br /> анализ документов
							<br /> для оформления ВНЖ Черногории
							<br /> от опытных
							<br /> юристов Montenegro Live
						</p>
						<div className="analiz-arrow-wrapper">
							<Arrow />
							<div className="input-wrapper-form input-wrapper-form-desktop">
							<form onSubmit={onSubmit} className="form-wrapper">
								<div className="input-text-wrapper">
									<div>
										<input
											type="text"
											name="message"
											placeholder="Your Name"
											value={toSend.message}
											onChange={handleChange}
											className="input-mail"
										/>
									</div>

									<div>
										<PhoneInput
											enableAreaCodeStretch
											containerClass="container__input"
											inputClass="input__field"
											placeholder="+1 (102) 123-4567"
											inputProps={{
												name: "phone",
												required: true,
												// autoFocus: true,
												autoFormat: true,
											}}
											// onKeyDown={(e) => enterHandler(e)}
										/>
									</div>
								</div>

								<button
									onClick={() => show("success")}
									type="submit"
								>
									Связаться с нами!
								</button>
							</form>
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
										Herceg-Novi, Podi, bb
									</a>
								</div>
								<div className="footer-top-info-location">
									<a href="#">
										<Clock />
									</a>
									<p>Пн - Сб с 8 до 17</p>
								</div>
							</div>
							<div className="footer-top-info-tel-wrapper">
								<a target="_blank" href="tel:+38268338309">
									+38268338309
								</a>

								<div className="footer-top-info-icons">
									<a target="_blank" href="tel:+38268338309">
										<IconPhone />
									</a>

									<a
										target="_blank"
										href="https://wa.me/+38268338309"
									>
										<IconHelpWhatsapp />
									</a>

									<a
										target="_blank"
										href="https://t.me/+38268338309"
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
								Copyright © «Montenegro Live» 2022. All rights
								reserved.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
