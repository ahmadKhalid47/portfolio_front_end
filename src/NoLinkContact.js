import { useState, useContext } from "react";
import ContactContext from "./ContactContext";

function NoLinkContact(p) {
  const [contactShower, setContactShower] = useState(false);
  let { contactData } = useContext(ContactContext);
  let { index } = p;
  return (
    <div
      md={12}
      xs={8}
      className="text-decoration-none text-dark-blue bg-warning rounded-5 px-5 py-3 my-1 hover-effect"
      key={index}
      onClick={() => setContactShower(true)}
      style={{cursor:"pointer"}}
    >
      {!contactShower ? (
        <div className="h4">{contactData[index].contactName}</div>
      ) : (
        <div className="">{contactData[index].contactLink}</div>
      )}
    </div>
  );
}
export default NoLinkContact;
