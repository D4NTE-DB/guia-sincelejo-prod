import React from 'react';
import { Modal, Button, Card } from 'react-bootstrap';

const ModalRandom = (props) => {

  const randomIndex = Math.floor(Math.random() * Object.keys(props.data).length);


  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Food Guía Sincelejo
        </Modal.Title>
        
      </Modal.Header>
      <p style={{ padding: '0 30px' }}>El recomendado aleatorío del día en la categoría de {props.data[20]?.name ? 'todas' : props.data[randomIndex].category.toLowerCase()} es: </p>

      <Modal.Body style={{ textAlign: "center", padding: '0', marginBottom: '15px' }}>
        <h4>{props.data[randomIndex].name}</h4>
        <Card.Img style={{
          width: '160px',
          height: '160px'
        }}
          variant="top"
          src={props.data[randomIndex].images} />
        <Card style={{
          width: '8rem',
          position: 'relative',
          height: '95px',
          top: '5px'
        }}>
          <Card.Body style={{
            margin: 'auto', position: 'relative',
            right: '10px',
            top: '-8px'
          }}>

            <Card.Title style={{ position: 'relative', top: '15px', fontSize: '14px', right: '-11px' }}>Contáctanos</Card.Title>
            <div style={{ position: 'relative', right: '14px', top: '-40px' }}>
              <Card.Link href={props.data[randomIndex].contact?.instgram}>
                <img style={{ width: '35px', position: 'absolute', top: '52px' }} src='images/instagram.png' alt="" />
              </Card.Link>
              <Card.Link href={props.data[randomIndex].contact?.phoneNum}>
                <img style={{ width: '35px', position: 'absolute', right: '-23px', top: '52px' }} src='images/whatsapp.png' alt="" />

              </Card.Link>
            </div>
          </Card.Body>
        </Card>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );

};

export default ModalRandom;