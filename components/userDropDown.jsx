import { useDetectClickOutside } from "react-detect-click-outside";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faArrowRightToBracket,
  faIdBadge,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

const UserDropDown = ({ closeToggle }) => {
  const router = useRouter();

  const ref = useDetectClickOutside({
    onTriggered: closeToggle,
    disableTouch: true,
  });
  return (
    <div className="dropdown" ref={ref}>
      <ul>
        <li>
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <div>
              <FontAwesomeIcon icon={faIdBadge} />
            </div>
            <span style={{ display: "inline-block", marginLeft: "0.75rem" }}>
              마이 페이지
            </span>
          </div>
        </li>
        <li>
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <div>
              <FontAwesomeIcon icon={faArrowRightToBracket || faArrowRightFromBracket} />
            </div>
            <span style={{ display: "inline-block", marginLeft: "0.75rem" }}>
              <button type="button" onClick={() => router.push('/auth/login')}>로그인</button>
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default UserDropDown;
