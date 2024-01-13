import "../styles/Work.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Collapsible from "./Collapsible";
import { useEffect, useState } from "react";
import "../"

function Work() {
    useEffect(() => {
        Aos.init();
    }, [])

    const [category, setCategory] = useState('work');

    function changeActive(e) {
        setCategory(e.target.innerHTML.toLowerCase());
        e.target.classList.add('active');
        if (e.target.innerHTML.toLowerCase() == 'work') {
            let vol = document.getElementById('voln-btn');
            vol.classList.remove('active');
        } else {
            let work = document.getElementById('work-btn');
            work.classList.remove('active');
        }
    }

    return (
        <div id="work" className="work" data-aos="fade" data-aos-easing="ease-in-sine" data-aos-duration="800">
            <div className="experience-header">
                <h1 className="title-work">⚙️ Experience</h1>
                <div className="buttons">
                    <button id="work-btn" className="active" onClick={changeActive}>Work</button>
                    <button id="voln-btn" onClick={changeActive}>Volunteer</button>
                </div>
            </div>
            
            <div className="experiences">
                {category == "work" ? <Collapsible logo="images/msft-logo.png" 
                            company="Microsoft"
                            contents={[["Software Engineering Intern", ["Software Development"], ["Incoming! Come back soon for updates :)"], "May 2024 - Aug 2024"], ["Explore Intern", ["Typescript", "C++", "Web Development", "Product Management"], ["Improved the reading experience for over 150 million Microsoft Edge users by designing and building a table of contents feature using HTML, CSS, Typescript, & C++ with two other interns.", 
                            "Ensured real-time updates to the feature with a single click by implementing a dynamic refresh button.", "Enabled users to save content for future reference by integrating a secure bookmarks feature."], "May 2023 - Aug 2023"]]}
                /> : ""}


                {category == "work" ? <Collapsible logo="images/gs-logo.png" 
                            company="growsari"
                            contents={[["Product Management Intern", ["Product Management"], ["Analysed feedback & data from 200+ employees & used the data gathered to create a comprehensive document outlining the ideal employee experience.",
                            "Improved enablement scores by 10% by proposing onboarding packets & restructuring the onboarding process.",
                            "Increased website engagement by 20% by redesigning & reorganizing the employee resource corner."], "Jul 2022 - Sep 2022"]]}
                /> : ""}

                {category == "work" ? <Collapsible logo="images/diy-logo.png" 
                            company="The D.I.Y. Shop Corporation"
                            contents={[["Software Engineering Intern", ["Software Development"], ["Optimized inventory process by designing & building an inventory system with details on transfers, item & vendor master lists, & store & warehouse locations using Microsoft Visual Basic 6.0 & Microsoft Access.",
                            "Assembled, set up, configured, & troubleshot computers in the head office."], "May 2021 - Jul 2021"]]}
                /> : ""}

                {category == "volunteer" ? <Collapsible logo="images/code-in-logo.png" 
                            company="The C.O.D.E. Initiative"
                            contents={[["Volunteer Tutor", ["Software Development", "Web Development", "Scratch", "AI", "Teaching"], ["Teach Beginner & Advanced Scratch, Beginner & Intermediate Web Development, and Intro to AI to underrepresented youth in S.T.E.A.M."], "Jan 2024 - Present"]]}
                /> : ""}

                {category == "volunteer" ? <Collapsible logo="images/nwplus-logo.png" 
                            company="nwPlus"
                            contents={[["cmd-f Logistics Coordinator", ["Event Planning", "Hackathons"], ["Organizing Western Canada's largest hackathon for underrepresented genders (to be held March 9-10th) with 3 other team members.",
                            "In charge of coordinating volunteer and organizer shifts, overall event scheduling, and organizing pre-hackathon workshops."], "May 2023 - Present"], ["HackCamp Logistics Coordinator", ["Event Planning", "Hackathons"], ["Organized HackCamp 2022, Western Canada’s largest beginner-focused hackathon, with 3 other team members, with over 100 participants and 26 project submissions.", "Lead pre-hackathon workshops and mentorship logistics of HackCamp, which involve planning workshops, outreaching for interested workshop hosts and mentors, and scheduling workshop dry runs."], "Apr 2022 - Apr 2023"]]}
                /> : ""}

                {category == "volunteer" ? <Collapsible logo="images/wics-logo.png" 
                            company="UBC Women in Computer Science"
                            contents={[["Internal Events Director", ["Event Planning"], ["Organize internal events for female-identifying CS students at UBC including kickoff events, game nights, study sessions, interview prep workshops, and socials!"], "Aug 2023 - Present"]]}
                /> : ""}

                {category == "volunteer" ? <Collapsible logo="images/sauder-logo.png" 
                            company="Sauder LIFT"
                            contents={[["LIFT Team Member", ["Business", "Teaching"], ["Mentor and teach basic business concepts to aspiring entrepreneurs in Kenya."], "Aug 2023 - Present"]]}
                /> : ""}

                {category == "volunteer" ? <Collapsible logo="images/blockchain-logo.png" 
                            company="UBC Blockchain Club"
                            contents={[["Product Designer", ["Software Development", "Product Design", "Figma", "Next.js", "React", "Tailwind CSS"], ["Implement UI/UX for all software built in the club with 4 developers.",
                            "Redesigned the club's website using Figma and built the events and developers page using Next.js and Tailwind CSS."], "Apr 2022 - Apr 2023"]]}
                /> : ""}

                {category == "volunteer" ? <Collapsible logo="images/gdsc-logo.png" 
                            company="UBC Google Developers Student Club"
                            contents={[["Tech Director", ["Software Development", "Node.js", "JavaScript", "Discord.js", "Firebase"], ["Coded the socials command which responds with the club’s social media links for the club Discord bot using Node.js and JavaScript, utilizing the Discord.js and the fs module.",
                            "Implemented an events function which listens for an event where a user registers for the club’s events and updates the club’s database in Firebase."], "Sep 2021 - Apr 2022"]]}
                /> : ""}
            </div>
        </div>
    )
}

export default Work;