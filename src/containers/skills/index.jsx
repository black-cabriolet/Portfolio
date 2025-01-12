import React from "react";
import "./styles.scss"
import {BsInfoCircleFill} from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent/index.jsx";

const Skills=()=>{
    return(
        <section className="skills" id="skills">
            <PageHeaderContent
                headerText={"Skills"}
                icon={<BsInfoCircleFill size={40}/>}
            />
        </section>
    )
}

export default Skills;