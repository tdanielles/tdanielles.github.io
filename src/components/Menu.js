import "../styles/Menu.css";
import { HashLink } from 'react-router-hash-link';

function Menu(props) {
    const { isNavOpen, onMenuClick } = props;

    const handleClick = (e) => {
        onMenuClick(false);
    }
    const styles={
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          height: isNavOpen ? '100%': 0,
          width: '100%',
          background: '#1c2048cd',
          transition: 'height 0.3s ease',
          zIndex: 2,
        }
    }

    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = 0; 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    }

    return (
        <div style={styles.overlay}>
            {isNavOpen && <div className="overlay-content">
                <HashLink smooth to="/#about" scroll={el => scrollWithOffset(el)} onClick={handleClick} className="link-underline">About me.</HashLink>
                <HashLink smooth to="/#work" scroll={el => scrollWithOffset(el)} onClick={handleClick} className="link-underline">My experience.</HashLink>
                <HashLink smooth to="/#projects" scroll={el => scrollWithOffset(el)} onClick={handleClick} className="link-underline">Featured projects.</HashLink>
                <HashLink smooth to="/#contact" scroll={el => scrollWithOffset(el)} onClick={handleClick} className="link-underline">Contact me.</HashLink>
                <a className="link-underline" href="https://drive.google.com/file/d/18y7eNlS3w3PcCGgV4AprJLcITkvkklim/view?usp=share_link" target="_blank" onClick={handleClick}>My resume.</a>
            </div>}
        </div>
    )
}

export default Menu;