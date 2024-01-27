import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import "boxicons";
import ModalFeature from "./ModalFeature";

const InstagramCards = ({ data, pag, view }) => {
  const [show, setShow] = useState(false);
  // console.log(data)

  const startIndex = (pag - 1) * view;
  const endIndex = startIndex + view;

  return (
    <div>
      <ModalFeature key={pag} show={false} setShow={setShow} data={data} />
      {data?.business_discovery?.media?.data?.slice(11, 15)?.map?.((item) => (
        <div key={item?.id} className="card-item">
          <Card style={{ width: "10rem", height: "21rem" }}>
            <Card.Img
              style={{
                width: "160px",
                height: "160px",
              }}
              variant="top"
              src={item?.media_url}
            />
            <Card.Body>
              <Card.Title
                style={{
                  width: "128px",
                  height: "50px",
                  position: "relative",
                  top: "10px",
                  overflow: "auto",
                }}
              >
                {item.caption}
              </Card.Title>
              {/* <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text> */}
              <Card
                style={{
                  width: "8rem",
                  position: "relative",
                  height: "95px",
                  top: "5px",
                }}
              >
                <Card.Body
                  style={{
                    margin: "auto",
                    position: "relative",
                    right: "10px",
                    top: "-8px",
                  }}
                >
                  <Card.Title
                    style={{
                      position: "relative",
                      top: "15px",
                      fontSize: "14px",
                      right: "-11px",
                    }}
                  >
                    Contáctanos
                  </Card.Title>
                  <div
                    style={{
                      position: "relative",
                      right: "14px",
                      top: "-40px",
                    }}
                  >
                    <Card.Link href={item.contact?.instgram}>
                      <img
                        style={{
                          width: "35px",
                          position: "absolute",
                          top: "52px",
                        }}
                        src="images/instagram.png"
                        alt=""
                      />
                    </Card.Link>
                    <Card.Link href={item.contact?.phoneNum}>
                      <img
                        style={{
                          width: "35px",
                          position: "absolute",
                          right: "-23px",
                          top: "52px",
                        }}
                        src="images/whatsapp.png"
                        alt=""
                      />
                    </Card.Link>
                  </div>
                </Card.Body>
              </Card>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default InstagramCards;
