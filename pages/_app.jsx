// import type { AppProps } from "next/app";
import { ProSidebarProvider } from "react-pro-sidebar";
import Layout from "./layout";

import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || getDefaultLayout;
  return (
    getLayout(<Component {...pageProps} />)
  );
}


function  getDefaultLayout(page) {
  return (
    <ProSidebarProvider>
      <Layout>
        {page}
      </Layout>
    </ProSidebarProvider>
  )
}
