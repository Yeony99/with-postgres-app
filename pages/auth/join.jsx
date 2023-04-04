import { useRouter } from "next/router";
import { useState } from "react";
import AuthLayout from "../../components/auth/layout";

export default function Join() {
  const router = useRouter();

  const [user, setUser] = useState({
    email: "",
    password: "",
    name: "",
    phone: "",
  });

  const [pwdConfirm, setPwdConfirm] = useState("");

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
                  className="ps-2 relative block w-full rounded-t-md rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-blue-300 sm:text-sm sm:leading-6"
                  placeholder="아이디/이메일"
                />
              </div>
              <br />
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
                  minLength={8}
                  required
                  className="ps-2 relative block w-full rounded-t-md rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-blue-300 sm:text-sm sm:leading-6"
                  placeholder="비밀번호"
                />
              </div>
              <br />
              <div>
                <label htmlFor="password-confirm" className="sr-only">
                  Password
                </label>
                <input
                  value={pwdConfirm}
                  onChange={(e) => setPwdConfirm(e.target.value)}
                  id="password-confirm"
                  name="password-confirm"
                  type="password"
                  autoComplete="current-password"
                  required
                  className={
                    "ps-2 relative block w-full rounded-t-md rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-blue-300 sm:text-sm sm:leading-6 " +
                    (user.password !== pwdConfirm && pwdConfirm !== ""
                      ? "border-2 border-red-500"
                      : "")
                  }
                  placeholder="비밀번호 확인"
                />
                {
                  user.password !== pwdConfirm && pwdConfirm !== "" && <span className="text-xxs text-rose-500">비밀번호가 일치하지 않습니다.</span> || <br/>
                }
              </div>
              <br />
              <div>
                <label htmlFor="username" className="sr-only">
                  이름
                </label>
                <input
                  value={user.name}
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
                  id="username"
                  name="username"
                  type="text"
                  required
                  className="ps-2 relative block w-full rounded-t-md rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-blue-300 sm:text-sm sm:leading-6"
                  placeholder="이름"
                />
              </div>
              <br />
              <div>
                <label htmlFor="phone" className="sr-only">
                  Phone
                </label>
                <input
                  value={user.phone}
                  onChange={(e) => setUser({ ...user, phone: e.target.value.split('').filter(el => !isNaN(Number(el))).join('') })}
                  id="phone"
                  name="phone"
                  type="text"
                  required
                  className="ps-2 relative block w-full rounded-t-md rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-blue-300 sm:text-sm sm:leading-6"
                  placeholder="연락처"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md bg-blue-300 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300"
              >
                회원 가입
              </button>
            </div>
          </form>
        </div>
      </div>
    </AuthLayout>
  );
}

Join.getLayout = function getLayout(page) {
  return <>{page}</>;
};
