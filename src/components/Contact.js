import "../styles/Contact.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Contact() {
    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <div className="contact" id="contact"  data-aos="fade" data-aos-easing="ease-in-sine" data-aos-duration="800">
            <div className="contact-words">
                <h1 className="contact-title">Thanks for <br></br>stopping by.</h1>
                <p>I am always looking to learn new things and challenge myself. If you have any opportunities to share, any topic to discuss, or just want to say hello, I’m happy to chat!</p>
                <p>You can get in touch with me via <a href="https://www.linkedin.com/in/trisha-sia/" target="_blank">LinkedIn</a> or <a href="mailto: trisha.d.sia@gmail.com">email</a>.</p>
            </div>
            <div className="contact-img">
                <img className="flower" src="/images/flower.png"/>
            </div>
        </div>
    )
}

export default Contact;