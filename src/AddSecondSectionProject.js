import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";

function AddSecondSectionProject() {
  const api_key = process.env.REACT_APP_API_KEY;

  const [projectTitle, setProjectTitle] = useState(null);
  const [projectLink, setProjectLink] = useState(null);

  async function dataSubmit() {
    if (!projectTitle || !projectLink) {
      return;
    }

    let dataObj = new FormData();
    dataObj.append("projectTitle", projectTitle);
    dataObj.append("projectLink", projectLink);
    await axios.post(`${api_key}/secondSectionProject`, dataObj);
  }

  return (
    <Form className="py-5 px-3">
      <h1>Add Second section Project</h1>
      <Form.Label className="h4 pt-2">Project title</Form.Label>
      <Form.Control
        type="text"
        onChange={(e) => {
          setProjectTitle(e.target.value);
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

export default AddSecondSectionProject;
