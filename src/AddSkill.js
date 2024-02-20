import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";

function AddSkill() {
  const api_key = process.env.REACT_APP_API_KEY;

  const [skillName, setSkillName] = useState(null);

  async function dataSubmit() {
    if (!skillName) {
      return;
    }

    let dataObj = new FormData();
    dataObj.append("skillName", skillName);
    await axios.post(`${api_key}/skill`, dataObj);
  }

  return (
    <Form className="py-5 px-3 ">
      <h1>Add new skill</h1>
      <Form.Label className="h4 pt-2">Skill Name</Form.Label>
      <Form.Control
        type="text"
        onChange={(e) => {
          setSkillName(e.target.value);
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

export default AddSkill;
