import React from "react";
import AppContext from "../pages/context";

const Info = ({title, image, description}) => {
    const {setCartOpened} = React.useContext(AppContext);


    return (
        <div className="cartEmpty d-flex align-center justify-center flex-column flex">
            <img className="mb-20" width="120px" src={image} alt="Empty cart"/>
            <h2>{title}</h2>
            <p className="opacity-6">{description}</p>
            <button onClick={() => setCartOpened(false)} className="pinkButton">
                <img src="img/arrow.svg" alt="Arrow"/>
                Go back
            </button>
        </div>
    )
}

export default Info;