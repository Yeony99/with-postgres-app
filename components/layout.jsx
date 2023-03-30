import SideBar from "./sidebar";
import HeaderBar from "./header";
import { menuItems } from "./menu";

export default function Layout({ children }) {
  return (
    <>
    <HeaderBar></HeaderBar>
      <div style={{ display: "flex", height: "100vh" }}>
        <SideBar menuItems={menuItems} />
        <main>{children}</main>
      </div>
    </>
  );
}
