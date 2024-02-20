import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Form, Image } from "react-bootstrap";

function UpdateAndDelete() {
  const api_key = process.env.REACT_APP_API_KEY;
  const [updatOrDeleteData, setUpdatOrDeleteData] = useState("");
  const [section, setSection] = useState("");
  const [part, setPart] = useState("");
  const [specificPart, setSpecificPart] = useState("");
  const [updateData, setUpdateData] = useState("");
  const [updateDataShower, setUpdateDataShower] = useState(false);
  const personal = ["profilePic", "name", "about"];
  const contact = ["contactName", "contactLink"];
  const firstProjectSection = ["image", "about", "title"];
  const secondProjectSection = ["title", "link"];
  const thirdProjectSection = ["title", "link"];
  const skill = ["skillName"];
  const education = ["educationName", "educationAbout"];

  useEffect(() => {
    async function getUserInfo() {
      if (section && part) {
        const updatOrDeleteDataGetter = await axios.get(
          `${api_key}/updatOrDelete/${section}/${part}`
        );
        setUpdatOrDeleteData(updatOrDeleteDataGetter.data.dataObj);
      }
    }
    getUserInfo();
  }, [api_key, section, part]);

  async function deleteSubmit() {
    if (section && part && specificPart) {
      await axios.delete(
        `${api_key}/delete/${section}/${part}/${specificPart}`
      );
    }
    setUpdateDataShower(false);
  }

  async function updateSubmit() {
    if (section && part && specificPart) {
      let data = new FormData();
      data.append("updateData", updateData);
      await axios.post(
        `${api_key}/update/${section}/${part}/${specificPart}`,
        data
      );
    }
  }

  return (
    <Form className="py-5 px-3 mb-5">
      <h1>Update or Delete</h1>
      <Form.Label className="h4 pt-2">Select Section</Form.Label>
      <Form.Select onChange={(e) => setSection(e.target.value)}>
        <option>select section</option>
        <option>personal</option>
        <option>contact</option>
        <option>firstProjectSection</option>
        <option>secondProjectSection</option>
        <option>thirdProjectSection</option>
        <option>skill</option>
        <option>education</option>
      </Form.Select>
      <Form.Label className="h4 pt-2">Select Part</Form.Label>

      <Form.Select onChange={(e) => setPart(e.target.value)}>
        <option>select part</option>
        {section === "personal"
          ? personal.map((item, key) => <option key={key}>{item}</option>)
          : section === "contact"
          ? contact.map((item, key) => <option key={key}>{item}</option>)
          : section === "firstProjectSection"
          ? firstProjectSection.map((item, key) => (
              <option key={key}>{item}</option>
            ))
          : section === "secondProjectSection"
          ? secondProjectSection.map((item, key) => (
              <option key={key}>{item}</option>
            ))
          : section === "thirdProjectSection"
          ? thirdProjectSection.map((item, key) => (
              <option key={key}>{item}</option>
            ))
          : section === "skill"
          ? skill.map((item, key) => <option key={key}>{item}</option>)
          : section === "education"
          ? education.map((item, key) => <option key={key}>{item}</option>)
          : null}
      </Form.Select>
      {updatOrDeleteData ? (
        <>
          <Form.Label className="h4 pt-2 d-flex flex-column">
            select which Part
          </Form.Label>
          {part === "profilePic" || part === "image" ? (
            updatOrDeleteData.map((item, key) => (
              <Image
                key={key}
                src={item}
                alt=""
                width={"50px"}
                style={{ cursor: "pointer" }}
                onClick={() => setSpecificPart(item.replaceAll("/", "*"))}
              />
            ))
          ) : (
            <Form.Select onChange={(e) => setSpecificPart(e.target.value)}>
              <option>part name</option>
              {updatOrDeleteData.map((item, key) => (
                <option key={key}>{item}</option>
              ))}
            </Form.Select>
          )}
        </>
      ) : null}
      {updateDataShower ? (
        <>
          <Form.Label>data</Form.Label>
          <Form.Control
            type={part === "profilePic" || part === "image" ? "file" : "text"}
            onChange={(e) =>
              setUpdateData(
                part === "profilePic" || part === "image"
                  ? e.target.files[0]
                  : e.target.value
              )
            }
          />
        </>
      ) : null}

      <Button className="float-end bg-danger" onClick={deleteSubmit}>
        delete
      </Button>
      {!updateDataShower ? (
        <Button
          className="float-end bg-success"
          onClick={() => {
            setUpdateDataShower(true);
          }}
        >
          update
        </Button>
      ) : (
        <Button className="float-end" onClick={updateSubmit}>
          submit
        </Button>
      )}
    </Form>
  );
}
export default UpdateAndDelete;
