import axios from "axios";
import { Row, Col } from "react-bootstrap";
import { useEffect, useState, useContext } from "react";
import Section1Context from "./Section1Context";
import Loader from "./Loader";
function ThirdSectionProject() {
  const api_key = process.env.REACT_APP_API_KEY;

  const [projectData, setProjectData] = useState(null);
  const [loading, setLoading] = useState(true);
  let Section1ContextGetter = useContext(Section1Context);
  let { setMenuLoading } = Section1ContextGetter;

  useEffect(() => {
    async function infoGetterFunc() {
      try {
        setLoading(true);
        setMenuLoading(true);
        let InfoData = await axios.get(`${api_key}/thirdSectionProject`);
        setProjectData(InfoData.data.projectData);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
        setMenuLoading(false);
      }
    }
    infoGetterFunc();
  }, [api_key, setMenuLoading]);

  return (
    <Row className="d-flex justify-content-start align-items-center">
      <Col
        sm={12}
        className="rounded-4 px-5 py-1 mb-2 bg-primary text-dark-blue"
      >
        {loading ? <Loader /> : "HTML Projects"}
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
                    className="text-decoration-none text-dark-blue rounded-5 ps-4 pe-5 py-3 h5 slide mx-1 bg-blue-grandiant hover-effect"
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

export default ThirdSectionProject;
