import React from "react";
import "./Prichina.scss";

export const Prichina = () => {
	return (
		<div className="prichina" id="prichina">
			<div className="container">
				<h1 className="prichina-title">
					Почему выбирают Montenegro Live
				</h1>
				<div className="prichina-wrapper">
					<div className="prichina-img-wrapper">
						<div className="prichina-text">
							<h3 className="prichina-subtitle">
								Многолетний опыт работы
							</h3>
							<p>
								Специалисты Montenegro Live на протяжении 5 лет
								успешно помогают в решении миграционных вопросах
								тысячам клиентов из России и стран СНГ
							</p>
						</div>
					</div>
					<div className="prichina-img-wrapper">
						<div className="prichina-text">
							<h3 className="prichina-subtitle">
								{" "}
								Высокий уровень компетентности
							</h3>
							<p>
								Наши опытные специалисты оказывают весь спектр
								услуг с учетом законодательства Черногории и в
								соответствии со стандартами бухгалтерского учета
								в Черногории
							</p>
						</div>
					</div>
					<div className="prichina-img-wrapper">
						<div className="prichina-text">
							<h3 className="prichina-subtitle">
								Индивидуальный подход и прозрачность
								взаимодействия
							</h3>
							<p>
								Заключение договора с каждым клиентом и помощь
								на каждом этапе оформления ВНЖ
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
