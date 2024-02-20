import axios from "axios";
import { Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import { Link } from "react-router-dom";
function Skills() {
  const [skillData, setSkillData] = useState(null);
  const api_key = process.env.REACT_APP_API_KEY;
  const [loading, setLoading] = useState(true);
  const temporaryArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  useEffect(() => {
    async function infoGetterFunc() {
      try {
        setLoading(true);
        let InfoData = await axios.get(`${api_key}/skill`);
        setSkillData(InfoData.data.skillData);
      } catch (err) {
      } finally {
        setLoading(false);
      }
    }
    infoGetterFunc();
  }, [api_key]);

  return (
    <Col md={8} xs={11}>
      <Link name="Skills"></Link>
      <Row className="d-flex justify-content-start align-items-start rounded-4 ps-3 bg-light pb-3">
        <Col sm={12} xs={12} className="p-0 pt-4">
          <Col
            md={3}
            sm={4}
            xs={6}
            className="bg-primary text-dark-blue rounded-5 px-5 py-2 my-1 h5 mb-2"
          >
            {loading ? (
              <div className="rounded-4">
                <Loader />
              </div>
            ) : (
              "skills"
            )}
          </Col>
        </Col>
        {loading ? (
          temporaryArray ? (
            temporaryArray.map((item) => (
              <Col
                xxl={2}
                sm={3}
                xs={7}
                key={item}
                className="me-3 ps-5 pe-6 py-3 rounded-5 h4 bg-wheat"
                style={{ width: "initial" }}
              >
                <Loader />
              </Col>
            ))
          ) : null
        ) : (
          <>
            {skillData
              ? skillData.map((item, key) => (
                  <Col
                    xxl={2}
                    lg={3}
                    sm={4}
                    xs={7}
                    key={key}
                    className="me-3 ps-5 pe-6 py-3 rounded-5 h4 bg-wheat text-dark-blue"
                  >
                    {item.skillName}
                  </Col>
                ))
              : null}
          </>
        )}
      </Row>
    </Col>
  );
}

export default Skills;
