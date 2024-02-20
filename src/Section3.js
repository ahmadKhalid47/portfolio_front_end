import { Container, Row } from "react-bootstrap";
import About from "./About";
import Education from "./Education";
function Section3() {
    return (
      <div
        style={{
          height: "fit-content",
        }}
        className="d-flex justify-content-around align-items-center"
      >
        <Container
          fluid
          style={{
            width: "100vw",
            height: "fit-content",
          }}
          className="d-flex justify-content-around py-4 bg-wheat"
        >
          <Row
            className="d-flex justify-content-around w-100"
            style={{ height: "fit-content" }}
          >
            <About />
            <Education />
          </Row>
        </Container>
      </div>
    );
}
export default Section3