import React from "react";
import './Proyectos.css'
import { MdOutlineWbIncandescent , MdOutlineOpenInNew } from "react-icons/md";
import { SiGithub } from 'react-icons/si';
import { Avatar } from 'antd';
import img1 from './../asses/calculadora.jpg'
import img2 from './../asses/andar.jpg'
import img3 from './../asses/museo.jpg'
import img4 from './../asses/todoapp.png'
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
						<a href="https://github.com/erikalad/Calculadora"><SiGithub  /></a>,
						<a href="https://calculadoramood.vercel.app/"><MdOutlineOpenInNew  /></a>,
						]}
					>
						<Meta
						
						title="Calculadora"
						description={<div><Tag color='#efef03' className="tag">JavaScript</Tag> <Tag color='#0083c9'>React.js</Tag> <Tag color='#760081' >Redux</Tag> <Tag color='blue'>CSS</Tag></div>}
						/>
					</Card>


					<Card
						style={{
						width: 200,
						}}
						cover={<img alt="Andrar Productions" src={img2}/>}
						actions={[
						<a href="https://github.com/erikalad/andarproductions"><SiGithub  /></a>,
						<a href="https://andarproductionsapp.vercel.app/"><MdOutlineOpenInNew  /></a>,
						]}
					>
						<Meta
						
						title="Andrar Productions"
						description={<div><Tag color='#efef03' className="tag">JavaScript</Tag> <Tag color='#0083c9'>React.js</Tag> <Tag color='#760081' >Redux</Tag> <Tag color='blue'>CSS</Tag></div>}
						/>
					</Card>


					<Card
						style={{
						width: 200,
						}}
						cover={<img alt="Museo Patagónico" src={img3}/>}
						actions={[
						<a href="https://github.com/erikalad/Pf_Museo_FrontEnd"><SiGithub  /></a>,
						<a href="https://pf-museo-front-end-pf09henry.vercel.app/"><MdOutlineOpenInNew  /></a>,
						]}
					>
						<Meta
						
						title="Museo Patagónico"
						description={<div><Tag color='#efef03' className="tag">JavaScript</Tag> <Tag color='#0083c9'>React.js</Tag> <Tag color='#760081' >Redux</Tag> <Tag color='blue'>CSS</Tag></div>}
						/>
					</Card>

					<Card
						style={{
						width: 200,
						}}
						cover={<img alt="Lista de tareas" src={img4}/>}
						actions={[
						<a href="https://github.com/erikalad/todo-app"><SiGithub  /></a>,
						<a href="https://todoapp-angular.vercel.app/"><MdOutlineOpenInNew  /></a>,
						]}
					>
						<Meta
						
						title="Lista de tareas"
						description={<div><Tag color='#efef03' className="tag">JavaScript</Tag> <Tag color='#0083c9'>React.js</Tag> <Tag color='#760081' >Redux</Tag> <Tag color='blue'>CSS</Tag></div>}
						/>
					</Card>



					<Card
					class="adelante card1"
						hoverable
						style={{
						width: 240,
						}}
						cover={<img alt="Lista de tareas" src={img4}/>}
					>
						<Meta title="Lista de tareas" description={<div><a href="https://todoapp-angular.vercel.app/"><Tag></Tag></a></div>} id="Lista de tareas"/>
					</Card>

					<Card
					class="adelante card1"
						hoverable
						style={{
						width: 240,
						}}
						cover={<img alt="Diario Intimo" src={img4}/>}
					>
						<Meta title="Diario Intimo" description={<div><a href="https://sofiapp.vercel.app/"><Tag></Tag></a></div>} id="Diario Intimo"/>
					</Card>

					</div>

					</div> 
              </div>

    )
}

export default Proyectos 