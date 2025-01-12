import React from "react";
import "./styles.scss"
import {BsInfoCircleFill} from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent/index.jsx";

const Resume=()=>{
    return(
        <section className="resume" id="resume">
            <PageHeaderContent
                headerText={"Resume"}
                icon={<BsInfoCircleFill size={40}/>}
            />
        </section>
    )
}

export default Resume;