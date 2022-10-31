import React from "react";
import "./Analiz.scss";


import { ReactComponent as Arrow } from "../../assets/Images/arrow4.svg";


export const Analiz = () => {
	return (
		<div className="benefits-background">
			<div className="container">
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
							<a target="_blank" href="https://t.me/MontenegroLive_Bot">
								Связаться с нами
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
