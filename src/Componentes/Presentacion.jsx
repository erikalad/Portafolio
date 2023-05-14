import React from "react";
import './Presentacion.css'
import { BsLinkedin , BsGithub } from 'react-icons/bs';
import { IoRocketSharp } from 'react-icons/io5';
import SobreMi from "./SobreMi";
import foto from './../asses/Erika.PNG'
import Skills from "./Skills";
import Proyectos from "./Proyectos";
import Certificados from "./Certificados";
import git from './../asses/git.svg'
import video from './../asses/ia.mp4'

function Presentacion () {
    return(
        <div className="cuerpo container container-lg container-md container-sm" id="Inicio">
            <img src={foto} className="foto" alt="Erika Ladner"/>
            <div className="Inicio">
            <p className="intro"><IoRocketSharp />BIENVENIDOS A MI PORTAFOLIO</p>
            <h1 className="titulo">ERIKA LADNER</h1>
            <h4 className="titulo">Front End Developer</h4>
            <div className="botones">
                <a href="https://www.linkedin.com/in/erikaladner/" className="boton"><BsLinkedin /></a>
                <a href="https://github.com/erikalad" className="boton"><BsGithub /></a>
            </div>
            </div>
            <div className="video">
                <video src={video} autoplay muted loop type="video/mp4" controls className="video"></video>
            </div>
            <SobreMi />
            <Skills />
            <img src={git} className="git"/>
            <Proyectos />
          

            <Certificados />
        </div>
    )
}

export default Presentacion 