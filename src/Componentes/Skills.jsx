import React, { useEffect, useRef } from "react";
import './Skills.css'
import { SiTypescript , SiGraphql ,SiMercadopago, SiPython ,SiPaypal, SiNextdotjs, SiFigma ,SiAuth0, SiAntdesign ,SiJavascript, SiCss3, SiHtml5, SiAngular, SiBootstrap,SiTailwindcss, SiSequelize ,SiPostman, SiExpress ,SiReact , SiRedux , SiPostgresql, SiGithub , SiNodedotjs , SiMysql , SiBookstack} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { DiNpm } from "react-icons/di";
function Skills () {
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
              elementRef.current.classList.add("skill");
            } else {
              elementRef.current.classList.remove("skill");
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
    return(
        <div className="skills" id="skills">
            <p> <SiBookstack />  SKILLS</p>
            <hr />
            <div className="contenedor container-fluid">
            <div className="iconos skill" ref={elementRefs[0]}>
            <h6 className="ico" id="js"><SiJavascript /></h6>
            <h6>JAVASCRIPT</h6>
            </div>

            <div className="iconos skill" ref={elementRefs[1]}>
            <h6 className="ico" style={{color:"#00007b"}}><SiTypescript /></h6>
            <h6>TYPESCRIPT</h6>
            </div>

            <div className="iconos skill"ref={elementRefs[2]}>
            <h6 className="ico" style={{color:"blue"}}><SiCss3 /></h6>
            <h6>CSS</h6>
            </div>

            <div className="iconos skill" ref={elementRefs[3]}>
            <h6 className="ico" style={{color:"#ff6a00"}}><SiHtml5 /></h6>
            <h6>HTML</h6>
            </div>

           
            <div className="iconos skill" ref={elementRefs[4]}>
            <h6 className="ico" style={{color:"#c70000"}}><SiAngular /></h6>
            <h6>ANGULAR.JS</h6>
            </div>


            <div className="iconos skill" ref={elementRefs[5]}>
            <h6 className="ico" style={{color:"#0083c9"}}><SiReact /></h6>
            <h6>REACT.JS</h6>
            </div>

            <div className="iconos skill" ref={elementRefs[6]}>
            <h6 className="ico" style={{color:"#760081"}}><SiRedux /></h6>
            <h6>REDUX</h6>
            </div>

            <div className="iconos skill" ref={elementRefs[7]}>
            <h6 className="ico" style={{color:"black"}}><SiNextdotjs /></h6>
            <h6>NEXT.JS</h6>
            </div>
            
            <div className="iconos skill" ref={elementRefs[8]}>
            <h6 className="ico"><SiGithub /></h6>
            <h6>GITHUB</h6>
            </div>

            <div className="iconos skill" ref={elementRefs[9]}>
            <h6 className="ico" style={{color:"#008104"}}><SiNodedotjs /></h6>
            <h6>NODE.JS</h6>
            </div>

            <div className="iconos skill" ref={elementRefs[10]}>
            <h6 className="ico" style={{color:"#ff2a9c"}}><SiGraphql /></h6>
            <h6>GRAPHQL</h6>
            </div>

            <div className="iconos skill" ref={elementRefs[11]}>
            <h6 className="ico" style={{color:"#0c0cb89e"}}><SiPostgresql /></h6>
            <h6>POSTGRESQL</h6>
            </div>

            <div className="iconos skill" ref={elementRefs[12]}>
            <h6 className="ico" style={{color:"#1010c4"}}><SiSequelize /></h6>
            <h6>SEQUELIZE</h6>
            </div>

            <div className="iconos skill" ref={elementRefs[13]}>
            <h6 className="ico" style={{color:"#000000"}}><SiExpress /></h6>
            <h6>EXPRESS</h6>
            </div>

            <div className="iconos skill" ref={elementRefs[14]}>
            <h6 className="ico" style={{color:"#ff9100"}}><SiPostman /></h6>
            <h6>POSTMAN</h6>
            </div>

            <div className="iconos skill" ref={elementRefs[15]}>
            <h6 className="ico" style={{color:"#ff6a00"}}><SiMysql /></h6>
            <h6>SQL</h6>
            </div>

            <div className="iconos skill" ref={elementRefs[16]}>
            <h6 className="ico" style={{color:"#ff0000"}}><DiNpm /></h6>
            <h6>NPM</h6>
            </div>

            <div className="iconos skill" ref={elementRefs[17]}>
            <h6 className="ico" style={{color:"#2600ff"}}><SiAntdesign /></h6>
            <h6>ANT DESIGN</h6>
            </div>

            <div className="iconos skill" ref={elementRefs[18]}>
            <h6 className="ico" style={{color:"#8900c9"}}><SiBootstrap /></h6>
            <h6>BOOTSTRAP</h6>
            </div>

            <div className="iconos skill" ref={elementRefs[19]}>
            <h6 className="ico" style={{color:"#4964ff"}}><SiTailwindcss /></h6>
            <h6>TAILWINDCSS</h6>
            </div>

            <div className="iconos skill" ref={elementRefs[20]}>
            <h6 className="ico" style={{color:"#000000"}}><SiAuth0 /></h6>
            <h6>AUTH0</h6>
            </div>

            <div className="iconos skill" ref={elementRefs[21]}>
            <h6 className="ico" style={{color:"#000305"}}><SiFigma /></h6>
            <h6>FIGMA</h6>
            </div>

          {/*   <div className="iconos skill">
            <h6 className="ico" style={{color:"#c0392b"}}><SiMercadopago/></h6>
            <h6>MERCADOPAGO</h6>
            </div> */}

            <div className="iconos skill" ref={elementRefs[22]}>
            <h6 className="ico" style={{color:"#3b7bbf"}}><SiPaypal /></h6>
            <h6>PAYPAL</h6>
            </div>

          
            </div>
            <div className="aprendiendo">
            <p>Y actualmente aprendiendo</p>

            <div className="contenedor">
            <div className="iconos skill" ref={elementRefs[23]}>
            <h6 className="ico" style={{color:"#0083c9"}}><TbBrandReactNative /></h6>
            <h6>REACT NATIVE</h6>
            </div>
        
            <div className="iconos skill" ref={elementRefs[24]}>
            <h6 className="ico" style={{color:"#e1ff00"}}><SiPython /></h6>
            <h6>PYTHON</h6>
            </div>
           
        
            </div>
        
            </div>
        </div>
    )
}

export default Skills