import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";

function AddFirstSectionProject() {
  const api_key = process.env.REACT_APP_API_KEY;

  const [projectImage, setProjectImage] = useState(null);
  const [projectTitle, setProjectTitle] = useState(null);
  const [projectAbout, setProjectAbout] = useState(null);
  const [projectLink, setProjectLink] = useState(null);

  async function dataSubmit() {
    if (!projectImage || !projectTitle || !projectAbout || !projectLink) {
      return;
    }

    let dataObj = new FormData();
    dataObj.append("projectImage", projectImage);
    dataObj.append("projectTitle", projectTitle);
    dataObj.append("projectAbout", projectAbout);
    dataObj.append("projectLink", projectLink);
    await axios.post(`${api_key}/firstSectionProject`, dataObj);
  }

  return (
    <Form className="py-5 px-3">
      <h1>Add first section Project</h1>
      <Form.Label className="h4 pt-2">Project pic</Form.Label>
      <Form.Control
        type="file"
        onChange={(e) => {
          setProjectImage(e.target.files[0]);
        }}
      />
      <Form.Label className="h4 pt-2">Project title</Form.Label>
      <Form.Control
        type="text"
        onChange={(e) => {
          setProjectTitle(e.target.value);
        }}
      />
      <Form.Label className="h4 pt-2">Project about</Form.Label>
      <Form.Control
        type="text"
        onChange={(e) => {
          setProjectAbout(e.target.value);
        }}
      />
      <Form.Label className="h4 pt-2">Project Link</Form.Label>
      <Form.Control
        type="text"
        onChange={(e) => {
          setProjectLink(e.target.value);
        }}
      />
      <Button
        size="lg"
        className="mt-2"
        style={{ float: "inline-end" }}
        onClick={dataSubmit}
      >
        submit
      </Button>
    </Form>
  );
}

export default AddFirstSectionProject;
