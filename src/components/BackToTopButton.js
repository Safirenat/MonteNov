// import React from "react";
import React, { useState, useEffect } from "react";

// import "../../App.scss";
// import "./Main.scss";
import BgUp from "../assets/Images/up.png";
import { ReactComponent as TelegramFooter } from "../assets/Images/telegram-footer.svg";

export const BackToTopButton = () => {
	const [backToTopButton, setBackToTopButton] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 300) {
				setBackToTopButton(true);
			} else {
				setBackToTopButton(false);
			}
		});
	}, []);

	const scrollUp = () => {
		window.scrollTo({
			top: 0,
			behavior: "auto",
		});
	};

	return (
		<div>
			{backToTopButton && (
				<div>
					<div className="telegram-footer">
						<a
							target="_blank"
							href="https://t.me/+38268338309"
						>
							<TelegramFooter />
						</a>
					</div>
					<div className="icon-up" onClick={scrollUp}>
						<img src={BgUp} alt="BgMain" />
					</div>
				</div>
			)}
		</div>
	);
};
