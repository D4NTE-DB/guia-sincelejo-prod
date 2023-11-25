import React from 'react';
import { Button, Card, Carousel, Modal } from 'react-bootstrap';

const InitialModal = (props) => {

    console.log(props.data[4])

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Estos son los ganadores del Desgrando Fest
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h3>{}</h3>
                <img src={props.data[4].images} alt="" />
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={props.data[4].images} />
                    <Card.Body>
                        <Card.Title>{props.data[4].name}</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Cerrar</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default InitialModal;