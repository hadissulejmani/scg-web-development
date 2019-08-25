import React from "react";
import {Row, Col} from 'react-bootstrap';
import location from '../../assets/location.png';
import phone from '../../assets/phone.png';
import email from '../../assets/email.png';
import "./styles.scss";

function ContactSection(props) {
  return (
   <Row style={{marginLeft:"10px", marginRight:"10px", paddingBottom:"30px"}}>
     <Col className="contactElem" md={4}>
      <img src={location} width={80} />
      <h1 className="contactHeader">Address</h1>
      <p>Skopje, Macedonia 1000, MK</p>
     </Col>
     <Col className="contactElem" md={4}>
      <img src={phone} width={80}/>
      <h1 className="contactHeader">Phone</h1>
      <p>+389 70 226 861</p>
     </Col>
     <Col className="contactElem" md={4}>
       <img src={email} width={80} />
       <h1 className="contactHeader">Email</h1>
       <p>info@scg.mk</p>
     </Col>
   </Row>
  );
}

export default ContactSection;
