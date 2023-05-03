import React from 'react'
import img1 from './../asses/1.png'
import img2 from './../asses/2.png'
import img3 from './../asses/3.png'
import img4 from './../asses/4.png'
import img5 from './../asses/5.png'
import { GrCertificate } from 'react-icons/gr'
import './Certificados.css'
import Carousel from 'better-react-carousel'

export default function Certificados() {



  return (
    <div className="certificados" id="certificados">
  
      <p> <GrCertificate />  CERTIFICADOS</p>
            <hr />	
            <Carousel cols={2} rows={1} gap={10} loop>
        <Carousel.Item>
          <img width="100%" src={img1} />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src={img2}  />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src={img3}  />
        </Carousel.Item>
        <Carousel.Item>
        <img width="100%" src={img4}  />
        </Carousel.Item>
        <img width="100%" src={img5}  />
        </Carousel>
    </div>
  )
}
