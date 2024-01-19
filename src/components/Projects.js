import "../styles/Projects.css"
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import ProjectCard from "./ProjectCard";

function Projects() {
    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <div id="projects" className="projects" data-aos="fade" data-aos-easing="ease-in-sine" data-aos-duration="800">
            <div className="github">
                <h1 className="title-work">💡 Projects</h1>
                <a href="https://github.com/tdanielles" target="_blank"><img src="images/github-logo.png"/></a>
            </div>
            <div className="projects-grid">
                <ProjectCard imgAd="images/yummy-demo.png" 
                title="yummy" 
                skills={["React", "Local Storage", "Firebase"]}
                description="a recipe app that allows users to search recipes of food they are craving as well as save them for later"
                link="https://yummy-d3836.firebaseapp.com/"/>

                <ProjectCard imgAd="images/rekindle-demo.png" 
                title="rekindle" 
                skills={["React", "ChakraUI", "Next.js", "Firebase"]}
                description="an online mental health hotline service accessible to both users and hotline responders"
                link="https://rekindle.vercel.app/"/>

                <ProjectCard imgAd="images/timetrekkr-demo.png" 
                title="timetrekkr 🏆" 
                skills={["React", "OpenAI API", "Web Speech API"]}
                description="an interactive storyboard for kids; 2nd place @ Produhacks 2023"
                link="https://www.trishasia.com/timetrekkr/"/>
                
                <ProjectCard imgAd="images/checkin-demo.png" 
                title="myCheckIn Journal" 
                skills={["Java", "JUnit", "JSwing"]}
                description="a personal mini journal where users can add, edit, and delete journal entries"
                link="https://github.com/tdanielles/my-check-in-journal"/>
            </div>
            <div className="more-projects">
                <HashLink to="/projects#"><button>More projects</button></HashLink>
            </div>
        </div>
    )
}

export default Projects;