// import { Form,Button } from "react-bootstrap";
// function AddEducation() {
//     return (
//       <Form className="py-5 px-3 ">
//         <h1>Add education</h1>
//         <Form.Label className="h4 pt-2">Education name</Form.Label>
//         <Form.Control type="text" />
//         <Form.Label className="h4 pt-2">About education</Form.Label>
//         <Form.Control type="text" />
//         <Button size="lg" className="mt-2" style={{ float: "inline-end" }}>
//           submit
//         </Button>
//       </Form>
//     );
// }

// export default AddEducation;

import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";

function AddEducation() {
  const api_key = process.env.REACT_APP_API_KEY;

  const [educationName, setEducationName] = useState(null);
  const [educationAbout, setEducationAbout] = useState(null);

  async function dataSubmit() {
    if (!educationName || !educationAbout) {
      return;
    }

    let dataObj = new FormData();
    dataObj.append("educationName", educationName);
    dataObj.append("educationAbout", educationAbout);
    await axios.post(`${api_key}/education`, dataObj);
  }

  return (
    <Form className="py-5 px-3 ">
      <h1>Add education</h1>
      <Form.Label className="h4 pt-2">Education name</Form.Label>
      <Form.Control
        type="text"
        onChange={(e) => {
          setEducationName(e.target.value);
        }}
      />
      <Form.Label className="h4 pt-2">About Education</Form.Label>
      <Form.Control
        type="text"
        onChange={(e) => {
          setEducationAbout(e.target.value);
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

export default AddEducation;
