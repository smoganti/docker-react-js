import classes from './NavBar.module.css';

import NavButton from "../UI/NavButton";

const NavBar = (props) => {

    return (
        <nav className={classes.topContainer}>
            <ul>
                <li><NavButton componentName="HomeSymbolIcon" name="Home" /></li>
                <li><NavButton componentName="LiveScoreIcon" name="Live Scores" /></li>
                <li><NavButton componentName="DeckGameIcon" name="Cards Game" /></li>
                <li><NavButton componentName="NewsIcon" name="News" /></li>
                <li><NavButton componentName="UserIcon" /></li>
            </ul>
        </nav>

    )
};

export default NavBar;