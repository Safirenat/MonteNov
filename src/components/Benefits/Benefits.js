import React from "react";
import "./Benefits.scss";

import { ReactComponent as Preimuch } from "../../assets/Images/preimuch.svg";

export const Benefits = () => {
	return (
		<div className="benefits">
			<div className="container">
				<h1 className="benefits-title">
					Преимущества ВНЖ через открытие юридического лица
				</h1>

				<div className="benefits-text-wrapper">
					<div className="benefits-text">
						<Preimuch />
						<p>Получение ВНЖ за 30 дней</p>
					</div>
					<div className="benefits-text">
						<Preimuch />
						<p>Резидентство для всех членов семьи соискателя</p>
					</div>
					<div className="benefits-text">
						<Preimuch />
						<p>
							Право на трудоустройство без оформления рабочей визы
						</p>
					</div>
					<div className="benefits-text">
						<Preimuch />
						<p>Возможность получения ПМЖ через 5 лет</p>
					</div>
					<div className="benefits-text">
						<Preimuch />
						<p>Отсутствие требований к знанию местного языка</p>
					</div>
					<div className="benefits-text">
						<Preimuch />
						<p>
							Самый быстрый, бюджетный и гарантированный способ
							получения ВНЖ
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
