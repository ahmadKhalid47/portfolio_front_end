import { Container, Row, Col } from "react-bootstrap";
import FirstSectionProject from "./FirstSectionProjects";
import SecondSectionProject from "./SecondSectionProjects";
import ThirdSectionProject from "./ThirdSectionProjects";
import { useContext } from "react";
import Section1Context from "./Section1Context";
import Loader from "./Loader";
import { Link } from "react-router-dom";

function Projects() {
  let Section1ContextGetter = useContext(Section1Context);
  let { menuLoading } = Section1ContextGetter;
  return (
    <Container className="rounded-5 bg-dark-blue px-4 py-3 m-0 project-container-width">
      <Link name="Project"></Link>
      <Row>
        <Col className="py-2 px-5 rounded-5 h5 bg-primary text-dark-blue">
          {menuLoading ? <Loader width={"100%"} /> : "Projects"}
        </Col>
      </Row>
      <FirstSectionProject />
      <SecondSectionProject />
      <ThirdSectionProject />
    </Container>
  );
}

export default Projects;
