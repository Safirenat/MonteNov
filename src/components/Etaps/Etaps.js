import React from "react";
import "./Etaps.scss";


export const Etaps = () => {
	return (
		<div className="pros-background">
			<div className="container">
			<div className="etaps-wrapper">
				<h1 className="etaps-title">Этапы оформления ВНЖ Черногории</h1>
				<div className="etaps">
					<div className="etaps-items">
						<div className="etaps-img">1</div>
						<p>Обращение к юристам компании Montenegro Live</p>
					</div>
					<div className="etaps-items">
						<div className="etaps-img">2</div>
						<p>
							Бесплатный анализ Ваших документов нашими
							специалистами
						</p>
					</div>
					<div className="etaps-items">
						<div className="etaps-img">3</div>
						<p>
							Оформление документов, открытие юридического лица и
							подача досье в миграционную службу
						</p>
					</div>
					<div className="etaps-items">
						<div className="etaps-img">4</div>
						<p>Получение ВНЖ</p>
					</div>
				</div>
			</div>
            </div>
		</div>
	);
};
