import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminPage from "./AdminPage";
import MainPage from "./MainPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path={"/AdminPage"} element={<AdminPage />}></Route>
      </Routes>
    </Router>
  );
}
export default App;
