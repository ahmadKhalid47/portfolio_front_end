import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";

function EditProfile() {
  const api_key = process.env.REACT_APP_API_KEY;

  const [contactName, setContactName] = useState(null);
  const [contactLink, setContactLink] = useState(null);

  async function dataSubmit() {
    if (!contactLink || !contactName) {
      return;
    }

    let dataObj = new FormData();
    dataObj.append("contactName", contactName);
    dataObj.append("contactLink", contactLink);
    await axios.post(`${api_key}/contact`, dataObj);
  }

  return (
    <Form className="py-5 px-3">
      <h1>Contact</h1>
      <Form.Label className="h4 pt-2">Contact Name</Form.Label>
      <Form.Control
        type="text"
        onChange={(e) => {
          setContactName(e.target.value);
        }}
      />
      <Form.Label className="h4 pt-2">Contact Link</Form.Label>
      <Form.Control
        type="text"
        onChange={(e) => {
          setContactLink(e.target.value);
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

export default EditProfile;
