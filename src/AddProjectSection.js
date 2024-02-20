import { Form,Button } from "react-bootstrap";
function AddProjectSection3(params) {
    return (
      <Form className="py-5 px-3">
        <h1>Add new Project Section</h1>
        <Form.Label className="h4 pt-2">Project Section Name</Form.Label>
        <Form.Control type="text" />
        <Form.Label className="h4 pt-2">New project Pic</Form.Label>
        <Form.Control type="file" />
        <Form.Label className="h4 pt-2">New project Name</Form.Label>
        <Form.Control type="text" />
        <Button size="lg" className="mt-2" style={{ float: "inline-end" }}>
          submit
        </Button>
      </Form>
    );
}

export default AddProjectSection3;
