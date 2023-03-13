import { HashLink } from "react-router-hash-link";
import "../styles/Allprojects.css";
import Aos from "aos";
import "aos/dist/aos.css";

function Allprojects() {
    return (
        <div className="all-projects" data-aos="fade" data-aos-easing="ease-in-sine" data-aos-duration="800">
            <div className="intro">
                <h1 className="title-work">My projects.</h1>
                <p className="intro-desc">A collection of all projects I've done since I started learning how to code.</p>
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

            <div className="work-container">
                <div className="collapsible">
                    <div>
                        <div className="projects-title">
                            <h1 className="position">Personal Website &nbsp;</h1>
                            <p className="links">&#40; <a href="#" target="_blank">Repo</a> &#41;</p>
                        </div>
                        
                        <p className="company">the website you're on right now!</p>
                        <div className="skills">
                            <div className="skill">React</div>
                            <div className="skill">CSS</div>
                        </div>
                    </div>
                </div>
            </div>  
            <hr size="1" width="100%" color="#dddddd"/> 

            <div className="work-container">
                <div className="collapsible">
                    <div>
                        <div className="projects-title">
                            <h1 className="position">goodflix &nbsp;</h1>
                            <p className="links">&#40;  <a href="https://github.com/tdanielles/goodflix" target="_blank">Repo</a> &#41;</p>
                        </div>
                        
                        <p className="company">a movie recommender built with Python and Streamlit based on a movie the user inputs through collaborative filtering</p>
                        <div className="skills">
                            <div className="skill">Python</div>
                            <div className="skill">Jupyter Notebook</div>
                            <div className="skill">Streamlit</div>
                            <div className="skill">Pandas</div>
                            <div className="skill">Numpy</div>
                            <div className="skill">scikit-learn</div>
                        </div>
                    </div>
                </div>
            </div>  
            <hr size="1" width="100%" color="#dddddd"/> 

            <div className="work-container">
                <div className="collapsible">
                    <div>
                        <div className="projects-title">
                            <h1 className="position">Anime Memory Game &nbsp;</h1>
                            <p className="links">&#40; <a href="https://tdanielles.github.io/memory-game/" target="_blank">Site</a> | <a href="https://github.com/tdanielles/memory-game" target="_blank">Repo</a> &#41;</p>
                        </div>
                        
                        <p className="company">an anime-themed memory game with two game modes &#40;Easy - Ghibli and Hard - Naruto&#41; where users get points for choosing a different card each time</p>
                        <div className="skills">
                            <div className="skill">React</div>
                            <div className="skill">CSS</div>
                        </div>
                    </div>
                </div>
            </div>  
            <hr size="1" width="100%" color="#dddddd"/> 

            <div className="work-container">
                <div className="collapsible">
                    <div>
                        <div className="projects-title">
                            <h1 className="position">build-my-cv &nbsp;</h1>
                            <p className="links">&#40; <a href="https://tdanielles.github.io/build-my-cv/" target="_blank">Site</a> | <a href="https://github.com/tdanielles/build-my-cv" target="_blank">Repo</a> &#41;</p>
                        </div>
                        
                        <p className="company">a CV web app that generates a CV based on information the user inputs</p>
                        <div className="skills">
                            <div className="skill">React</div>
                            <div className="skill">CSS</div>
                        </div>
                    </div>
                </div>
            </div>  
            <hr size="1" width="100%" color="#dddddd"/> 

            <div className="work-container">
                <div className="collapsible">
                    <div>
                        <div className="projects-title">
                            <h1 className="position">Weather App &nbsp;</h1>
                            <p className="links">&#40; <a href="https://tdanielles.github.io/weather-app/" target="_blank">Site</a> | <a href="https://github.com/tdanielles/weather-app" target="_blank">Repo</a> &#41;</p>
                        </div>
                        
                        <p className="company">a weather app that displays weather data based on an inputted city</p>
                        <div className="skills">
                            <div className="skill">HTML</div>
                            <div className="skill">CSS</div>
                            <div className="skill">JavaScript</div>
                            <div className="skill">OpenWeatherMap API</div>
                        </div>
                    </div>
                </div>
            </div>  
            <hr size="1" width="100%" color="#dddddd"/> 

            <div className="work-container">
                <div className="collapsible">
                    <div>
                        <div className="projects-title">
                            <h1 className="position">do.me &nbsp;</h1>
                            <p className="links">&#40; <a href="https://tdanielles.github.io/to-do-list/" target="_blank">Site</a> | <a href="https://github.com/tdanielles/to-do-list" target="_blank">Repo</a> &#41;</p>
                        </div>
                        
                        <p className="company">a to-do-list app that allows users to create different projects for various tasks</p>
                        <div className="skills">
                            <div className="skill">HTML</div>
                            <div className="skill">CSS</div>
                            <div className="skill">JavaScript</div>
                        </div>
                    </div>
                </div>
            </div>  
            <hr size="1" width="100%" color="#dddddd"/> 

            <div className="work-container">
                <div className="collapsible">
                    <div>
                        <div className="projects-title">
                            <h1 className="position">BobaTracks &nbsp;</h1>
                            <p className="links">&#40; <a href="https://github.com/tdanielles/boba-tracks" target="_blank">Site</a> | <a href="https://tdanielles.github.io/boba-tracks/" target="_blank">Repo</a> &#41;</p>
                        </div>
                        
                        <p className="company">an app that lets you track the amount of calories in your bubble tea drink</p>
                        <div className="skills">
                            <div className="skill">HTML</div>
                            <div className="skill">CSS</div>
                            <div className="skill">JavaScript</div>
                        </div>
                    </div>
                </div>
            </div>  
            <hr size="1" width="100%" color="#dddddd"/> 

            <div className="work-container">
                <div className="collapsible">
                    <div>
                        <div className="projects-title">
                            <h1 className="position">Animal Crossing Calculator &nbsp;</h1>
                            <p className="links">&#40; <a href="https://tdanielles.github.io/animal-crossing-calculator/" target="_blank">Site</a> | <a href="https://github.com/tdanielles/animal-crossing-calculator" target="_blank">Repo</a> &#41;</p>
                        </div>
                        
                        <p className="company">an Animal Crossing themed calculator</p>
                        <div className="skills">
                            <div className="skill">HTML</div>
                            <div className="skill">CSS</div>
                            <div className="skill">JavaScript</div>
                        </div>
                    </div>
                </div>
            </div>  
            <hr size="1" width="100%" color="#dddddd"/> 

            <div className="work-container">
                <div className="collapsible">
                    <div>
                        <div className="projects-title">
                            <h1 className="position">Rock Paper Scissors &nbsp;</h1>
                            <p className="links">&#40; <a href="https://tdanielles.github.io/rock-paper-scissors/" target="_blank">Site</a> | <a href="https://github.com/tdanielles/rock-paper-scissors" target="_blank">Repo</a> &#41;</p>
                        </div>
                        
                        <p className="company">a web-based rock paper scissor game with a computer</p>
                        <div className="skills">
                            <div className="skill">HTML</div>
                            <div className="skill">CSS</div>
                            <div className="skill">JavaScript</div>
                        </div>
                    </div>
                </div>
            </div>  
            <hr size="1" width="100%" color="#dddddd"/> 

            <div className="work-container">
                <div className="collapsible">
                    <div>
                        <div className="projects-title">
                            <h1 className="position">Tic Tac Toe &nbsp;</h1>
                            <p className="links">&#40; <a href="https://tdanielles.github.io/tic-tac-toe/" target="_blank">Site</a> | <a href="https://github.com/tdanielles/tic-tac-toe" target="_blank">Repo</a> &#41;</p>
                        </div>
                        
                        <p className="company">a two-player Tic-Tac-Toe game in the web</p>
                        <div className="skills">
                            <div className="skill">HTML</div>
                            <div className="skill">CSS</div>
                            <div className="skill">JavaScript</div>
                        </div>
                    </div>
                </div>
            </div>  
            <hr size="1" width="100%" color="#dddddd"/> 

            <div className="work-container">
                <div className="collapsible">
                    <div>
                        <div className="projects-title">
                            <h1 className="position">Messenger Client-Server Chat App &nbsp;</h1>
                            <p className="links">&#40; <a href="https://github.com/tdanielles/Messenger-Client-Server-ChatApplication" target="_blank">Repo</a> &#41;</p>
                        </div>
                        
                        <p className="company">a chat app which allows any two computers to communicate as client and server based on their IP address</p>
                        <div className="skills">
                            <div className="skill">Java</div>
                        </div>
                    </div>
                </div>
            </div>  
            <hr size="1" width="100%" color="#dddddd"/> 

            <div className="work-container">
                <div className="collapsible">
                    <div>
                        <div className="projects-title">
                            <h1 className="position">Space Invaders Clone &nbsp;</h1>
                            <p className="links">&#40; <a href="https://github.com/tdanielles/Space-Invaders-Clone" target="_blank">Repo</a> &#41;</p>
                        </div>
                        
                        <p className="company">a space invaders clone containing levels, lives, and point and high score systems</p>
                        <div className="skills">
                            <div className="skill">Python</div>
                            <div className="skill">Pygame</div>
                        </div>
                    </div>
                </div>
            </div>  
            <hr size="1" width="100%" color="#dddddd"/> 

            <div className="more-projects">
                <HashLink to="/#projects" smooth><button>Back</button></HashLink>
            </div>
        </div>
    )
}

export default Allprojects;