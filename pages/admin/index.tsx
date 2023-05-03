import { GetServerSidePropsContext } from "next";
import { getServerSideProps as baseGetServerSideProps } from "./utils";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const baseProps = await baseGetServerSideProps("USER"); // @TODO redux에 저장된 user 정보 받아 넣기
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
