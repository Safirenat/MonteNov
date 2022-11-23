import React from "react";
// import { NavLink } from "react-router-dom";
import "./Header.scss";
import { useState } from "react";

import { notification } from "antd-notifications-messages";

import "react-phone-input-2/lib/style.css";
import "antd-notifications-messages/lib/styles/style.css";
import { send } from "emailjs-com";

import { ReactComponent as IconHelpTelegram } from "../../assets/Images/icon-help-telegram.svg";
// import { ReactComponent as IconHelpTelegram } from "../../assets/Images/icon-telegram.svg";
import { ReactComponent as IconHelpWhatsapp } from "../../assets/Images/icon-help-whatsapp.svg";
// import { ReactComponent as IconHelpWhatsapp } from "../../assets/Images/icon-whatsapp.svg";
import { ReactComponent as IconPhone } from "../../assets/Images/icon-help-mobile.svg";
// import { ReactComponent as IconPhone } from "../../assets/Images/phone-icon.svg";
import { ReactComponent as Logoza } from "../../assets/Images/logoza8.svg";
import { ReactComponent as Location } from "../../assets/Images/location-icon.svg";
import { ReactComponent as Clock } from "../../assets/Images/clock-icon.svg";
import { ReactComponent as Email } from "../../assets/Images/mail-icon.svg";
import { ReactComponent as Arrow } from "../../assets/Images/arrow4.svg";

export const Header = () => {
	const [toSend, setToSend] = useState({
		from_name: "",
		to_name: "",
		message: "",
		reply_to: "",
	});

	const onSubmit = (e) => {
		e.preventDefault();
		send("service_jx8l5nx", "template_qe62u6w", toSend, "zzIwqvIuqRYdKTPrM")
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
		<div className="global-container">
			<div className="header">
				<div className="header-top-info-line">
					<div className="container">
						<div className="header-top-info">
							<div className="header-logo">
								<a href="/">
									<Logoza />
								</a>
							</div>
							<div className="header-top-info-location-wrapper">
								<div className="header-top-info-location">
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
								<div className="header-top-info-location">
									<a href="#">
										<Clock />
									</a>
									<p>Пн - Сб с 8 до 17</p>
								</div>
							</div>
							<div className="header-top-info-tel-wrapper">
								<a target="_blank" href="tel:+38268338309">
									+38268338309
								</a>

								<div className="header-top-info-icons">
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
							<div className="header-top-info-mail">
								<a href="mailto:info@montenegrolive.ru">
									<Email />
								</a>
								<a href="mailto:info@montenegrolive.ru">
									info@montenegrolive.ru
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="header-left">
						<a className="" href="#pros">
							ВНЖ Черногории
						</a>
						<a className="" href="#prichina">
							О нас
						</a>
						<a className="" href="#documents">
							Документы
						</a>
						<a className="" href="#contacts">
							Контакты
						</a>
					</div>
					<div className="header-center-wrapper">
						<h2 className="header-center-title">Montenegro Live</h2>
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
								<a
									target="_blank"
									href="https://t.me/+38268338309"
								>
									Связаться с нами
								</a>
							</div>
						</div>
					</div>
					<div className="header-bot header-bot-desktop">
						<p>
							ВНЖ Черногории за 30 дней
							<br /> с полным юридическим
							<br /> сопровождением.
							<br /> Узнайте, как получить
						</p>
						<div className="header-arrow-wrapper header-arrow-wrapper-desktop">
							<Arrow />
							<div className="input-wrapper-form ">
								<form
									onSubmit={onSubmit}
									className="form-wrapper"
								>
									<div className="input-text-wrapper">
										<div>
											<input
												type="text"
												name="to_name"
												placeholder="Введите имя"
												value={toSend.to_name}
												onChange={handleChange}
												className="input-mail"
											/>
										</div>

										<div>
											<input
												type="number"
												name="reply_to"
												placeholder="Введите номер телефона"
												value={toSend.reply_to}
												onChange={handleChange}
												className="input-mail"
											/>
										</div>

										<div>
											<textarea
												type="number"
												name="message"
												placeholder="Введите вопрос"
												value={toSend.message}
												onChange={handleChange}
												className="textarea-mail"
											/>
										</div>
									</div>

									<button
										onClick={() => show("success")}
										type="submit"
									>
										Задать вопрос
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
