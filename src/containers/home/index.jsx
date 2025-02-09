import React from "react";
import "./styles.scss"
import {useNavigate} from "react-router-dom";
import {Animate} from "react-simple-animate";

const Home=()=>{

    const navigate = useNavigate();
    console.log(navigate);

    const handleNavigateToContactMePage=()=>{
        navigate("/contact");
    }

    return(
        <section id={"homePage"} className={"homePage"}>
            <div className="homePage__text-wrapper">
                <h1>
                    Hello, I'm Tyreek
                    <br/>
                    Web Developer
                </h1>
            </div>
            <Animate
            play
            duration={1.5}
            delay={1}
            start={{
                transform:"translateY(550px)"
            }}
            end={{
                transform:"translateX(0px)"
            }}
            >
                <div className="homePage__contact-me">
                   <button onClick={handleNavigateToContactMePage}>Hit Me Up</button>
                </div>
            </Animate>

        </section>
    )
}

export default Home;