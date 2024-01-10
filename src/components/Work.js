import "../styles/Work.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Collapsible from "./Collapsible";
import { useEffect } from "react";

function Work() {
    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <div id="work" className="work" data-aos="fade" data-aos-easing="ease-in-sine" data-aos-duration="800">
            <h1 className="title-work">⚙️ Experience</h1>
            
            <Collapsible position="Explore Intern" 
                         company="Microsoft" 
                         skills={["Product Management", "Software Development"]}
                         description={["Incoming! Come back soon for updates :)"]}
            />
            <hr size="1" width="100%" color="#dddddd"/>

            <Collapsible position="Product Intern for Employee Experience" 
                         company="Growsari" 
                         skills={["Product Management"]}
                         description={["Analysed feedback & data from 200+ employees & used the data gathered to create a comprehensive document outlining the ideal employee experience.",
                         "Proposed onboarding packets & restructured onboarding process, increasing enablement scores by 10%.",
                         "Redesigned & reorganized the employee resource corner, increasing website engagement by 20%."]}
            />
            <hr size="1" width="100%" color="#dddddd"/>

            <Collapsible position="I.T. Department Intern" 
                         company="The D.I.Y. Shop Corporation" 
                         skills={["Software Development"]}
                         description={["Optimized inventory process by designing & building an inventory system with details on transfers, item & vendor master lists, & store & warehouse locations using Microsoft Visual Basic 6.0 & Microsoft Access.",
                         "Assembled, set up, configured, & troubleshot computers in the head office."]}
            />
            <hr size="1" width="100%" color="#dddddd"/>
        </div>
    )
}

export default Work;