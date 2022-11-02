import React from "react";
import { useState } from "react";
import "./Analiz.scss";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Form, Button, Container } from "react-bootstrap";

// import emailjs from '@emailjs/browser';
import { notification } from "antd-notifications-messages";
import "antd-notifications-messages/lib/styles/style.css";
import { send } from "emailjs-com";
import InputMask from "react-input-mask";

import { ReactComponent as Arrow } from "../../assets/Images/arrow4.svg";
// import { Form } from "react-router-dom";

export const Analiz = () => {
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

	// const cancelCourse = () => {
	// 	document.getElementById("create-course-form").reset();
	//   }

	const show = (type) => {
		notification({
			// className:"notification-title",
			title: "Успешно",
			message: `Успешно отправлено`,
		});
	};

	const handleChange = (e) => {
		setToSend({ ...toSend, [e.target.name]: e.target.value });
	};

	// const enterHandler = (event) => {
	// 	if (event.keyCode === 13) {
	// 		onSubmit(event);
	// 	}
	// };

	// const reloadPage = () => {
	// 	window.location.reload()
	//   }

	return (
		<div className="benefits-background">
			<div className="container">
				<div className="analiz analiz-desktop">
					<p>
						Получите бесплатный
						<br /> анализ документов
						<br /> для оформления ВНЖ Черногории
						<br /> от опытных
						<br /> юристов Montenegro Live
					</p>
					<div className="analiz-desktop-arrow-wrapper">
						<Arrow />
						<div className="input-wrapper-form">
				
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

						<button onClick={() => show("success")} type="submit">
							Связаться с нами!
						</button>
					</form>
				</div>
					</div>
				</div>
				

				<div className="input-wrapper-form-mobile">
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
									href="https://t.me/+38268338309"
								>
									Связаться с нами
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
