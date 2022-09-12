import React from 'react'
import './Footer.css'
import { BsFillArrowUpCircleFill } from "react-icons/bs";

function Footer(){
    return(
        <div className='footer'>
            <div className='datos'>
                <p>Erika Ladner ©2022</p>
                <a href="#Inicio" className='icono' ><BsFillArrowUpCircleFill /></a>
            </div>
        </div>
    )
}

export default Footer