import axios from "axios";
import { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import Loader from "./Loader";
import { Link } from "react-router-dom";

function Intro() {
  const [image, setImage] = useState(null);
  const [name, setName] = useState(null);
  const [loading, setLoading] = useState(true);
  const api_key = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    async function infoGetterFunc() {
      try {
        setLoading(true);
        let InfoData = await axios.get(`${api_key}/profile`);
        setImage(
          InfoData.data.personalData
            ? InfoData.data.personalData.profilePic
            : null
        );
        setName(
          InfoData.data.personalData ? InfoData.data.personalData.name : null
        );
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    infoGetterFunc();
  }, [api_key]);
  return (
    <>
      <Link name="mainPage"></Link>
      <div
        style={{ height: "12vh" }}
        className="d-flex align-items-center justify-content-start bg-dark-blue"
      >
        <div
          style={{ height: "9vh" }}
          className="d-flex align-items-start intro_div"
        >
          <div
            style={{
              width: "calc( 11vw + 10vh)",
              height: "calc(11vw + 10vh)",
              zIndex: 50,
            }}
            className="rounded-circle mx-2"
          >
            {loading ? (
              <Loader width={"inherit"} height={"inherit"} />
            ) : (
              <Image
                src={image}
                alt="profile pic"
                className=" w-100 h-100"
                style={{ borderRadius: "inherit" }}
              />
            )}
          </div>
          <div
            style={{ height: "9vh" }}
            className="rounded-5 d-flex align-items-end pb-2 bg-primary text-dark-blue"
          >
            <h5 className="intro-margin rounded-4">
              {loading ? (
                <Loader width={"20vh"} />
              ) : (
                <>
                  Hi, i am
                  <span className="px-2 h2 name">{name}</span>
                </>
              )}
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default Intro;
