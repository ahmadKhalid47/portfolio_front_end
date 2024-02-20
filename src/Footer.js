import Loader from "./Loader";
import Section1Context from "./Section1Context";
import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { Button } from "react-bootstrap";

function Footer() {
  const adminPassword = process.env.REACT_APP_ADMIN_PASSWORD;
  const [password_card_shower, setPassword_card_shower] = useState(false);
  const [password, setPassword] = useState(null);
  const Section1ContextGetter = useContext(Section1Context);
  const { menuLoading } = Section1ContextGetter;
  const [goToAdminPage, setGoToAdminPage] = useState(false);

  if (goToAdminPage) {
    if (password !== adminPassword) {
      alert("wrong password");
      setGoToAdminPage(false);
    } else {
      return <Navigate to="/adminPage" />;
    }
  }

  return (
    <div className="d-flex py-5 bg-light" style={{ paddingLeft: "5vw" }}>
      <a
        href="#mainPage"
        className="text-decoration-none bg-dark-blue rounded-2 py-3 text-primary h4 buttons-design"
        style={{ padding: "5vw" }}
      >
        {menuLoading ? <Loader /> : "Home"}
      </a>
      <button
        className="text-decoration-none text-primary bg-dark-blue rounded-2 h4 py-3 mx-3 buttons-design"
        style={{ padding: "5vw" }}
        onClick={() => {
          setPassword_card_shower(true);
        }}
      >
        {menuLoading ? <Loader /> : "Admin Page"}
      </button>
      {password_card_shower ? (
        <div className="password-card bg-light p-4">
          <h5 className="my-2 w-100">Enter Password</h5>
          <input
            type="text"
            className="rounded-0 mb-2 w-100"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div>
            <Button
              className="rounded-0 m-1 float-end"
              onClick={() => {
                setGoToAdminPage(true);
              }}
            >
              Submit
            </Button>
            <Button
              className="rounded-0 m-1 float-end bg-danger"
              onClick={() => {
                setGoToAdminPage(false);
                setPassword_card_shower(false);
              }}
            >
              Cancel
            </Button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
export default Footer;
