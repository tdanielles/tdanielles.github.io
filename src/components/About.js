import "../styles/About.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


function About() {
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <div id="about" className="about" data-aos="fade" data-aos-easing="ease-in-sine" data-aos-duration="800">
            <div className="about-text">
                <h1 className="title">About me.</h1>
                <p>Hi there! I'm Trisha, an aspiring software engineer and product manager. Welcome to my little corner of the internet!</p>
                <p>I am passionate about finding creative solutions to problems around me and help make lives easier.</p>
                <p className="find">When I'm not working, you can find me...</p>
                <ul>
                    <li>Organizing Western Canada's largest hackathons with <a href="https://nwplus.io/" target="_blank">nwPlus</a></li>
                    <li>Planning my days, weeks, and months in my planner</li>
                    <li>Catching up on major backlogs of shows to watch and games to play</li>
                    <li>Reading books</li>
                </ul>
            </div>
            <div className="about-img">
                <img className="girl" src="/images/girl.png"/>
            </div>
        </div>
    )
}

export default About;