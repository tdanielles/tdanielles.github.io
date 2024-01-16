import "../styles/ProjectCard.css"
function ProjectCard(props) {
    const {imgAd, title, skills, description, link} = props;
    return (
        <a className="project" href={link} target="_blank">
            <div>
                <img className="project-image" src={imgAd}/>
                <div className="project-info">
                    <p className="project-title">{title}</p>
                    <div className="skills">
                            {skills.map((element) => (
                                <div className="skill">{element}</div>
                            ))}
                    </div> 
                    <p className="project-desc">{description}</p>
                </div>
            </div>
        </a>
    )
}

export default ProjectCard;