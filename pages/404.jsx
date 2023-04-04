import { useRouter } from "next/router";

export default function Custom404() {
  const router = useRouter();
  return (
    <div className="flex h-screen items-center justify-center items-baseline px-4 py-12 sm:px-6 lg:px-8 bg-blue-50">
      <div className="flex flex-col items-center">
        <h1 className="text-7xl">404</h1>
        <div className="flex flex-col items-center mt-12 mb-12">
          <div>찾을 수 없는 페이지입니다.</div>
          <div>요청하신 페이지가 사라졌거나, 잘못된 경로로 접근하셨습니다.</div>
        </div>
        <button
          className="border-solid border border-blue-300 p-5 rounded bg-white"
          onClick={() => router.push("/home")}
        >
          <span className="font-medium text-blue-600 hover:text-indigo-500">
            홈으로 돌아가기
          </span>
        </button>
      </div>
    </div>
  );
}

Custom404.getLayout = function gettLayout(page) {
  return <>{page}</>;
};
