import React from "react";
import './SobreMi.css'
import { BsFillSuitHeartFill } from "react-icons/bs";

function SobreMi(){
    return(
        <div className="sobre-mi" id="sobre-mi">
            <p><BsFillSuitHeartFill />  SOBRE MI</p>
            <p className="detalle">Mi pasión es crear sitios <strong>responsivos, intuitivos y dinámicos.</strong>
            <br />
            ¡Te invito a conocer mi trabajo!
            </p>
        </div>
    )
}

export default SobreMi