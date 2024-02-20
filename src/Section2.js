import {  Container,Row } from "react-bootstrap";
import Skills from "./Skills";
import Contacts from "./Contact";

function Section2() {
    return (
      <div
        style={{ backgroundColor: "#140757" }}
        className="d-flex justify-content-evenly align-items-center py-4"
      >
        <Container
          fluid
          className="d-flex justify-content-center align-items-center"
        >
          <Row
            style={{}}
            className="d-flex justify-content-around align-items-start"
          >
            <Contacts />
            <Skills />
          </Row>
        </Container>
      </div>
    );
}
export default Section2