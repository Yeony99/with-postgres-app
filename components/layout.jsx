import SideBar from "./sidebar";
import HeaderBar from "./header";
import { menuItems } from "./menu";
import User from "./user"

export default function Layout({ children }) {
  return (
    <>
      <HeaderBar>
        <div>LOGO</div>
        <div>
            <User />
        </div>
      </HeaderBar>
      <div style={{ display: "flex", height: "100vh" }}>
        <SideBar menuItems={menuItems} />
        <main>{children}</main>
      </div>
    </>
  );
}
