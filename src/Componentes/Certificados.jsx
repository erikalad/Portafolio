import React from 'react'
import img1 from './../asses/1.png'
import img2 from './../asses/2.png'
import img3 from './../asses/3.png'
import img4 from './../asses/4.png'
import img5 from './../asses/5.png'
import img6 from './../asses/6.png'
import img7 from './../asses/7.png'
import img8 from './../asses/8.png'
import img9 from './../asses/9.png'
import img10 from './../asses/10.png'
import img11 from './../asses/11.png'
import img12 from './../asses/12.png'
import img13 from './../asses/13.png'
import img14 from './../asses/14.png'
import img15 from './../asses/15.png'
import img16 from './../asses/16.png'
import img17 from './../asses/17.png'
import img18 from './../asses/18.png'
import { GrCertificate } from 'react-icons/gr'
import './Certificados.css'
import Carousel from 'better-react-carousel'

export default function Certificados() {



  return (
    <div className="certificados" id="certificados">
  
  <p> <GrCertificate />CERTIFICADOS</p>
            <hr />	
            <Carousel cols={4} rows={1} gap={10} loop>
            <Carousel.Item>
        <img width="100%" src={img15}  />
        </Carousel.Item>
        <Carousel.Item>
        <img width="100%" src={img12}  />
        </Carousel.Item>
        <Carousel.Item>
        <img width="100%" src={img13}  />
        </Carousel.Item>
        <Carousel.Item>
        <img width="100%" src={img14}  />
        </Carousel.Item>
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
        <Carousel.Item>
        <img width="100%" src={img5}  />
        </Carousel.Item>
        <Carousel.Item>
        <img width="100%" src={img6}  />
        </Carousel.Item>
        <Carousel.Item>
        <img width="100%" src={img7}  />
        </Carousel.Item>
        <Carousel.Item>
        <img width="100%" src={img8}  />
        </Carousel.Item>
        <Carousel.Item>
        <img width="100%" src={img9}  />
        </Carousel.Item>
        <Carousel.Item>
        <img width="100%" src={img10}  />
        </Carousel.Item>
        <Carousel.Item>
        <img width="100%" src={img11}  />
        </Carousel.Item>
        <Carousel.Item>
        <img width="100%" src={img16}  />
        </Carousel.Item>
        <Carousel.Item>
        <img width="100%" src={img17}  />
        </Carousel.Item>
        <Carousel.Item>
        <img width="100%" src={img18}  />
        </Carousel.Item>
       
      


        </Carousel>
    </div>
  )
}
