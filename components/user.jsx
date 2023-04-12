import { useState } from "react";
import UserDropDown from "./userDropDown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const User = () => {
  const {user} = useSelector(state => state.authReducer)
  console.log(user, useSelector(state => state))
  const router = useRouter();
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
      <button className="user-btn hover:bg-blue-50" onClick={user ? (e) => handleToggle(e) : () => router.push('/auth/login')}>
        <FontAwesomeIcon icon={faUser} />&nbsp;
        {!user ? '로그인' : user.name}
      </button>
      {(toggleDropdown && user) && <UserDropDown closeToggle={closeToggle} />}
    </>
  );
};

export default User;
