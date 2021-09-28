
import HomeSymbolIcon from "../Modules/Home/HomeSymbolIcon";
import LiveScoreIcon from "../Modules/LiveScore/LiveScoreIcon";
import DeckGameIcon from "../Modules/DeckGame/DeckGameIcon";
import NewsIcon from "../Modules/News/NewsIcon";
import UserIcon from "../Modules/User/UserIcon";
import classes from "./NavButton.module.css";

const NavButton = (props) => {

    const components = {
        HomeSymbolIcon,
        LiveScoreIcon,
        DeckGameIcon,
        NewsIcon,
        UserIcon
    }

    const SpecificComponent = components[props.componentName];


    return <button className={classes.button}>
            <span className={classes.icon}>
                <SpecificComponent />
            </span>
            <span>
                 &nbsp; {props.name}
            </span>
            <span className={classes.badge}> {props.num} </span>
    </button>
}

export default NavButton;