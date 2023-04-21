import { GetServerSidePropsContext } from "next";
import {getServerSideProps as baseGetServerSideProps} from "./utils";

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    const baseProps = await baseGetServerSideProps(context);
    return { props: {...baseProps.props, }}
}

export default function Admin({ userRole }: { userRole: string }) {

  return (
    <>
      <div>ADMIN 페이지</div>
    </>
  );
}
