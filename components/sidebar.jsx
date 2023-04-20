import Link from "next/link";
import styles from "../styles/sidebar.module.css";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const SideBar = ({ menuItems }) => {
  const [isFold, setFold] = useState(false);
  const { collapseSidebar } = useProSidebar();
  const handleClickBtn = () => {
    collapseSidebar();
    setFold((prev) => !prev);
  };

  // 임시
  const userRole = "ADMIN";

  return (
    <Sidebar className="bg-blue-200" key={"sidebar"}>
      <Menu
        menuItemStyles={{
          button: {
            backgroundColor: "",
            "&:hover": {
              backgroundColor: "#bfdbfe",
            },
          },
        }}
        key={"menu"}
      >
        {menuItems.map((menuItem, i) => (
          <div key={i}>
            {menuItem.submenu && menuItem.role === userRole && (
              <SubMenu
                icon={
                  menuItem.icon ? (
                    <FontAwesomeIcon icon={menuItem.icon} />
                  ) : null
                }
                key={i + "side"}
                label={menuItem.name}
              >
                {menuItem.submenu.map((submenuItem, j) => (
                  submenuItem.role === userRole && (
                    <MenuItem
                      icon={<FontAwesomeIcon icon={faMinus} />}
                      key={j + "sub"}
                      component={
                        <Link key={j + "sub-link"} href={submenuItem.link} />
                      }
                    >
                      {submenuItem.name}
                    </MenuItem>
                  )
                ))}
              </SubMenu>
            )}
            {!menuItem.submenu && menuItem.role === userRole && (
              <MenuItem
                icon={
                  menuItem.icon ? (
                    <FontAwesomeIcon icon={menuItem.icon} />
                  ) : null
                }
                key={i + "menu"}
                component={<Link key={i + "link"} href={menuItem.link} />}
              >
                {menuItem.name}
              </MenuItem>
            )}
          </div>
        ))}

        <div
          className="fold-btn bg-blue-50 hover:bg-white"
          key="collapseButton"
          onClick={handleClickBtn}
          style={{ float: "right" }}
        >
          <button>
            <FontAwesomeIcon
              icon={isFold ? faChevronRight : faChevronLeft}
              className="text-blue-500"
            />
          </button>
        </div>
      </Menu>
    </Sidebar>
  );
};

export default SideBar;
