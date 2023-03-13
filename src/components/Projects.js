import "../styles/Projects.css"
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { HashLink } from "react-router-hash-link";

function Projects() {
    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <div id="projects" className="projects" data-aos="fade" data-aos-easing="ease-in-sine" data-aos-duration="800">
            <div className="github">
                <h1 className="title-work">Featured projects.</h1>
                <p><a href="https://github.com/tdanielles" target="_blank">My Github</a></p>
            </div>
            <div className="work-container">
                <div className="collapsible">
                    <div>
                        <div className="projects-title">
                            <h1 className="position">yummy &nbsp;</h1>
                            <p className="links">&#40; <a href="https://yummy-d3836.firebaseapp.com/" target="_blank">Site</a> | <a href="https://github.com/tdanielles/yummy" target="_blank">Repo</a> &#41;</p>
                        </div>
                        
                        <p className="company">a recipe app that allows users to search recipes of food they are craving as well as save them for later</p>
                        <div className="skills">
                            <div className="skill">React</div>
                            <div className="skill">Forkify API</div>
                            <div className="skill">Local Storage API</div>
                            <div className="skill">Firebase</div>
                        </div>
                    </div>
                </div>
            </div>  
            <hr size="1" width="100%" color="#dddddd"/> 

            <div className="work-container">
                <div className="collapsible">
                    <div>
                        <div className="projects-title">
                            <h1 className="position">libTracker &nbsp;</h1>
                            <p className="links">&#40; <a href="https://tdanielles.github.io/libTracker/" target="_blank">Site</a> | <a href="https://github.com/tdanielles/libTracker" target="_blank">Repo</a> &#41;</p>
                        </div>
                        
                        <p className="company">a book-tracking application that allows users to add and remove books to their personal bookshelf</p>
                        <div className="skills">
                            <div className="skill">HTML</div>
                            <div className="skill">CSS</div>
                            <div className="skill">JavaScript</div>
                            <div className="skill">Firebase</div>
                        </div>
                    </div>
                </div>
            </div>  
            <hr size="1" width="100%" color="#dddddd"/> 

            <div className="work-container">
                <div className="collapsible">
                    <div>
                        <div className="projects-title">
                            <h1 className="position">myCheckIn Journal &nbsp;</h1>
                            <p className="links">&#40; <a href="https://github.com/tdanielles/my-check-in-journal" target="_blank">Repo</a> &#41;</p>
                        </div>
                        
                        <p className="company">a personal mini-journal where users can add, edit, and delete journal entries</p>
                        <div className="skills">
                            <div className="skill">Java</div>
                            <div className="skill">JUnit</div>
                            <div className="skill">JSwing</div>
                        </div>
                    </div>
                </div>
            </div>  
            <hr size="1" width="100%" color="#dddddd"/> 
            <div className="more-projects">
                <HashLink to="/projects#"><button>More projects</button></HashLink>
            </div>
        </div>
    )
}

export default Projects;