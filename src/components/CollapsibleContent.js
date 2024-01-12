import "../styles/CollapsibleContent.css";
function CollapsibleContent(props) {
    const { position, skills, description, date } = props;
    return (
        <div className="collapsible-container">
            <div className="graphics">
                <div className="content-circle"></div>
                <div className="content-line"></div>
            </div>
            <div className="collapsible-content">
                <h2 className="position">{position}</h2>
                <h4 className="date">{date}</h4>
                <ul>
                    {description.map((element) => (
                        <li>{element}</li>
                    ))}
                </ul> 
                <div className="skills">
                    {skills.map((element) => (
                        <div className="skill">{element}</div>
                    ))}
                </div> 
            </div>
        </div>
    )
}

export default CollapsibleContent;