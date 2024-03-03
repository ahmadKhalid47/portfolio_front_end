import EditProfile from "./EditProfile";
import AddContact from "./AddContact";
import AddFirstSectionProject from "./AddFirstSectionProject";
import AddSecondSectionProject from "./AddSecondSectionProject";
import AddThirdSectionProject from "./AddThirdSectionProject";
import AddSkill from "./AddSkill";
import AddEducation from "./AddEducation";
import UpdateAndDelete from "./UpdateAndDelete";
import AdminValidationContext from "./AdminValidationContext";
import { useContext } from "react";

function AdminPage() {
  const { adminValidation, setAdminValidation } = useContext(
    AdminValidationContext
  );
  
  setAdminValidation(true);
  console.log(adminValidation);

  return (
    <div className="bg-dark-blue pb-5 text-primary">
      <EditProfile />
      <AddContact />
      <AddFirstSectionProject />
      <AddSecondSectionProject />
      <AddThirdSectionProject />
      <AddSkill />
      <AddEducation />
      <UpdateAndDelete />
    </div>
  );
}

export default AdminPage;
