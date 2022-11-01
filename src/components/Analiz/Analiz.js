import React from "react";
import {useState} from "react";
import "./Analiz.scss";
// import emailjs from '@emailjs/browser';
import { notification } from 'antd-notifications-messages';
import 'antd-notifications-messages/lib/styles/style.css';
import { send } from 'emailjs-com';


import { ReactComponent as Arrow } from "../../assets/Images/arrow4.svg";


export const Analiz = () => {

	const [toSend, setToSend] = useState({
		from_name: '',
		to_name: '',
		message: '',
		reply_to: '',
	  });
	
	  const onSubmit = (e) => {
		e.preventDefault();
		send(
		  'service_uf2cf4l',
		  'template_hs0jgnl',
		  toSend,
		  'User ID'
		)
		  .then((response) => {
			console.log('SUCCESS!', response.status, response.text);
		  })
		  .catch((err) => {
			console.log('FAILED...', err);
		  });
	  };

	  const show = (type) => {
		notification({
		  title: 'Успешно',
		  message: `Успешно отправлено`
		});
	  };
	
	  const handleChange = (e) => {
		setToSend({ ...toSend, [e.target.name]: e.target.value });
	  };

	  
	
	return (
		<div className="benefits-background">
			<div className="container">
				<div>
				<form onSubmit={onSubmit}>
  <input
    type='text'
    name='from_name'
    placeholder='from name'
    value={toSend.from_name}
    onChange={handleChange}
  />
  <input
    type='text'
    name='to_name'
    placeholder='to name'
    value={toSend.to_name}
    onChange={handleChange}
  />
  <input
    type='text'
    name='message'
    placeholder='Your message'
    value={toSend.message}
    onChange={handleChange}
  />
  <input
    type='text'
    name='reply_to'
    placeholder='Your email'
    value={toSend.reply_to}
    onChange={handleChange}
  />
  <button onClick={() => show('success')} type='submit'>Submit</button>
</form>

				</div>
				{/* <div className="analiz">
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
							<a target="_blank" href="https://t.me/MontenegroLive_Bot">
								Связаться с нами
							</a>
						</div>
					</div> */}
				{/* </div> */}
			</div>
		</div>
	);
};
