import EditProfile from "./EditProfile";
import AddContact from "./AddContact";
import AddFirstSectionProject from "./AddFirstSectionProject";
import AddSecondSectionProject from "./AddSecondSectionProject";
import AddThirdSectionProject from "./AddThirdSectionProject";
// import AddProjectSection from "./AddProjectSection";
import AddSkill from "./AddSkill";
import AddEducation from "./AddEducation";
import UpdateAndDelete from "./UpdateAndDelete";

function AdminPage() {
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
