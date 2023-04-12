// import type { AppProps } from "next/app";
import { ProSidebarProvider } from "react-pro-sidebar";
import Layout from "./layout";
import "../styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../store";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || getDefaultLayout;
  return getLayout(
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

function getDefaultLayout(page) {
  return (
    <Provider store={store}>
      <ProSidebarProvider>
        <Layout>{page}</Layout>
      </ProSidebarProvider>
    </Provider>
  );
}
