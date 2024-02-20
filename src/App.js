import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminPage from "./AdminPage";
import MainPage from "./MainPage";
import AdminValidationContext from "./AdminValidationContext";
import { useState } from "react";

function App() {
  const [adminValidation, setAdminValidation] = useState(false);
  const adminValidationContextSetter = {
    adminValidation,
    setAdminValidation,
  };

  return (
    <AdminValidationContext.Provider value={adminValidationContextSetter}>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route
            path={"/adminPage"}
            element={
              adminValidation === true ? <AdminPage /> : <h1>not found</h1>
            }
          ></Route>
        </Routes>
      </Router>
    </AdminValidationContext.Provider>
  );
}
export default App;
