import React, { useEffect, useRef } from "react";
import "./Proyectos.css";
import { MdOutlineWbIncandescent, MdOutlineOpenInNew } from "react-icons/md";
import { SiGithub } from "react-icons/si";
import img1 from "./../asses/calculadora.jpg";
import img2 from "./../asses/andar.jpg";
import img3 from "./../asses/museo.jpg";
import img4 from "./../asses/todoapp.png";
import img5 from "./../asses/diario.png";
import img6 from "./../asses/git.png";
import img7 from "./../asses/accion.png";
import img8 from "./../asses/datos.png";
import img9 from "./../asses/twits.png";
import img10 from "./../asses/graficos.png";
import img11 from "./../asses/informes.png";
import img12 from "./../asses/argentina.jpeg";
import img13 from "./../asses/elecciones.png";
import img14 from "./../asses/dcis.jpeg";
import img15 from "./../asses/traductor.jpeg";
import img16 from "./../asses/encuesta.jpeg";
import img17 from "./../asses/arg.jpeg";
import img18 from "./../asses/ranking.jpeg";
import img19 from "./../asses/you.jpeg";
import { Card, Tag } from "antd";
const { Meta } = Card;

function Proyectos() {
  const elementRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const handleScroll = () => {
    elementRefs.forEach((elementRef) => {
      if (elementRef.current) {
        const elementTop = elementRef.current.getBoundingClientRect().top;
        const elementBottom = elementRef.current.getBoundingClientRect().bottom;

        const isElementVisible =
          elementTop < window.innerHeight && elementBottom >= 0;

        if (isElementVisible) {
          elementRef.current.classList.add("carta");
        } else {
          elementRef.current.classList.remove("carta");
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="proyectos" id="proyectos">
      <div>
        <p>
          {" "}
          <MdOutlineWbIncandescent /> PROYECTOS
        </p>
        <hr />
        <div className="proyectos">
        <Card
            ref={elementRefs[0]}
            className="carta"
            style={{
              width: 200,
            }}
            cover={<img alt="Calculadora" src={img1} />}
            actions={[
              <a href="https://github.com/erikalad/Calculadora" target="_blank">
                <SiGithub />
              </a>,
              <a href="https://calculadoramood.vercel.app/" target="_blank">
                <MdOutlineOpenInNew />
              </a>,
            ]}
          >
            <Meta
              title="Calculadora"
              description={
                <div>
                  <Tag className="tag">JavaScript</Tag> <Tag>React.js</Tag>{" "}
                  <Tag>Redux</Tag> <Tag>CSS</Tag>
                </div>
              }
            />
          </Card>

          <Card
          ref={elementRefs[1]}
            className="carta"
            style={{
              width: 200,
            }}
            cover={<img alt="Andrar Productions" src={img2} />}
            actions={[
              <a
                href="https://github.com/erikalad/andarproductions"
                target="_blank"
              >
                <SiGithub />
              </a>,
              <a href="https://andarproductionsapp.vercel.app/" target="_blank">
                <MdOutlineOpenInNew />
              </a>,
            ]}
          >
            <Meta
              title="Andrar Productions"
              description={
                <div>
                  <Tag className="tag">JavaScript</Tag> <Tag>React.js</Tag>{" "}
                  <Tag>Redux</Tag> <Tag className="tag">CSS</Tag>{" "}
                  <Tag>Bootstrap</Tag>
                </div>
              }
            />
          </Card>

          <Card
          ref={elementRefs[2]}
            className="carta"
            style={{
              width: 200,
            }}
            cover={<img alt="Museo Patagónico" src={img3} />}
            actions={[
              <a
                href="https://github.com/erikalad/Pf_Museo_FrontEnd"
                target="_blank"
              >
                <SiGithub />
              </a>,
              <a
                href="https://pf-museo-front-end-pf09henry.vercel.app/"
                target="_blank"
              >
                <MdOutlineOpenInNew />
              </a>,
            ]}
          >
            <Meta
              title="Museo Patagónico"
              description={
                <div>
                  <Tag className="tag">JavaScript</Tag> <Tag>React.js</Tag>{" "}
                  <Tag className="tag">Redux</Tag> <Tag>CSS</Tag>{" "}
                  <Tag className="tag">Bootstrap</Tag>{" "}
                  <Tag className="tag">Ant Design</Tag>{" "}
                  <Tag className="tag">Sweetalert2</Tag>{" "}
                  <Tag className="tag">ApexChart</Tag> <Tag>D3</Tag>{" "}
                  <Tag>Nivo</Tag> <Tag>Sass</Tag>
                </div>
              }
            />
          </Card>

          <Card
          ref={elementRefs[3]}
            className="carta"
            style={{
              width: 200,
            }}
            cover={<img alt="Lista de tareas" src={img4} />}
            actions={[
              <a href="https://github.com/erikalad/todo-app" target="_blank">
                <SiGithub />
              </a>,
              <a href="https://todoapp-angular.vercel.app/" target="_blank">
                <MdOutlineOpenInNew />
              </a>,
            ]}
          >
            <Meta
              title="Lista de tareas"
              description={
                <div>
                  <Tag className="tag">TypeScript</Tag> <Tag>Angular.js</Tag>{" "}
                  <Tag>Bootstrap</Tag> <Tag>CSS</Tag>
                </div>
              }
            />
          </Card>

          <Card
          ref={elementRefs[4]}
            className="carta"
            style={{
              width: 200,
            }}
            cover={<img alt="Diario Intimo" src={img5} />}
            actions={[
              <a href="https://github.com/erikalad/Sofi" target="_blank">
                <SiGithub />
              </a>,
              <a href="https://sofiapp.vercel.app/#" target="_blank">
                <MdOutlineOpenInNew />
              </a>,
            ]}
          >
            <Meta
              title="Diario Intimo"
              description={
                <div>
                  <Tag className="tag">JavaScript</Tag> <Tag>React.js</Tag>{" "}
                  <Tag className="tag">Redux</Tag> <Tag>CSS</Tag>{" "}
                  <Tag>Ant Design</Tag> <Tag>Bootstrap</Tag>{" "}
                </div>
              }
            />
          </Card>

          <Card
          ref={elementRefs[5]}
            className="carta"
            style={{
              width: 200,
            }}
            cover={<img alt="Twitts" src={img9} />}
            actions={[
              <a href="https://github.com/erikalad/twits" target="_blank">
                <SiGithub />
              </a>,
              <a href="https://twits.vercel.app/" target="_blank">
                <MdOutlineOpenInNew />
              </a>,
            ]}
          >
            <Meta
              title="Twitts"
              description={
                <div>
                  <Tag className="tag">JavaScript</Tag> <Tag>React.js</Tag>{" "}
                  <Tag>Ant Design</Tag> <Tag>CSS</Tag>
                </div>
              }
            />
          </Card>

          <Card
          ref={elementRefs[6]}
            className="carta"
            style={{
              width: 200,
            }}
            cover={<img alt="Accion Marplatense" src={img7} />}
            actions={[
              <a href="https://github.com/erikalad/accion" target="_blank">
                <SiGithub />
              </a>,
              <a href="https://accionmarplatence.vercel.app/" target="_blank">
                <MdOutlineOpenInNew />
              </a>,
            ]}
          >
            <Meta
              title="Campaña publicitaria Accion Marplatense"
              description={
                <div>
                  <Tag className="tag">JavaScript</Tag> <Tag>React.js</Tag>{" "}
                  <Tag>Ant Design</Tag> <Tag>CSS</Tag>
                </div>
              }
            />
          </Card>

          {/* <Card
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
					</Card> */}

<Card
ref={elementRefs[7]}
            className="carta"
            style={{
              width: 200,
            }}
            cover={
              <img
                alt="Campaña publicitaria Argentina tiene con que"
                src={img12}
              />
            }
            actions={[
              <a
                href="https://github.com/erikalad/argentinatieneconque"
                target="_blank"
              >
                <SiGithub />
              </a>,
              <a
                href="https://argentinatieneconque.vercel.app/"
                target="_blank"
              >
                <MdOutlineOpenInNew />
              </a>,
            ]}
          >
            <Meta
              title="Campaña publicitaria Argentina tiene con que"
              description={
                <div>
                  <Tag className="tag">JavaScript</Tag> <Tag>React.js</Tag>{" "}
                  <Tag className="tag">AntDesign</Tag>
                  <Tag className="tag">CSS</Tag>{" "}
                </div>
              }
            />
          </Card>

          <Card
          ref={elementRefs[8]}
            className="carta"
            style={{
              width: 200,
            }}
            cover={<img alt="Usuarios Github" src={img6} />}
            actions={[
              <a href="https://github.com/erikalad/usersgit" target="_blank">
                <SiGithub />
              </a>,
              <a href="https://usersgit.vercel.app/" target="_blank">
                <MdOutlineOpenInNew />
              </a>,
            ]}
          >
            <Meta
              title="Usuarios Github"
              description={
                <div>
                  <Tag className="tag">JavaScript</Tag> <Tag>React.js</Tag>{" "}
                  <Tag className="tag">Material UI</Tag> <Tag>CSS</Tag>{" "}
                  <Tag>Ant Design</Tag> <Tag>Bootstrap</Tag>
                </div>
              }
            />
          </Card>

          {/* 
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
					</Card> */}

<Card
ref={elementRefs[9]}
            className="carta"
            style={{
              width: 200,
            }}
            cover={<img alt="Informe editable" src={img11} />}
            actions={[
              <a
                href="https://github.com/erikalad/proyecto-front"
                target="_blank"
              >
                <SiGithub />
              </a>,
              <a
                href="https://appfrontendqsocial.vercel.app/informe"
                target="_blank"
              >
                <MdOutlineOpenInNew />
              </a>,
            ]}
          >
            <Meta
              title="Informe editable"
              description={
                <div>
                  <Tag className="tag">JavaScript</Tag> <Tag>React.js</Tag>{" "}
                  <Tag className="tag">AntDesign</Tag> <Tag>SaSS</Tag>{" "}
                  <Tag className="tag">Nivo</Tag> <Tag>React-pdf</Tag>{" "}
                  <Tag className="tag">ApexChart</Tag> <Tag>Chart.js</Tag>{" "}
                  <Tag className="tag">D3</Tag> <Tag>html2pdf</Tag>{" "}
                  <Tag>React-calendar</Tag>
                </div>
              }
            />
          </Card>

          {/* <Card
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
					</Card> */}

          <Card
          ref={elementRefs[10]}
          className="carta"
            style={{
              width: 200,
            }}
            cover={<img alt="Landing page DCisGlobal" src={img14} />}
            actions={[
              <a href="https://github.com/erikalad/DCisGlobal" target="_blank">
                <SiGithub />
              </a>,
              <a href="https://dcisglobal.vercel.app/" target="_blank">
                <MdOutlineOpenInNew />
              </a>,
            ]}
          >
            <Meta
              title={<div>Landing page<br/>DCisGlobal</div>}
              description={
                <div>
                  <Tag className="tag">JavaScript</Tag> <Tag>React.js</Tag>{" "}
                  <Tag>Redux</Tag> <Tag className="tag">AntDesign</Tag>{" "}
                  <Tag className="tag">Material UI</Tag>
                  <Tag>emotion/react</Tag>
                </div>
              }
            />
          </Card>

          <Card
          ref={elementRefs[11]}
            className="carta"
            style={{
              width: 200,
            }}
            cover={<img alt="Maquetado predictor electoral" src={img15} />}
            actions={[
              <a href="https://github.com/erikalad/ux-pred" target="_blank">
                <SiGithub />
              </a>,
              <a href="https://ux-predictor.vercel.app/" target="_blank">
                <MdOutlineOpenInNew />
              </a>,
            ]}
          >
            <Meta
              title={<div>Maquetado<br/>predictor</div>}
              description={
                <div>
                  <Tag className="tag">JavaScript</Tag> <Tag>React.js</Tag>{" "}
                  <Tag className="tag">AntDesign</Tag>
                </div>
              }
            />
          </Card>

          <Card
          ref={elementRefs[12]}
            className="carta"
            style={{
              width: 200,
            }}
            cover={<img alt="Maquetado encuesta" src={img16} />}
            actions={[
              <a href="https://github.com/erikalad/ui-form" target="_blank">
                <SiGithub />
              </a>,
              <a href="https://ui-encuesta.vercel.app/" target="_blank">
                <MdOutlineOpenInNew />
              </a>,
            ]}
          >
            <Meta
              title={<div>Maquetado<br/>encuesta</div>}
              description={
                <div>
                  <Tag className="tag">JavaScript</Tag> <Tag>React.js</Tag>{" "}
                  <Tag>Redux</Tag> <Tag className="tag">AntDesign</Tag>
                </div>
              }
            />
          </Card>

          <Card
          ref={elementRefs[13]}
            className="carta"
            style={{
              width: 200,
            }}
            cover={<img alt="Maquetado argentina elecciones" src={img17} />}
            actions={[
              <a
                href="https://github.com/erikalad/elecciones_argentina"
                target="_blank"
              >
                <SiGithub />
              </a>,
              <a href="https://eleccionesarg.vercel.app/home" target="_blank">
                <MdOutlineOpenInNew />
              </a>,
            ]}
          >
            <Meta
              title={<div>Maquetado<br/>elecciones</div>}
              description={
                <div>
                  <Tag className="tag">Typescript</Tag> <Tag>Angular</Tag>
                  <Tag className="tag">Angular/Material</Tag>{" "}
                  <Tag className="tag">Apexcharts</Tag>{" "}
                  <Tag className="tag">Bootstrap</Tag> <Tag>Leaflet</Tag>{" "}
                  <Tag>rxjs</Tag>
                </div>
              }
            />
          </Card>

          <Card
          ref={elementRefs[14]}
            className="carta"
            style={{
              width: 200,
            }}
            cover={<img alt="Maquetado Ranking Grovat" src={img18} />}
            actions={[
              <a
                href="https://github.com/erikalad/ranking-grovat"
                target="_blank"
              >
                <SiGithub />
              </a>,
              <a href="https://ranking-grovat.vercel.app/" target="_blank">
                <MdOutlineOpenInNew />
              </a>,
            ]}
          >
            <Meta
              title={<div>Maquetado<br/>Ranking</div>}
              description={
                <div>
                  <Tag className="tag">JavaScript</Tag> <Tag>React.js</Tag>
                  <Tag className="tag">Redux</Tag>{" "}
                  <Tag className="tag">Ant Desing</Tag>
                </div>
              }
            />
          </Card>

          <Card
          ref={elementRefs[15]}
            className="carta"
            style={{
              width: 200,
            }}
            cover={<img alt="Maquetado Interfaz Market" src={img19} />}
            actions={[
              <a href="https://github.com/erikalad/youmarket" target="_blank">
                <SiGithub />
              </a>,
              <a href="https://youmarket.vercel.app/" target="_blank">
                <MdOutlineOpenInNew />
              </a>,
            ]}
          >
            <Meta
              title={<div>Maquetado<br/> Interfaz Market</div>}
              description={
                <div>
                  {" "}
                  (ingresar con el código 239865) <br />
                  <Tag className="tag">JavaScript</Tag> <Tag>React.js</Tag>
                  <Tag className="tag">Redux</Tag>{" "}
                  <Tag className="tag">Ant Desing</Tag> <Tag>xlsx</Tag>
                </div>
              }
            />
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Proyectos;
