import { useState } from "react";
import Link from "next/link";
import styles from "../styles/sidebar.module.css";
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from "react-pro-sidebar";

const SideBar = ({ menuItems }) => {

  const { collapseSidebar } = useProSidebar();

  return (
    <Sidebar>
      <Menu>
        {menuItems.map((menuItem) => (
          <>
            {
                !menuItem.submenu &&
                <MenuItem component={<Link href={menuItem.link} />}>{menuItem.name}</MenuItem>
            }
            {
                menuItem.submenu && (
                    <SubMenu label={menuItem.name}>
                        {
                            menuItem.submenu.map(submenuItem => (
                                <MenuItem component={<Link href={submenuItem.link} />}>{submenuItem.name}</MenuItem>
                            ))
                        }
                    </SubMenu>
                )
            }
          </>
        ))}
        <div onClick={() => collapseSidebar()} style={{float: 'right'}}><button>X</button></div>
      </Menu>
    </Sidebar>
  );
};

export default SideBar;
