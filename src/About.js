import { Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";
import { Link } from "react-router-dom";
function About() {
  const api_key = process.env.REACT_APP_API_KEY;
  const [loading, setLoading] = useState(true);
  const [about, setAbout] = useState(true);

  useEffect(() => {
    async function infoGetterFunc() {
      try {
        setLoading(true);
        let InfoData = await axios.get(`${api_key}/about`);
        setAbout(
          InfoData.data.aboutData.about
            ? InfoData.data.aboutData.about
            : "about"
        );
      } catch (err) {
      } finally {
        setLoading(false);
      }
    }
    infoGetterFunc();
  }, [api_key]);

  return (
    <Col
      md={4}
      xs={12}
      className="d-flex flex-column align-items-start p-0 mb-4"
      style={{ height: "35vh" }}
    >
      <Link name="About"></Link>
      <div className="bg-secondary rounded-5 px-4 py-2 mb-3 my-4 h5 text-dark-blue">
        {loading ? <Loader /> : "About me"}
      </div>
      <div className="w-100 h-100 rounded-4" style={{ overflow: "hidden" }}>
        <div className="bg-dark-blue text-light w-100 h-100 rounded-4 px-4 py-3 h3 scroll-style">
          {loading ? <Loader /> : about}
        </div>
      </div>
    </Col>
  );
}
export default About;
