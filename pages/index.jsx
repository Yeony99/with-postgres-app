// import type { GetServerSidePropsContext } from "next";
import { ProSidebarProvider } from "react-pro-sidebar";
import Layout from "./layout";

import { getServerSession } from "./api/auth/getServerSession";

function RedirectPage() {
  return;
}

export async function getServerSideProps({ req, res }) {
  const session = await getServerSession({ req, res });

  if (!session?.user?.id) {
    return { redirect: { permanent: false, destination: "/auth/login" } };
  }

  return { redirect: { permanent: false, destination: "/home" } };
}

export default RedirectPage;