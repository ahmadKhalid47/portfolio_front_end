import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Intro from "./Intro";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Footer from "./Footer";
import Section1Context from "./Section1Context";
import { useState } from "react";
function MainPage() {
  let [menuLoading, setMenuLoading] = useState(true);
  let Section1ContextValue = {
    menuLoading,
    setMenuLoading,
  };

  return (
    <Section1Context.Provider value={Section1ContextValue}>
      <Intro />
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
    </Section1Context.Provider>
  );
}

export default MainPage;
