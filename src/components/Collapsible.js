import { useState } from "react";
import "../styles/Collapsible.css";
function Collapsible(props) {
    const { position, company, skills, description } = props;

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = (e) => {
        setIsOpen(s => !s);
    }

    const styles = {
        content: {
            maxHeight: isOpen ? "300px" : 0,
            transition: 'max-height 1s ease',
            overflow: "hidden",
        }
    }
    return (
        <div className="work-container">
            <div className="collapsible" onClick={handleClick}>
                <div>
                    <h1 className="position">{position}</h1>
                    <p className="company">{company}</p>
                    <div className="skills">
                    {skills.map((element) => (
                        <div className="skill">{element}</div>
                    ))}
                    </div>
                </div>
                <div>
                    { isOpen ? <img src="/images/minus.svg"/> : <img src="/images/plus.svg"/>}
                </div>
            </div>
            { 
                <ul className="content" style={styles.content}>
                    {description.map((element) => (
                        <li>{element}</li>
                    ))}
                </ul> }
        </div>      
    )
}

export default Collapsible;