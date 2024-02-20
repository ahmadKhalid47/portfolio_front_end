import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";

function EditProfile() {
  const api_key = process.env.REACT_APP_API_KEY;

  const [image, setImage] = useState(null);
  const [name, setName] = useState(null);
  const [about, setAbout] = useState(null);

  async function dataSubmit() {
    if (!image || !name || !about) {
      return;
    }
    let fomrData = new FormData();
    fomrData.append("image", image);
    fomrData.append("name", name);
    fomrData.append("about", about);
    await axios.post(`${api_key}/profile`, fomrData);
  }

  return (
    <Form className="py-5 px-3">
      <h1>Profile</h1>
      <Form.Label className="h4 pt-2">Profile pic</Form.Label>
      <Form.Control type="file" onChange={(e) => setImage(e.target.files[0])} />
      <Form.Label className="h4 pt-2">Name</Form.Label>
      <Form.Control type="text" onChange={(e) => setName(e.target.value)} />
      <Form.Label className="h4 pt-2">About you</Form.Label>
      <Form.Control type="text" onChange={(e) => setAbout(e.target.value)} />
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
