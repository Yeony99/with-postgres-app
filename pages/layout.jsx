import SideBar from "../components/sidebar";
import HeaderBar from "../components/header";
import { menuItems } from "../components/menu";
import User from "../components/user";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();
  return (
    <>
      <HeaderBar>
        <a href="/home">
          <div
            className="ms-5"
            style={{
              background:
                "url('https://wfiot2018.iot.ieee.org/files/2016/01/sample-logo@2x.png')",
              height: "35px",
              width: " 100px",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
          ></div>
        </a>

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
