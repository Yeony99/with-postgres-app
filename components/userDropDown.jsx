import { useDetectClickOutside } from "react-detect-click-outside";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faArrowRightToBracket,
  faIdBadge,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { logout } from "../store/auth";

const UserDropDown = ({ closeToggle }) => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await dispatch(logout());
    } catch (error) {
      alert(error);
    }
  }

  const ref = useDetectClickOutside({
    onTriggered: closeToggle,
    disableTouch: true,
  });
  return (
    <div className="dropdown" ref={ref}>
      <ul>
        <li className="hover:bg-blue-50">
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <div>
              <FontAwesomeIcon icon={faIdBadge} />
            </div>
            <span style={{ display: "inline-block", marginLeft: "0.75rem" }}>
              마이 페이지
            </span>
          </div>
        </li>
        <li className="hover:bg-blue-50">
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <div>
              <FontAwesomeIcon icon={faArrowRightToBracket || faArrowRightFromBracket} />
            </div>
            <span style={{ display: "inline-block", marginLeft: "0.75rem" }}>
              <button type="button" onClick={handleLogout}>로그아웃</button>
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default UserDropDown;
