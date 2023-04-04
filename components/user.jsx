import { useState } from "react";
import UserDropDown from "./userDropDown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const User = ({ children }) => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const handleToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setToggleDropdown((prev) => !prev);
  };
  const closeToggle = (e) => {
    e.preventDefault();
    setToggleDropdown(false);
  };

  return (
    <>
      <button className="user-btn hover:bg-blue-50" onClick={handleToggle}>
        <FontAwesomeIcon icon={faUser} />&nbsp;
        USER
      </button>
      {toggleDropdown && <UserDropDown closeToggle={closeToggle} />}
    </>
  );
};

export default User;
