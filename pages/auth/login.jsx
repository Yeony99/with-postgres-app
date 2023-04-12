import { useRouter } from "next/router";
import { useState } from "react";
import AuthLayout from "../../components/auth/layout";
import { useDispatch } from "react-redux";
import {login} from "../../store/auth";
export default function Login() {
  const dispatch = useDispatch();
  // const {isLoading, error} = useSelector((state) => state.auth);

  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async () => {
    if(!user.email || !user.password) {
      alert("필수 항목을 입력해주세요.");
      return;
    }
    
    try {
      await dispatch(login(user.email, user.password));
      router.push('/home');
    } catch (error) {
      alert(error)
    }
  }

  return (
    <AuthLayout>
      <div className="flex min-h-full items-center justify-center items-baseline px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <form
            className="border-solid border border-blue-300 rounded p-5 mt-8 space-y-6 bg-white"
            action="#"
            method="POST"
          >
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Brand Name
            </h2>
            <input type="hidden" name="remember" value="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="ps-2 relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-blue-300 sm:text-sm sm:leading-6"
                  placeholder="이메일"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  value={user.password}
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="ps-2 relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-blue-300 sm:text-sm sm:leading-6"
                  placeholder="비밀번호"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-blue-300 focus:ring-blue-300"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900 tracking-tighter"
                >
                  로그인 상태 유지
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-blue-300 hover:text-indigo-500"
                >
                  비밀번호를 잊으셨나요?
                </a>
              </div>
            </div>

            <div>
              <button
              type="button"
                onClick={handleSubmit}
                className="group relative flex w-full justify-center rounded-md bg-blue-300 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300"
              >
                로그인
              </button>
            </div>
          </form>
          <div className="border-solid border border-blue-300 p-5 rounded bg-white">
            <div className="text-sm">
              계정이 없으신가요? &nbsp;
              <a
                href="#"
                className="font-medium text-blue-600 hover:text-indigo-500"
                onClick={() => router.push("/auth/join")}
              >
                가입하기
              </a>
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}

Login.getLayout = function getLayout(page) {
  return <>{page}</>;
};
