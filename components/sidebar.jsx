import Link from "next/link";
import styles from "../styles/sidebar.module.css";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";

const SideBar = ({ menuItems }) => {

  const { collapseSidebar } = useProSidebar();

  return (
    <Sidebar key={"sidebar"}>
      <Menu key={"menu"}>
        {menuItems.map((menuItem, i) => (
          <div key={i}>
            {menuItem.submenu && (
              <SubMenu key={i + "side"} label={menuItem.name}>
                {menuItem.submenu.map((submenuItem, j) => (
                  <MenuItem
                    key={j + "sub"}
                    component={
                      <Link key={j + "sub-link"} href={submenuItem.link} />
                    }
                  >
                    {submenuItem.name}
                  </MenuItem>
                ))}
              </SubMenu>
            )}
            {!menuItem.submenu && (
              <MenuItem
                key={i + "menu"}
                component={<Link key={i + "link"} href={menuItem.link} />}
              >
                {menuItem.name}
              </MenuItem>
            )}
          </div>
        ))}

        <div
          key="collapseButton"
          onClick={() => collapseSidebar()}
          style={{ float: "right" }}
        >
          <button>X</button>
        </div>
      </Menu>
    </Sidebar>
  );
};

export default SideBar;
