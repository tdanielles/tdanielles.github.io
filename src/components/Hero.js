import { HashLink } from "react-router-hash-link";
import "../styles/Hero.css";
function Hero() {
    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = 0; 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    }

    return (
        <div className="hero" id="hero">
            <p className="two">Hey there,</p>
            <h1 className="three">I'm Trisha 👋</h1>
            <p className="desc">an aspiring software engineer studying Business and Computer Science at UBC</p>
            <div className="socials">
                <a href="https://www.linkedin.com/in/trisha-sia/" target="_blank"><img src="images/linkedin-logo.png"/></a>
                <a href="https://github.com/tdanielles" target="_blank"><img src="images/github-logo.png"/></a>
                <a href="mailto: trisha.d.sia@gmail.com" target="_blank"><img src="images/mail-logo.png"/></a>
            </div>
            <HashLink smooth to="/#about" scroll={el => scrollWithOffset(el)}>
                <div class="arrow-down">
                    <div class="left"></div>
                    <div class="right"></div>
                </div>
            </HashLink>
        </div>
    )
}

export default Hero;