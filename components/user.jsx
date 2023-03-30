import { useEffect, useState } from "react";
import UserDropDown from "./userDropDown";

const User = ({ children }) => {
    const [toggleDropdown, setToggleDropdown] = useState(false);
    const handleToggle = (e) => {
        console.log("handleToggle called");
      e.preventDefault();
      e.stopPropagation();
      setToggleDropdown(prev => !prev);
    };
    const closeToggle = (e) => {
        e.preventDefault();
        console.log('dddd')
      setToggleDropdown(false);
    };

    
  useEffect(() => {
    console.log(toggleDropdown);
  }, [toggleDropdown]);

  return (
    <>
      <button className="user-btn" onClick={handleToggle}>USER</button>
      {toggleDropdown && <UserDropDown closeToggle={closeToggle} />}
    </>
  );
};

export default User;
