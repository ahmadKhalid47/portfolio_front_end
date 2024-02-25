import axios from "axios";
import { Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import Loader from "./Loader";
function SecondSectionProject() {
  const api_key = process.env.REACT_APP_API_KEY;

  const [projectData, setProjectData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function infoGetterFunc() {
      try {
        setLoading(true);
        let InfoData = await axios.get(`${api_key}/secondSectionProject`);
        setProjectData(InfoData.data.projectData);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    infoGetterFunc();
  }, [api_key]);

  return (
    <Row className="d-flex justify-content-start align-items-center">
      <Col
        sm={12}
        className="rounded-4 px-5 py-1 mb-2 bg-primary text-dark-blue"
      >
        {loading ? <Loader /> : "Javascript Projects"}
      </Col>
      <Col sm={12} className="slider pt-2 pb-1 px-3 mb-2">
        {loading ? (
          <>
            <Col className="rounded-5 ps-4 pe-5 py-3 h5 slide mx-1 bg-blue-grandiant">
              <Loader />
            </Col>
            <Col className="rounded-5 ps-4 pe-5 py-3 h5 slide mx-1 bg-blue-grandiant">
              <Loader />
            </Col>
            <Col className="rounded-5 ps-4 pe-5 py-3 h5 slide mx-1 bg-blue-grandiant">
              <Loader />
            </Col>
          </>
        ) : (
          <>
            {projectData
              ? projectData.map((item, key) => (
                  <a
                    key={key}
                  href={item.link}
                  target="blank"
                    className="rounded-5 ps-4 pe-5 py-3 h5 slide mx-1 bg-blue-grandiant text-decoration-none text-dark-blue hover-effect"
                  >
                    {item.title}
                  </a>
                ))
              : null}
          </>
        )}
      </Col>
    </Row>
  );
}

export default SecondSectionProject;
