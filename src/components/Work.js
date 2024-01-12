import "../styles/Work.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Collapsible from "./Collapsible";
import { useEffect } from "react";
import "../"

function Work() {
    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <div id="work" className="work" data-aos="fade" data-aos-easing="ease-in-sine" data-aos-duration="800">
            <h1 className="title-work">⚙️ Experience</h1>
            
            <Collapsible logo="images/msft-logo.png" 
                         company="Microsoft" 
                         contents={[["Software Engineering Intern", ["Software Development"], ["Incoming! Come back soon for updates :)"], "May 2024 - Aug 2024"], ["Explore Intern", ["Typescript", "C++", "Web Development", "Product Management"], ["Improved the reading experience for over 150 million Microsoft Edge users by designing and building a table of contents feature using HTML, CSS, Typescript, & C++ with two other interns.", 
                         "Ensured real-time updates to the feature with a single click by implementing a dynamic refresh button.", "Enabled users to save content for future reference by integrating a secure bookmarks feature."], "May 2023 - Aug 2023"]]}
            />

            <Collapsible logo="images/gs-logo.png" 
                         company="growsari" 
                         contents={[["Product Management Intern", ["Product Management"], ["Analysed feedback & data from 200+ employees & used the data gathered to create a comprehensive document outlining the ideal employee experience.",
                        "Improved enablement scores by 10% by proposing onboarding packets & restructuring the onboarding process.",
                        "Increased website engagement by 20% by redesigning & reorganizing the employee resource corner."], "Jul 2022 - Sep 2022"]]}
            />

            <Collapsible logo="images/diy-logo.png" 
                         company="The D.I.Y. Shop Corporation" 
                         contents={[["Software Engineering Intern", ["Software Development"], ["Optimized inventory process by designing & building an inventory system with details on transfers, item & vendor master lists, & store & warehouse locations using Microsoft Visual Basic 6.0 & Microsoft Access.",
                         "Assembled, set up, configured, & troubleshot computers in the head office."], "May 2021 - Jul 2021"]]}
            />

            {/* <Collapsible position="I.T. Department Intern" 
                         company="The D.I.Y. Shop Corporation" 
                         skills={["Software Development"]}
                         description={["Optimized inventory process by designing & building an inventory system with details on transfers, item & vendor master lists, & store & warehouse locations using Microsoft Visual Basic 6.0 & Microsoft Access.",
                         "Assembled, set up, configured, & troubleshot computers in the head office."]}
            /> */}
        </div>
    )
}

export default Work;