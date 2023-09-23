import React from "react";
import './Proyectos.css'
import { MdOutlineWbIncandescent , MdOutlineOpenInNew } from "react-icons/md";
import { SiGithub } from 'react-icons/si';
import { Avatar } from 'antd';
import img1 from './../asses/calculadora.jpg'
import img2 from './../asses/andar.jpg'
import img3 from './../asses/museo.jpg'
import img4 from './../asses/todoapp.png'
import img5 from './../asses/diario.png'
import img6 from './../asses/git.png'
import img7 from './../asses/accion.png'
import img8 from './../asses/datos.png'
import img9 from './../asses/twits.png'
import img10 from './../asses/graficos.png'
import img11 from './../asses/informes.png'
import img12 from './../asses/argentina.jpeg'
import img13 from './../asses/elecciones.png'
import { Card, Tag } from 'antd';
const { Meta } = Card;

function Proyectos () {
    return(

              <div className="proyectos" id="proyectos">

				<div >
				<p> <MdOutlineWbIncandescent />  PROYECTOS</p>
                    <hr />	
					<div className="proyectos"> 
					<Card
						style={{
							width: 200,
						}}
						cover={
							<img alt="Calculadora" src={img1}/>
						}
						actions={[
						<a href="https://github.com/erikalad/Calculadora" target="_blank"><SiGithub  /></a>,
						<a href="https://calculadoramood.vercel.app/" target="_blank"><MdOutlineOpenInNew  /></a>,
						]}
					>
						<Meta
						
						title="Calculadora"
						description={<div><Tag  className="tag">JavaScript</Tag> <Tag >React.js</Tag> <Tag  >Redux</Tag> <Tag >CSS</Tag></div>}
						/>
					</Card>


					<Card
						style={{
							width: 200,
						}}
						cover={<img alt="Andrar Productions" src={img2}/>}
						actions={[
						<a href="https://github.com/erikalad/andarproductions" target="_blank"><SiGithub  /></a>,
						<a href="https://andarproductionsapp.vercel.app/" target="_blank"><MdOutlineOpenInNew  /></a>,
						]}
					>
						<Meta
						
						title="Andrar Productions"
						description={<div><Tag  className="tag">JavaScript</Tag> <Tag >React.js</Tag> <Tag  >Redux</Tag> <Tag className="tag">CSS</Tag> <Tag >Bootstrap</Tag></div>}
						/>
					</Card>


					<Card
						style={{
							width: 200,
						}}
						cover={<img alt="Museo Patagónico" src={img3}/>}
						actions={[
						<a href="https://github.com/erikalad/Pf_Museo_FrontEnd" target="_blank"><SiGithub  /></a>,
						<a href="https://pf-museo-front-end-pf09henry.vercel.app/" target="_blank"><MdOutlineOpenInNew  /></a>,
						]}
					>
						<Meta
						
						title="Museo Patagónico"
						description={<div><Tag  className="tag">JavaScript</Tag> <Tag >React.js</Tag> <Tag className="tag" >Redux</Tag> <Tag >CSS</Tag> <Tag className="tag" >Bootstrap</Tag> <Tag className="tag">Ant Design</Tag> <Tag className="tag">Sweetalert2</Tag> <Tag className="tag">ApexChart</Tag> <Tag >D3</Tag> <Tag >Nivo</Tag> <Tag >Sass</Tag></div>}
						/>
					</Card>

					<Card
						style={{
							width: 200,
						}}
						cover={<img alt="Lista de tareas" src={img4}/>}
						actions={[
						<a href="https://github.com/erikalad/todo-app" target="_blank"><SiGithub  /></a>,
						<a href="https://todoapp-angular.vercel.app/" target="_blank"><MdOutlineOpenInNew  /></a>,
						]}
					>
						<Meta
						
						title="Lista de tareas"
						description={<div><Tag  className="tag">TypeScript</Tag> <Tag >Angular.js</Tag> <Tag  >Bootstrap</Tag> <Tag >CSS</Tag></div>}
						/>
					</Card>

					<Card
						style={{
							width: 200,
						}}
						cover={<img alt="Diario Intimo" src={img5}/>}
						actions={[
						<a href="https://github.com/erikalad/Sofi" target="_blank"><SiGithub  /></a>,
						<a href="https://sofiapp.vercel.app/#" target="_blank"><MdOutlineOpenInNew  /></a>,
						]}
					>
						<Meta
						
						title="Diario Intimo"
						description={<div><Tag  className="tag">JavaScript</Tag> <Tag >React.js</Tag> <Tag className="tag" >Redux</Tag> <Tag >CSS</Tag>  <Tag >Ant Design</Tag>  <Tag >Bootstrap</Tag> </div>}
						/>
					</Card>

					<Card
						style={{
							width: 200,
						}}
						cover={<img alt="Twitts" src={img9} />}
						actions={[
						<a href="https://github.com/erikalad/twits" target="_blank"><SiGithub  /></a>,
						<a href="https://twits.vercel.app/" target="_blank"><MdOutlineOpenInNew  /></a>,
						]}
					>
						<Meta
						
						title="Twitts"
						description={<div><Tag  className="tag">JavaScript</Tag> <Tag >React.js</Tag> <Tag  >Ant Design</Tag> <Tag >CSS</Tag></div>}
						/>
					</Card>

					
					<Card
						style={{
							width: 200,
						}}
						cover={<img alt="Accion Marplatense" src={img7} />}
						actions={[
						<a href="https://github.com/erikalad/accion" target="_blank"><SiGithub  /></a>,
						<a href="https://accionmarplatence.vercel.app/" target="_blank"><MdOutlineOpenInNew  /></a>,
						]}
					>
						<Meta
					
						title="Campaña publicitaria Accion Marplatense"
						description={<div><Tag  className="tag">JavaScript</Tag> <Tag >React.js</Tag>  <Tag  >Ant Design</Tag>  <Tag >CSS</Tag></div>}
						/>
					</Card>

					<Card
						style={{
							width: 200,
						}}
						cover={<img alt="Datos Descargables" src={img8} />}
						actions={[
						<a href="https://github.com/erikalad/accion" target="_blank"><SiGithub  /></a>,
						<a href="https://accionmarplatence.vercel.app/" target="_blank"><MdOutlineOpenInNew  /></a>,
						]}
					>
						<Meta
						
						title="Datos Descargables"
						description={<div><Tag  className="tag">JavaScript</Tag> <Tag >React.js</Tag> <Tag  className="tag">Ant Design</Tag> <Tag >CSS</Tag> <Tag >Sweetalert2</Tag> <Tag >xlsx</Tag> </div>}
						/>
					</Card>

					<Card
						style={{
							width: 200,
						
						}}
						cover={<img alt="Campaña publicitaria Argentina tiene con que" src={img12} />}
						actions={[
						<a href="https://github.com/erikalad/argentinatieneconque" target="_blank"><SiGithub  /></a>,
						<a href="https://argentinatieneconque.vercel.app/" target="_blank"><MdOutlineOpenInNew  /></a>,
						]}
					>
						<Meta
						
						title="Campaña publicitaria Argentina tiene con que"
						description={<div><Tag  className="tag">JavaScript</Tag> <Tag >React.js</Tag> <Tag  className="tag">AntDesign</Tag><Tag className="tag">CSS</Tag> </div>}
						/>
					</Card>

					<Card
						style={{
							width: 200,
						
						}}
						cover={<img alt="Usuarios Github" src={img6} />}
						actions={[
						<a href="https://github.com/erikalad/usersgit" target="_blank"><SiGithub  /></a>,
						<a href="https://usersgit.vercel.app/" target="_blank"><MdOutlineOpenInNew  /></a>,
						]}
					>
						<Meta
						
						title="Usuarios Github"
						description={<div><Tag  className="tag">JavaScript</Tag> <Tag >React.js</Tag> <Tag className="tag" >Material UI</Tag> <Tag >CSS</Tag>  <Tag >Ant Design</Tag> <Tag >Bootstrap</Tag></div>}
						/>
					</Card>


					

					<Card
						style={{
							width: 200,
							
						}}
						cover={<img alt="Gráficos" src={img10} />}
						actions={[
						<a href="https://github.com/erikalad/proyecto-front" target="_blank"><SiGithub  /></a>,
						<a href="https://appfrontendqsocial.vercel.app/" target="_blank"><MdOutlineOpenInNew  /></a>,
						]}
					>
						<Meta
						
						title="Gráficos"
						description={<div><Tag  className="tag">JavaScript</Tag> <Tag >React.js</Tag> <Tag  className="tag">AntDesign</Tag> <Tag >SaSS</Tag> <Tag className="tag">Nivo</Tag> <Tag >React-pdf 
						</Tag> <Tag className="tag" >ApexChart</Tag> <Tag >Chart.js</Tag> <Tag className="tag" >D3</Tag> <Tag >html2pdf</Tag> <Tag >React-calendar</Tag></div>}
						/>
					</Card>

					<Card
						style={{
							width: 200,
						
						}}
						cover={<img alt="Informe editable" src={img11} />}
						actions={[
						<a href="https://github.com/erikalad/proyecto-front" target="_blank"><SiGithub  /></a>,
						<a href="https://appfrontendqsocial.vercel.app/informe" target="_blank"><MdOutlineOpenInNew  /></a>,
						]}
					>
						<Meta
						
						title="Informe editable"
						description={<div><Tag  className="tag">JavaScript</Tag> <Tag >React.js</Tag> <Tag  className="tag">AntDesign</Tag> <Tag >SaSS</Tag> <Tag className="tag">Nivo</Tag> <Tag >React-pdf 
						</Tag> <Tag className="tag" >ApexChart</Tag> <Tag >Chart.js</Tag> <Tag className="tag" >D3</Tag> <Tag >html2pdf</Tag> <Tag >React-calendar</Tag></div>}
						/>
					</Card>

					<Card
						style={{
							width: 200,
						
						}}
						cover={<img alt="Elecciones Argentina" src={img13} />}
						actions={[
						<a href="https://github.com/erikalad/elecciones_front" target="_blank"><SiGithub  /></a>,
						<a href="https://eleccionesarg2023.vercel.app/" target="_blank"><MdOutlineOpenInNew  /></a>,
						]}
					>
						<Meta
						
						title="Elecciones Argentina"
						description={<div><Tag  className="tag">JavaScript</Tag> <Tag >React.js</Tag>  <Tag >Redux</Tag> <Tag  className="tag">AntDesign</Tag> <Tag >D3</Tag> <Tag >Leaflet</Tag></div>}
						/>
					</Card>

					



					</div>

					</div> 
              </div>

    )
}

export default Proyectos 