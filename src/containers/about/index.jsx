import React from "react";
import "./styles.scss"
import {BsInfoCircleFill} from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent/index.jsx";
import {Animate} from "react-simple-animate";
import {DiReact, DiPython, DiDjango, DiJavascript, DiLinux} from "react-icons/di";
import {FaDev, FaDatabase, FaGithub} from "react-icons/fa";

const personalDetails = [
    {
        label: "Name",
        value: "Tyreek Kinyanjui",
    },
    {
        label: "Age",
        value: "21",
    },
    {
        label: "Address",
        value: "Kenya",
    },
    {
        label: "Email",
        value: "kinyanjuityreek5@gmail.com",
    },
    {
        label: "Contact No",
        value: "+254 724 313 843",
    },
];

const jobSummary =
    "Seasoned and independent Front End Developer with 2 years of experience in blending the art of design with" +
    " skill of programming to deliver an immersive and engaging user experience through efficient website development, proactive feature optimization, and relentless debugging. Very passionate about aesthetics and UI design. It is imperative that you provide a thorough and professional approach to your resume. As a Front End Developer you will be judged by your ability to use UX and UI concepts and follow design guidelines. It is about expressing your attention to detail and how you can help implement design ideas for your future employer";


const About=()=>{
    return(
           <section className="about" id="about">
               <PageHeaderContent
                   headerText={"About Me"}
                    icon={<BsInfoCircleFill size={40}/>}
               />
               <div className="about__content">
                   <div className="about__content__personalWrapper">
                       <Animate
                           play
                           duration={1.5}
                           delay={1}
                           start={{
                               transform: "translateX(-900px)"
                           }}
                           end={{
                               transform: "translatex(0px)"
                           }}
                       >
                           <h3>Front End Developer</h3>
                           <p>{jobSummary}</p>
                       </Animate>

                       <Animate
                           play
                           duration={1.5}
                           delay={1}
                           start={{
                               transform: "translateX(500px)"
                           }}
                           end={{
                               transform: "translatex(0px)"
                           }}
                       >
                           <h3 className={"personalInformationHeaderText"}>Personal Information</h3>
                           <ul>
                               {
                                   personalDetails.map((item,i)=>(
                                       <li key={i}>
                                           <span className={"title"}>{item.label}</span>
                                           <span className={"value"}>{item.value}</span>
                                       </li>
                                   ))
                               }
                           </ul>
                       </Animate>
                   </div>
                   <div className="about__content__servicesWrapper">
                       <Animate
                           play
                           duration={1.5}
                           delay={1}
                           start={{
                               transform: "translateX(900px)"
                           }}
                           end={{
                               transform: "translatex(0px)"
                           }}
                       >
                            <div className="about__content__serviceWrapper__innerContent">
                            <div>
                                <FaDev size={60} color="var( --yellow-theme-main-color)"/>
                            </div>
                            <div>
                                <DiPython size={60} color={"var(--yellow-theme-main-color)"}/>
                            </div>
                            <div>
                                <FaDatabase size={60} color={"var(--yellow-theme-main-color)"}/>
                            </div>
                            <div>
                                <DiReact size={60} color={"var(--yellow-theme-main-color)"}/>
                            </div>
                            <div>
                                <DiDjango size={60} color={"var(--yellow-theme-main-color)"}/>
                            </div>
                            <div>
                               <DiJavascript size={60} color={"var(--yellow-theme-main-color)"}/>
                            </div>
                            <div>
                                <FaGithub size={60} color={"var(--yellow-theme-main-color)"}/>
                            </div>
                            <div>
                                <DiLinux size={60} color={"var(--yellow-theme-main-color)"}/>
                            </div>


                        </div>
                        </Animate>
                   </div>

               </div>
           </section>
    )
}

export default About;