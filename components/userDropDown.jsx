import { useDetectClickOutside } from "react-detect-click-outside";

const UserDropDown = ({ closeToggle }) => {
    const ref = useDetectClickOutside({ onTriggered: closeToggle, disableTouch: true,});
    return (
      <div className="dropdown" ref={ref}>
        <ul>
            <li>마이 페이지</li>
            <li>로그아웃</li>
        </ul>
      </div>
    );
  };

export default UserDropDown;