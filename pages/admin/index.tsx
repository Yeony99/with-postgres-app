import { GetServerSidePropsContext } from "next";
import { getServerSideProps as baseGetServerSideProps } from "./utils";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const baseProps = await baseGetServerSideProps();
  if (baseProps.redirect) {
    return { ...baseProps };
  }

  return {
    props: {
      ...baseProps,
    },
  };
}

export default function Admin(props: any) {
  return (
    <>
      <div>ADMIN 페이지</div>
    </>
  );
}
