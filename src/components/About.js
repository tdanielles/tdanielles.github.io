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
                <h1 className="title">👩🏻‍💻 About</h1>
                <p>I'm passionate about finding creative solutions to problems around me. I'm always looking to grow and challenge myself through various opportunities while making a meaningful impact in the community.</p>
                <p className="find">When I'm not working, you can find me...</p>
                <ul>
                    <li>🚀 Organizing cool hackathons and events with <a href="https://nwplus.io/" target="_blank">nwPlus</a> and <a href="https://ubcwics.com/" target="_blank">UBC Women in Computer Science</a></li>
                    <li>🌍 Teaching aspiring entrepreneurs in Kenya with <a href="https://www.sauder.ubc.ca/LIFT" target="_blank">Sauder LIFT</a></li>
                    <li>📌 Meticulously planning my days</li>
                    <li>🍿 Catching up on major backlogs of shows to watch and games to play</li>
                </ul>
            </div>
            <div className="about-img">
                <img className="girl" src="/images/headshot.jpg"/>
            </div>
        </div>
    )
}

export default About;