import React from "react";
import "./Burger.scss";
import { Menu } from "./Menu";
import { useState } from "react";

export const Burger = () => {
	const [menuActive, setMenuActive] = useState(false);
	const items = [
		{ value: "ВНЖ Черногории", href: "#pros" },
		{ value: "Документы", href: "#documents" },
		{ value: "Контакты", href: "#contacts" },
		{ value: "О нас", href: "#prichina" },
	];

	return (
		<div className="burger">
			<nav className="burger-nav">
				<div
					className="burger-btn"
					onClick={() => setMenuActive(!menuActive)}
				>
					<span></span>
				</div>
			</nav>
			<Menu
				active={menuActive}
				setActive={setMenuActive}
				header={"Montenegro Live"}
				items={items}
			/>
		</div>
	);
};
