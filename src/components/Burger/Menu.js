import React from "react";
import "./Menu.scss";

export const Menu = ({ header, items, active, setActive }) => {


	return (
		<div className={active ? 'menu active' : 'menu'} onClick={() => setActive(false)}>
			<div className="menu-content" onClick={e => e.stopPropagation()}>
				<div className="menu-header">{header}</div>
                <ul onClick={() => setActive(false)}>
                    {items.map(item =>
                        <li>
                            <a href={item.href}>{item.value}</a>
                        </li>
                        )}
                </ul>
			</div>
		</div>
	);
};
