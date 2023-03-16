import React from "react";
import './Skills.css'
import { SiFigma ,SiAuth0, SiAntdesign ,SiJavascript, SiCss3, SiHtml5, SiAngular, SiBootstrap,SiTailwindcss, SiSequelize ,SiPostman, SiExpress ,SiReact , SiRedux , SiPostgresql, SiGithub , SiNodedotjs , SiMysql , SiBookstack} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { DiNpm } from "react-icons/di";
function Skills () {
    return(
        <div className="skills" id="skills">
            <p> <SiBookstack />  SKILLS</p>
            <hr />
            <div className="contenedor container-fluid">
            <div className="iconos">
            <h6 className="ico" id="js"><SiJavascript /></h6>
            <h6>JAVA SCRIPT</h6>
            </div>

            <div className="iconos">
            <h6 className="ico" style={{color:"blue"}}><SiCss3 /></h6>
            <h6>CSS</h6>
            </div>

            <div className="iconos">
            <h6 className="ico" style={{color:"#ff6a00"}}><SiHtml5 /></h6>
            <h6>HTML</h6>
            </div>

            <div className="iconos">
            <h6 className="ico" style={{color:"#8900c9"}}><SiBootstrap /></h6>
            <h6>BOOTSTRAP</h6>
            </div>

            <div className="iconos">
            <h6 className="ico" style={{color:"#4964ff"}}><SiTailwindcss /></h6>
            <h6>TAILWINDCSS</h6>
            </div>

            <div className="iconos">
            <h6 className="ico" style={{color:"#0083c9"}}><SiReact /></h6>
            <h6>REACT.JS</h6>
            </div>

            <div className="iconos">
            <h6 className="ico" style={{color:"#760081"}}><SiRedux /></h6>
            <h6>REDUX</h6>
            </div>
            
            <div className="iconos">
            <h6 className="ico"><SiGithub /></h6>
            <h6>GITHUB</h6>
            </div>

            <div className="iconos">
            <h6 className="ico" style={{color:"#008104"}}><SiNodedotjs /></h6>
            <h6>NODE.JS</h6>
            </div>

            <div className="iconos">
            <h6 className="ico" style={{color:"#0c0cb89e"}}><SiPostgresql /></h6>
            <h6>POSTGRESQL</h6>
            </div>

            <div className="iconos">
            <h6 className="ico" style={{color:"#1010c4"}}><SiSequelize /></h6>
            <h6>SEQUELIZE</h6>
            </div>

            <div className="iconos">
            <h6 className="ico" style={{color:"#000000"}}><SiExpress /></h6>
            <h6>EXPRESS</h6>
            </div>

            <div className="iconos">
            <h6 className="ico" style={{color:"#ff9100"}}><SiPostman /></h6>
            <h6>POSTMAN</h6>
            </div>

            <div className="iconos">
            <h6 className="ico" style={{color:"#ff6a00"}}><SiMysql /></h6>
            <h6>SQL</h6>
            </div>

            <div className="iconos">
            <h6 className="ico" style={{color:"#ff0000"}}><DiNpm /></h6>
            <h6>NPM</h6>
            </div>

            <div className="iconos">
            <h6 className="ico" style={{color:"#2600ff"}}><SiAntdesign /></h6>
            <h6>ANT DESIGN</h6>
            </div>

            <div className="iconos">
            <h6 className="ico" style={{color:"#000000"}}><SiAuth0 /></h6>
            <h6>AUTH0</h6>
            </div>

            <div className="iconos">
            <h6 className="ico" style={{color:"#c70000"}}><SiAngular /></h6>
            <h6>ANGULAR.JS</h6>
            </div>



            </div>
            <div className="aprendiendo">
            <p>Y actualmente aprendiendo</p>

            <div className="contenedor">
            <div className="iconos">
            <h6 className="ico" style={{color:"#0083c9"}}><TbBrandReactNative /></h6>
            <h6>REACT NATIVE</h6>
            </div>
        
            <div className="iconos">
            <h6 className="ico" style={{color:"#000305"}}><SiFigma /></h6>
            <h6>FIGMA</h6>
            </div>
           
        
            </div>
        
            </div>
        </div>
    )
}

export default Skills