import React from 'react'
import logo from './../asses/logo.jpg'
import './NavBar.css'

function Navbar () {
    return (
        <div className='nav navbar navbar-expand-lg bg-dark sticky-top bg-ligth fixed-top' id="nav">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" style={{backgroundColor:'white'}}>
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" style={{backgroundColor:'black'}}>
                        <div className="offcanvas-header">
                           <h5 className="offcanvas-title" id="offcanvasNavbarLabel" style={{color: "white"}}>Erika Ladner</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" style={{backgroundColor:'white'}}></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{marginTop: "7px"}}>
                        <li className="nav-item">
                        <a href="#Inicio" aria-current="page" className='nav-link active' >Inicio</a>
                        </li>
                        <li>
                        <a href="#sobre-mi" aria-current="page" className='nav-link active'>Sobre Mi</a>
                        </li>
                        <li>
                        <a href="#skills" aria-current="page" className='nav-link active' >Skills</a>
                        </li>
                        <li>
                        <a href="#proyectos" aria-current="page" className='nav-link active' >Proyectos</a>
                        </li>
                        <li>
                        <a href="#certificados" aria-current="page" className='nav-link active' >Certificados</a>
                        </li>
                        </ul>
                     </div>
                    </div>
                </div>
        </div>
    )
}

export default Navbar