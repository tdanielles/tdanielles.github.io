import { useState } from "react";
import "../styles/Collapsible.css";
import CollapsibleContent from "./CollapsibleContent";
function Collapsible(props) {
    const { logo, company, contents } = props;

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = (e) => {
        setIsOpen(s => !s);
    }

    // const styles = {
    //     content: {
    //         maxHeight: isOpen ? "500px" : 0,
    //         transition: 'max-height 1s ease',
    //         overflow: "hidden",
    //     }
    // }
    return (
        <div className="work-container">
            <div className="collapsible" onClick={handleClick}>
                <div className="work-header">
                    <img className="company-logo" src={logo}/>
                    <h1 className="company">{company}</h1>
                </div>
                <div>
                    { isOpen ? <img className="work-toggle" src="/images/arrow-up.png"/> : <img className="work-toggle" src="/images/arrow-down.png"/>}
                </div>
            </div>
            { isOpen && contents.map((content) => (
                <CollapsibleContent
                position={content[0]}
                skills={content[1]}
                description={content[2]}
                date={content[3]} />
            ))
            }
        </div>      
    )
}

export default Collapsible;