import React from "react";
import "./styles.scss"
import {BsInfoCircleFill} from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent/index.jsx";

const Portfoliio=()=>{
    return(
        <section className="portfolio" id="portfolio">
            <PageHeaderContent
                headerText={"Portfolio"}
                icon={<BsInfoCircleFill size={40}/>}
            />
        </section>
    )
}

export default Portfoliio;