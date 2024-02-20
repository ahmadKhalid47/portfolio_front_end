import Loader from "./Loader";
import Section1Context from "./Section1Context";
import { useContext } from "react";

function Menu() {
  let Section1ContextGetter = useContext(Section1Context);
  let { menuLoading } = Section1ContextGetter;

  return (
    <div className="d-flex flex-column justify-content-end align-items-start menu-container-width">
      <a
        href="/frontend/public/cv1.pdf"
        download
        className="text-decoration-none rounded-5 bg-dark-blue text-primary pt-2 pb-3 px-4 h4 w-100 hover-effect"
      >
        {menuLoading ? <Loader width={"100%"} /> : "Resume"}
      </a>
      <a
        href="#Project"
        className="text-decoration-none rounded-5 bg-dark-blue text-primary pt-2 pb-3 px-4 h4 w-100 hover-effect"
      >
        {menuLoading ? <Loader width={"100%"} /> : "Projects"}
      </a>
      <a
        href="#Skills"
        className="text-decoration-none rounded-5 bg-dark-blue text-primary pt-2 pb-3 px-4 h4 w-100 hover-effect"
      >
        {menuLoading ? <Loader width={"100%"} /> : "Skills"}
      </a>
      <a
        href="#Contact"
        className="text-decoration-none rounded-5 bg-dark-blue text-primary pt-2 pb-3 px-4 h4 w-100 hover-effect"
      >
        {menuLoading ? <Loader width={"100%"} /> : "Contact"}
      </a>
      <a
        href="#About"
        className="text-decoration-none rounded-5 bg-dark-blue text-primary pt-2 pb-3 px-4 h4 w-100 hover-effect"
      >
        {menuLoading ? <Loader width={"100%"} /> : "About"}
      </a>
      <a
        href="#Education"
        className="text-decoration-none rounded-5 bg-dark-blue text-primary pt-2 pb-3 px-4 h4 w-100 hover-effect"
      >
        {menuLoading ? <Loader width={"100%"} /> : "Education"}
      </a>
    </div>
  );
}

export default Menu;
