// import { GetServerSidePropsContext } from "next";
import checkPermission from "../../lib/auth/permission";

export const getServerSideProps = () => {
  const userRole = "USER";
  const hasPermission = checkPermission(userRole);

  if (!hasPermission) {
    return { redirect: { permanent: false, destination: "/404" } };
  }
  return {
    props: {
      userRole,
      // ...context
    },
  };
};
