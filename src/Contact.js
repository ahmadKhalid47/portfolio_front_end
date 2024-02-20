import axios from "axios";
import { Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import { Link } from "react-router-dom";
import ContactContext from "./ContactContext";
import NoLinkContact from "./NoLinkContact";

function Contacts() {
  const [contactData, setContactData] = useState(null);
  const api_key = process.env.REACT_APP_API_KEY;
  const [loading, setLoading] = useState(true);

  let contactContextSetter = {
    contactData,
  };

  useEffect(() => {
    async function infoGetterFunc() {
      try {
        setLoading(true);
        let InfoData = await axios.get(`${api_key}/contact`);
        setContactData(InfoData.data.contactData);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    infoGetterFunc();
  }, [api_key]);

  return (
    <ContactContext.Provider value={contactContextSetter}>
      <Col
        md={3}
        xs={11}
        className="bg-dange d-flex flex-column justify-content-start align-items-start pb-4"
      >
        <Link name="Contact"></Link>
        <Row className="d-flex justify-content-start align-items-start">
          <Col
            md={10}
            xs={6}
            className="bg-primary text-dark-blue rounded-5 px-5 py-2 mb-1 h5"
          >
            {loading ? <Loader /> : "contact"}
          </Col>
          {loading ? (
            <>
              <Col
                md={12}
                xs={8}
                className="bg-warning rounded-5 px-5 py-3 my-1"
              >
                <Loader />
              </Col>
              <Col
                md={12}
                xs={8}
                className="bg-warning rounded-5 px-5 py-3 my-1"
              >
                <Loader />
              </Col>
              <Col
                md={12}
                xs={8}
                className="bg-warning rounded-5 px-5 py-3 my-1"
              >
                <Loader />
              </Col>
            </>
          ) : (
            <>
              {contactData
                ? contactData.map((item, key) => (
                    <>
                      {item.contactLink.includes("http") ? (
                        <a
                          target="blank"
                          md={12}
                          xs={8}
                          className="text-decoration-none text-dark-blue bg-warning rounded-5 px-5 py-3 my-1 h4 hover-effect"
                          href={item.contactLink}
                          key={key}
                        >
                          {item.contactName}
                        </a>
                      ) : (
                        <NoLinkContact index={key} item={item} />
                      )}
                    </>
                  ))
                : null}
            </>
          )}
        </Row>
      </Col>
    </ContactContext.Provider>
  );
}

export default Contacts;
