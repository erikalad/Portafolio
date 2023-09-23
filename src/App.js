
import './App.css';
import Footer from './Componentes/Footer';
import Navbar from './Componentes/NavBar';
import Presentacion from './Componentes/Presentacion';
import { FloatButton } from 'antd';
import { QuestionCircleOutlined, SyncOutlined } from '@ant-design/icons';
import {BsWhatsapp , BsFileEarmarkPdf} from 'react-icons/bs'
import {GoMail} from 'react-icons/go'
import cv from './asses/Erika Ladner - Frontend Developer.pdf'

function App() {
  return (
    <div className="App">
    <Navbar />
    <Presentacion />
    <FloatButton.Group shape="circle" style={{ right: 24 }}>
      <a href="https://wa.me/qr/Q2YIOQL7UXOPH1" style={{marginBottom:'1rem'}}><FloatButton style={{marginBottom:'1rem'}} icon={<BsWhatsapp />} /></a>
      <a href={cv} download={cv}><FloatButton style={{marginBottom:'1rem'}} icon={<BsFileEarmarkPdf />} /></a>
      <a href="mailto:erikaladner5@gmail.com"><FloatButton style={{marginBottom:'1rem'}} icon={<GoMail />} /></a>
     
      <FloatButton.BackTop visibilityHeight={0} />
    </FloatButton.Group>
   
    
    <Footer />

    </div>
  );
}

export default App;
