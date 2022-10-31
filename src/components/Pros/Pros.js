import React from "react";
import "./Pros.scss";
// import { ReactComponent as Plusi } from "../../assets/Images/plusi.svg";
import { ReactComponent as EuropeanUnion } from "../../assets/Images/european-union.svg";
import { ReactComponent as Family } from "../../assets/Images/family.svg";
import { ReactComponent as UnitedStatesOfAmerica } from "../../assets/Images/united-states-of-america.svg";
import { ReactComponent as Tax } from "../../assets/Images/tax.svg";
import { ReactComponent as DutyFree } from "../../assets/Images/duty-free.svg";
import { ReactComponent as LowPrice } from "../../assets/Images/low-price.svg";
import Plus from "../../assets/Images/plus.jpg";

export const Pros = () => {
	return (
		<div className="pros-background" id="pros">
			<div className="container">
				<h1 className="pros-title">
					Чем популярна Черногория для иммигрантов
				</h1>
				<div className="pros">
					<div className="pro-left">
						<div className="pro-left-text">

							<EuropeanUnion />
							<p>
								{" "}
								Перспектива вступления Черногории в Евросоюз в
								2025 году
							</p>
						</div>
						<div className="pro-left-text">

							<Family />
							<p> Резидентство для всех членов семьи</p>
						</div>
						<div className="pro-left-text">
							
							<UnitedStatesOfAmerica />
							<p>
								Упрощенное получение шенгенских виз и визы США
								для резидентов Черногории
							</p>
						</div>
					</div>
					<div className="pros-midle">
						<img src={Plus} alt="Plus" />
					</div>
					<div className="pros-right">
						<div className="pro-right-text">
							<p>Низкий налог на доход физических лиц от 9%</p>

							<Tax />
						</div>
						<div className="pro-right-text">
							<p>
								Соглашения об отмене двойного налогообложения с
								большинством стран Европы, а также с Россией,
								Китаем и Швейцарией.
							</p>

							<DutyFree />
						</div>
						<div className="pro-right-text">
							<p>
								Низкие цены в сравнении с государствами Западной
								Европы
							</p>

							<div className="color-radius">

								<LowPrice />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
