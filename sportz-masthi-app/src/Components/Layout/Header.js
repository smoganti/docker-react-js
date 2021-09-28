import React, { Fragment } from "react";
import classes from "./Header.module.css";
import imageSrc from "../../Assets/meals.jpeg";
import videoSrc from "../../Assets/logo.gif"
import tennisSrc from "../../Assets/tennis.png";

import NavBar from "../Layout/NavBar";



const Header = (props) => {

    return <Fragment>
        <header className={classes.header}>
            <img src={videoSrc} alt='logo gif' width='220' height='80' />
            {/* <img src={tennisSrc} className={classes['tennis-ball']} alt='tennis ball'/> */}

        <NavBar/>
        </header>     
       
        <div className={classes['main-image']}>
            <img src={imageSrc} alt='Table full of food' />
        </div>

    </Fragment>
}

export default Header;