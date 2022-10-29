// import React from "react";
import React, { useState, useEffect } from "react";

// import "../../App.scss";
// import "./Main.scss";
import BgUp from "../assets/Images/up.png";


export const BackToTopButton = () => {

    const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 300) {
                setBackToTopButton(true)
            } else {
                setBackToTopButton(false)

            }
        })
    }, [])
    
    

    // const scrollUp = () => {
    //   try {
    //     window.scroll({
    //       behavior: 'smooth',
    //       top: 0,
    //     })
    //   } catch(err) {
    //     if (err instanceof TypeError) {
    //       window.scroll(0, 0)
    //     } else {
    //       throw err
    //     }
    //   }
    // }
    // const scrollUp = () => {
    //   try {
    //     window.scroll({
    //       behavior: 'smooth',
    //       top: 0,
    //     })
    //   } catch(err) {
    //     if (err instanceof TypeError) {
    //       window.scroll(0, 0)
    //     } else {
    //       throw err
    //     }
    //   }
    // }

    const scrollUp = () => {
      window.scrollTo({
        top: 0,
        behavior: 'auto'
      });
    }


	return (
		<div>
            {backToTopButton && (
                <div className="icon-up" onClick={scrollUp}>
                <img src={BgUp} alt="BgMain" />
              </div>
            )}

            {/* 			
			<div className="icon-up" onClick={scrollUp}>
				<img src={BgUp} alt="BgMain" />
			</div> */}
            {/* {backToTopButton && (
                <button style={{
                    position:"fixed",
                    bottom: "50px",
                    right: "50px",
                    height: "50px",
                    width: "50px",
                    fontSize: "50px",
                }}
                onClick={scrollUp}>^</button>
            )} */}
        </div>
	);
};
