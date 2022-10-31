import React from "react";
import "./Documents.scss";


import { ReactComponent as Document } from "../../assets/Images/document.svg";


export const Documents = () => {
	return (
		<div className="documents" id="documents">
			<div className="container">
				<div>
					<h1 className="documents-title">
						Документы, которые потребуются для получения ВНЖ через
						открытия юридического лица:
					</h1>
					<div className="documents-text-wrapper">
						<div className="documents-text">
							<Document />
							<p>Загранпаспорт </p>
						</div>
						<div className="documents-text">
							<Document />
							<p>
								Справка об отсутствии судимости, с живой
								подписью и печатью, не старше 6 месяцев
							</p>
						</div>
						<div className="documents-text">
							<Document />
							<p>
								Документ о среднем или высшем образовании
								(диплом, аттестат), с последующей нострификацией{" "}
							</p>
						</div>
						<div className="documents-text">
							<Document />
							<p>
								Подтверждение о месте проживания в Черногории
								(договор аренды или свидетельство о
								собственности на недвижимость){" "}
							</p>
						</div>
						<div className="documents-text">
							<Document />
							<p>Миграционная регистрация</p>
						</div>
						<div className="documents-text">
							<Document />
							<p>Медицинская страховка </p>
						</div>
						<div className="documents-text">
							<Document />
							Справка о прохождении медкомиссии
						</div>
						<div className="documents-text">
							<Document />
							<p>Выписка со счета (делают наши специалисты) </p>
						</div>
						<div className="documents-text">
							<Document />
							<p>
								Виза D - для граждан государств, у которых с
								Черногорией визовый режим{" "}
							</p>
						</div>
						<div className="documents-text">
							<Document />
							<p>
								Переводы всех документов на черногорский язык,
								выполняются на месте{" "}
							</p>
						</div>
						<div className="documents-text">
							<Document />
							<p>Свидетельства о рождении детей (при наличии) </p>
						</div>
						<div className="documents-text">
							<Document />
							<p>Свидетельство о браке</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
