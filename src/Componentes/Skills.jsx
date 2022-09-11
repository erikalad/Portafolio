import React from "react";
import './Skills.css'
import { SiJavascript, SiCss3, SiHtml5, SiBootstrap, SiReact , SiRedux , SiGithub , SiNodedotjs , SiMysql , SiBookstack} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
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

            </div>
            <div className="aprendiendo">
            <p>Y actualmente aprendiendo</p>

            <div className="contenedor">
            <div className="iconos">
            <h6 className="ico" style={{color:"#0083c9"}}><TbBrandReactNative /></h6>
            <h6>REACT NATIVE</h6>
            </div>
           
            <div className="iconos">
            <h6 className="ico" style={{color:"#ff6a00"}}><SiMysql /></h6>
            <h6>SQL</h6>
            </div>
            </div>
        
            </div>
        </div>
    )
}

export default Skills