import "../styles/Hero.css";
function Hero() {
    return (
        <div className="hero" id="hero">
            <img className="logo" src="/images/logo.svg"/>
            <p className="two">Hi, my name is</p>
            <h1 className="three">Trisha Sia.</h1>
            <hr className="four" size="1" width="80%" color="#dddddd"></hr>
            <p className="desc">I'm a second-year student studying Business and Computer Science at the University of British Columbia. </p>
            <div className="container">
                <a href="#about">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="70"
                    version="1"
                    viewBox="0 0 768 768"
                    className="arrow"
                >
                <g>
                    <path
                    fill="#38429d"
                    d="M383.977 462.79a30.045 30.045 0 01-21.32-8.84L12.171 103.257C.398 91.477.398 72.37 12.172 60.594c11.773-11.782 30.863-11.782 42.637 0l329.168 329.363L713.148 60.594c11.774-11.782 30.864-11.782 42.637 0 11.774 11.777 11.774 30.883 0 42.664L405.293 453.949c-5.883 5.895-13.598 8.84-21.316 8.84"
                    ></path>
                </g>
                <g>
                    <g id="circle">
                    <path
                        fill="#38429d"
                        fillOpacity="1"
                        fillRule="nonzero"
                        d="M384 597.695c-33.555 0-60.758 27.2-60.758 60.758 0 33.555 27.203 60.758 60.758 60.758 33.555 0 60.758-27.203 60.758-60.758 0-33.558-27.203-60.758-60.758-60.758"
                    >
                    </path>
                    </g>
                </g>
                </svg>
                </a>
            </div>
        </div>
    )
}

export default Hero;