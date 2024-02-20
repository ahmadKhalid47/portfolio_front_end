import axios from "axios";
import { Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useContext } from "react";
import Section1Context from "./Section1Context";
import Loader from "./Loader";

function FirstSectionProject() {
  const api_key = process.env.REACT_APP_API_KEY;
  const [projectData, setProjectData] = useState(null);
  const [loading, setLoading] = useState(null);
  const Section1ContextGetter = useContext(Section1Context);
  const { setMenuLoading } = Section1ContextGetter;
  const temporaryArray = [0, 1, 2];

  useEffect(() => {
    async function infoGetterFunc() {
      try {
        setMenuLoading(true);
        setLoading(true);
        let InfoData = await axios.get(`${api_key}/firstSectionProject`);
        setProjectData(InfoData.data.projectData);
      } catch (err) {
        console.log(err);
      } finally {
        setMenuLoading(false);
        setLoading(false);
      }
    }
    infoGetterFunc();
  }, [api_key, setMenuLoading]);

  return (
    <Row className="pb-2">
      {loading
        ? temporaryArray.map((key) => (
            <Col
              sm={4}
              xs={12}
              key={key}
              className="p-2"
              style={{ height: "calc(10vw + 25vh)" }}
            >
              <div className="w-100 h-100 bg-blue-grandiant rounded-4">
                <Loader />
              </div>
            </Col>
          ))
        : projectData
        ? projectData.map((item, key) => (
            <Col
              sm={4}
              xs={12}
              key={key}
              className="p-2"
              style={{ height: "calc(10vw + 25vh)" }}
            >
              <div className="w-100 h-100 bg-blue-grandiant rounded-4 overflow-hidden hover-effect">
                <a
                  href={item.link}
                  target="blank"
                  className="text-decoration-none"
                >
                  <div className="h-60 card-image-div">
                    <img src={item.image} alt="" className="card-image" />
                  </div>
                  <div className="h-40 text-dark-blue card-detail">
                    <h5 style={{ lineHeight: "100%" }} className="card-title">
                      {item.title}
                    </h5>
                    <p
                      style={{ lineHeight: "110%" }}
                      className="card-forntsize"
                    >
                      {item.about}
                    </p>
                  </div>
                </a>
              </div>
            </Col>
          ))
        : null}
    </Row>
  );
}

export default FirstSectionProject;
