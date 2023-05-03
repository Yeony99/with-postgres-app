// import { GetServerSidePropsContext } from "next";
import checkPermission from "../../lib/auth/permission";

export const getServerSideProps = (role: string) => {
  const hasPermission = checkPermission(role);

  if (!hasPermission) {
    return { redirect: { permanent: false, destination: "/404" } };
  }
  return {
    props: {
      role,
      // ...context
    },
  };
};
