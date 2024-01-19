import MenuButton from "./MenuButton";
import Menu from "./Menu";
import "../styles/Navbar.css";
import { HashLink } from "react-router-hash-link";

function Navbar(props) {
    const { isNavOpen, onMenuClick } = props;
    return (
        <div className="navbar">
            <div className="logo-nav">
                <HashLink to="/#"><p>ts</p></HashLink>
            </div>

            <div>
                <MenuButton isNavOpen={isNavOpen} onMenuClick={onMenuClick}/>
                <Menu isNavOpen={isNavOpen} onMenuClick={onMenuClick}/>
            </div>
            
        </div>
    )
}

export default Navbar;