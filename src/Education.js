import axios from "axios";
import { Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import { Link } from "react-router-dom";
function Education() {
  const api_key = process.env.REACT_APP_API_KEY;
  const [educationData, setEducationData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [educationNum, setEducationNum] = useState();

  useEffect(() => {
    async function infoGetterFunc() {
      try {
        setLoading(true);
        let InfoData = await axios.get(`${api_key}/education`);
        setEducationData(InfoData.data.educationData);
        setEducationNum(InfoData.data.educationData.length - 1);
      } catch (err) {
      } finally {
        setLoading(false);
      }
    }
    infoGetterFunc();
  }, [api_key]);

  return (
    <Col
      md={7}
      xs={12}
      className="d-flex flex-column align-items-start px-3 pt-4 pb-0 rounded-4 mb-4 bg-dark-blue text-light"
      style={{ height: "35vh" }}
    >
      <Link name="Education"></Link>
      <div className="bg-secondary rounded-5 px-4 py-2 h5 mb-3 text-dark-blue">
        {loading ? <Loader /> : "Education"}
      </div>
      <div className="w-100 d-flex align-items-start">
        {educationData
          ? educationData.map((item, key) => (
              <div
                key={key}
                className="pointer gradiant-panel px-4 rounded-4 py-1 text-dark-blue"
                style={{
                  zIndex: educationNum === key ? "100" : "0",
                  width: "50%",
                  translate: `${key * -30}%`,
                }}
                onClick={() => {
                  setEducationNum(key);
                }}
              >
                {loading ? <Loader /> : item.educationName}
              </div>
            ))
          : null}
      </div>
      <div className="bg-succes w-100 px-4 h3 py-2 rounded-4 scroll-style">
        {loading ? (
          <Loader />
        ) : educationData ? (
          educationData.length > 0 ? (
            `${educationData[educationNum].educationAbout}`
          ) : null
        ) : null}
      </div>
    </Col>
  );
}
export default Education;
