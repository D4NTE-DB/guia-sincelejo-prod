import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import img1 from "../assets/promos/cumpleanos.jpg"
import img2 from "../assets/promos/cf088ecab7fe751ac7f8716bb7f0a119.jpg"
import img3 from "../assets/promos/Ultimos-dias-de-la-promocion-2x1-en-restaurante-la-pampa-OCtubre-2018.jpg"


const ModalFeature = ({ show, setShow }) => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };


  return (

    <Modal
      show={show}
      onHide={() => setShow(false)}
      dialogClassName="modal-90w"
      aria-labelledby="example-custom-modal-styling-title"
      className='modalCustom d-flex align-items-center justify-content-center'

    >
      <Modal.Header closeButton>
        <Modal.Title id="example-custom-modal-styling-title">
          Promociones
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item className='imgCoroucel'>
            <img
              className="d-block w-100"
              src={img1}
              alt="First slide"
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className='imgCoroucel'>
            <img
              className="d-block w-100"
              src={img2}
              alt="Second slide"
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className='imgCoroucel'>
            <img
              className="d-block w-100"
              src={img3}
              alt="Third slide"
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Modal.Body>
    </Modal>

  );
};

export default ModalFeature;