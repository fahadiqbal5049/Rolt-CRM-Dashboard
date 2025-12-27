import React from "react";
import ContactName from "@/components/access-contacts/contact-name-left-section/ContactName";
import Contact from "@/components/access-contacts/contact-right-section/Contact";
import Interaction from "@/components/access-contacts/interaction-middle-section/Interaction";

const AccessContacts: React.FC = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2  xl:grid-cols-[1fr_2fr_1fr] gap-3">
      <ContactName />
      <Interaction />
      <Contact />
    </div>
  );
};

export default AccessContacts;
