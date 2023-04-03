import SideBar from "../components/sidebar";
import HeaderBar from "../components/header";
import { menuItems } from "../components/menu";
import User from "../components/user"

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
