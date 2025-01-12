import React from "react";
import "./styles.scss"
import PageHeadercontent from "../../components/pageHeaderContent/index.jsx";
import {BsInfoCircleFill} from "react-icons/bs";

const Contact=()=>{
    return(
        <section className="contact" id="contact">
            <PageHeadercontent
                headerText={"Contact Me"}
                icon={<BsInfoCircleFill size={40}/>}
            />
        </section>
    )
}

export default Contact;