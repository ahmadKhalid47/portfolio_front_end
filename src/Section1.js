import Menu from "./Menu";
import Projects from "./Projects";

function Section1() {
  return (
    <>
      <div className="py-4 h-100 px-0 responsive-flex bg-wheat">
        <Menu />
        <Projects />
      </div>
    </>
  );
}
export default Section1;
