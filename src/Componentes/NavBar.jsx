import React from 'react'
import logo from './../asses/logo.jpg'
import './NavBar.css'

function Navbar () {
    return (
        <div className='nav navbar navbar-expand-lg bg-dark sticky-top bg-ligth fixed-top' id="nav">
            <img src={logo} alt="logo" id="img"/>
            <nav className="navbar bg-dark fixed-top">
                <div className="container-fluid">
                    <img src={logo} alt="logo" id="img" className="navbar-brand"/>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" style={{backgroundColor:'black'}}>
                        <div className="offcanvas-header">
                           <h5 className="offcanvas-title" id="offcanvasNavbarLabel" style={{color: "white"}}>Erika Ladner</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" style={{backgroundColor:'white'}}></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3" style={{marginTop: "7px"}}>
                        <li className="nav-item">
                        <a href="#Inicio" aria-current="page" className='nav-link active' >INICIO</a>
                        </li>
                        <li>
                        <a href="#sobre-mi" aria-current="page" className='nav-link active'>SOBRE MI</a>
                        </li>
                        <li>
                        <a href="#skills" aria-current="page" className='nav-link active' >SKILLS</a>
                        </li>
                        <li>
                        <a href="#proyectos" aria-current="page" className='nav-link active' >PROYECTOS</a>
                        </li>
                        </ul>
                        <button type="button" className="btn btn-light" id="boton1">DESCARGAR CURRÍCULUM</button>
                        <button type="button" className="btn btn-light" id="boton2">CONTACTAME</button>
                     </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar