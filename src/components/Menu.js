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
          background: '#fffbf5',
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
                <HashLink smooth to="/#about" scroll={el => scrollWithOffset(el)} onClick={handleClick} className="link-underline">👩🏻‍💻 About 👩🏻‍💻</HashLink>
                <HashLink smooth to="/#work" scroll={el => scrollWithOffset(el)} onClick={handleClick} className="link-underline">⚙️ Experience ⚙️</HashLink>
                <HashLink smooth to="/#projects" scroll={el => scrollWithOffset(el)} onClick={handleClick} className="link-underline">💡 Projects 💡</HashLink>
            </div>}
        </div>
    )
}

export default Menu;