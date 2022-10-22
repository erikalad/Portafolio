import React from "react";
import './Proyectos.css'
import { MdOutlineWbIncandescent , MdOutlineOpenInNew } from "react-icons/md";
import { BsLinkedin , BsGithub } from 'react-icons/bs';
import img1 from './../asses/calculadora.jpg'
import img2 from './../asses/andar.jpg'

function Proyectos () {
    return(

              <div className="proyectos" id="proyectos">

<div className="proyectos">
<p> <MdOutlineWbIncandescent />  PROYECTOS</p>
                    <hr />
                    <body>
	<div class="wrap">
		<div class="tarjeta-wrap">
			<div class="tarjeta" id="cal">
				<div class="adelante card1">
                <img src={img1} className="img-fluid rounded-start" alt="Calculadora" id="calculadora"/>
                </div>
				<div class="atras">
                <a href="https://calculadora-git-main-erikalad.vercel.app/" style={{color:"white"}}><h5>CALCULADORA</h5></a>
                <div className="botones">
                <a href="https://github.com/erikalad/Calculadora" className="boton"><BsGithub /></a>
                <a href="https://calculadora-git-main-erikalad.vercel.app/" className="boton"><MdOutlineOpenInNew /></a>
                
                </div>
				</div>
			</div>
		</div>
		<div class="tarjeta-wrap">
			<div class="tarjeta">
				<div class="adelante card2">
                <img src={img2} className="img-fluid rounded-start" alt="..." id="andar"/>
                </div>
				<div class="atras">
                <a href="https://andarproductions.com.ar/" style={{color:"white"}}><h5>ANDAR PRODUCTIONS</h5></a>
                <div className="botones">
                <a href="https://github.com/erikalad/andarproductions" className="boton"><BsGithub /></a>
                <a href="https://andarproductions.com.ar/" className="boton"><MdOutlineOpenInNew /></a>
                
                </div>
					<p></p>
				</div>
			</div>
		</div>
	</div>
</body>

{/* <body>
	<div class="wrap">
		<div class="tarjeta-wrap">
			<div class="tarjeta">
				<div class="adelante card1">
                </div>
				<div class="atras">
                <h5 className="card-title">PABLO ALBORNOZ</h5>
					<p>Músico violinista compositor y productor electrónico. </p>
				</div>
			</div>
		</div>
		<div class="tarjeta-wrap">
			<div class="tarjeta">
				<div class="adelante card2">
                <img src="https://blogs.iadb.org/conocimiento-abierto/wp-content/uploads/sites/10/2019/12/banner-lecciones-aprendidas-proyectos-desarrollo-2019.jpg" className="img-fluid rounded-start" alt="..."/>
                </div>
				<div class="atras">
                <h5 className="card-title">MALVI-DJ VINILOS</h5>
					<p>DJ de alto nivel desde una corta edad.</p>
				</div>
			</div>
		</div>
		
	</div>
</body> */}
</div> 
              </div>

    )
}

export default Proyectos 