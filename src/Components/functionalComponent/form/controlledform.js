import { LockClosedIcon } from "@heroicons/react/solid";
import { useState } from "react";
import SuccessScreen from "./success";

export default function ControlledForm() {
  const [email, setEmail] = useState("");
  const [UsernameErr, setUsernameErr] = useState(false);
  const [password, setPassword] = useState("");
  const [UserpswdErr, setPswdnameErr] = useState(false);
  const [ServerErr, setServerErr] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
   const [userDetails,setUserDetails]=useState({})
  //function for validation
  const UserNameValidation = (email) => {
    let validUsername = false;
    if (email.length > 15) {
      validUsername = false;
    } else {
      validUsername = true;
    }
    return validUsername;
  };

  const emailHandler = (event) => {
    event.preventDefault();
    const UserEnteredusername = event.target.value;
    //console.log(UserEnteredusername)
    setEmail(UserEnteredusername);

    if (UserNameValidation(UserEnteredusername)) {
      setUsernameErr(false);
    } else {
      setUsernameErr(true);
    }
  };

  //for passwrrd
  const validPswd = (pswd) => {
    let UservalidPswd = false;
    if (pswd.length > 10) {
      UservalidPswd = false;
    } else {
      UservalidPswd = true;
    }
    return UservalidPswd;
  };
  const passwordHandler = (event) => {
    const UserenterdPswd = event.target.value;
    setPassword(UserenterdPswd);
    if (validPswd(UserenterdPswd)) {
      setPswdnameErr(false);
    } else {
      setPswdnameErr(true);
    }
  };
  /////////////////////////////////////////////////////////////////
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!UserpswdErr && !UsernameErr) {
      asynPostCall(email, password);
    } else {
    }
  };
  const asynPostCall = (email, password) => {
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: email,
        password: password,
        expiresInMins: 30, // optional, defaults to 60
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        if (response.message) {
          setServerErr(response.message);
          setUserDetails({ username: email, password, exists: false });
        } else {
          setUserDetails({ username: email, password, exists: true });
          setServerErr(false);
          //user exist in the database
          setIsLogin(true);
        }
      });
  };

  ///////////////////////////////////////////////////////////////
  return (
    <>
      {isLogin ? (
        <SuccessScreen data={userDetails}/>
      ) : (
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div>
              <img
                className="mx-auto h-12 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt="Workflow"
              />
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Sign in to your account
              </h2>
              <p className="mt-2 text-center text-sm text-gray-600">
                Or{" "}
                <a
                  href="./"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  start your 14-day free trial
                </a>
              </p>
              </div>
              <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="text"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={emailHandler}
                    className="appearance-none rounded-none relative block
              w-full px-3 py-2 border border-gray-300
              placeholder-gray-500 text-gray-900 rounded-t-md
              focus:outline-none focus:ring-indigo-500
              focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                  />
                  {UsernameErr && (
                    <span style={{ color: "red" }}>invalid username</span>
                  )}
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={passwordHandler}
                    className="appearance-none rounded-none relative block
              w-full px-3 py-2 border border-gray-300
              placeholder-gray-500 text-gray-900 rounded-b-md
              focus:outline-none focus:ring-indigo-500
              focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                  />
                  {UserpswdErr && (
                    <span style={{ color: "red" }}>invalid password</span>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    // value={rememberme}
                    // onChange={remembermeHandler}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500
              border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a
                    href="."
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>
              {ServerErr && <span style={{ color: "red" }}>{ServerErr}</span>}
              <div>
                {!UsernameErr && !UserpswdErr && (
                  <button
                    type="submit"
                    className="group relative w-full flex justify-center
            py-2 px-4 border border-transparent text-sm font-medium
            rounded-md text-white bg-indigo-600 hover:bg-indigo-700
            focus:outline-none focus:ring-2 focus:ring-offset-2
            focus:ring-indigo-500"
                  >
                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                      <LockClosedIcon
                        className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                        aria-hidden="true"
                      />
                    </span>
                    Sign in
                  </button>
                )}
              </div>
            </form>
            
          </div>
        </div>
      )}
    </>
  );
}
