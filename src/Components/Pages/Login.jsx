import React, { use, useRef, useState } from "react";
import { AuthContext } from "../Contex/AuthContex";
import { Link, useLocation, useNavigate } from "react-router";
import { PiEyeLight, PiEyeSlash } from "react-icons/pi";
import Swal from "sweetalert2";

const Login = () => {
  const [error, setError] = useState("");
  const { signIn, forgetPassword, signInWithGoogle } = use(AuthContext);
  const [showPassWord, setShowPassWord] = useState(false);
  const emailRef = useRef();

  const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signIn(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        Swal.fire({
          position: "top",
          icon: "success",
          title: "Your Login successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorCode = error.code;
        setError(errorCode);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        // user data sent and create a new user--->
        const newIssue = {
          name: result.user.displayName,
          email: result.user.email,
          image: result.user.photoURL,
        };
        // create new  issue-->>
        fetch("https://green-spot-api-server.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newIssue),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("user data save Mdb done", data);
          });

        Swal.fire({
          position: "top",
          icon: "success",
          title: "Your Login successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPassWord(!showPassWord);
  };

  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    forgetPassword(email)
      .then(() => {
        Swal.fire({
          title: "Please check Your Email!",
          icon: "success",
          draggable: true,
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };
  return (
    <div className="w-11/12 mx-auto flex justify-center items-center">
      <div className="hero  min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl text-fuchsia-500 font-bold">
              Login Your Account
            </h1>
          </div>
          <div className="card bg-green-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLogin}>
              <div className="card-body">
                <fieldset className="fieldset">
                  {/* email */}
                  <label className="label">Email</label>
                  <input
                    type="email"
                    className="input"
                    ref={emailRef}
                    placeholder="Email"
                    name="email"
                    required
                  />
                  {/* password */}
                  <label className="label">Password</label>
                  <div
                    className="flex
                  items-center justify-end relative"
                  >
                    <input
                      type={showPassWord ? "text" : "password"}
                      className="input"
                      placeholder="Password"
                      name="password"
                      required
                    />
                    <button
                      onClick={handleShowPassword}
                      className="btn border-none mr-2 bg-white btn-sm absolute"
                    >
                      {showPassWord ? <PiEyeLight /> : <PiEyeSlash />}
                    </button>
                  </div>
                  <div onClick={handleForgetPassword}>
                    <a className="link link-hover">Forgot password?</a>
                  </div>
                  <div className="mx-auto">
                    {error && <p className="text-red-500 text-xs">{error}</p>}
                  </div>

                  <button
                    type="submit"
                    className="btn bg-[#1A77F2] text-white border-[#005fd8] mt-4"
                  >
                    Login
                  </button>

                  <button
                    onClick={handleGoogleSignIn}
                    className="btn mt-5 hover:bg-amber-200 bg-white text-black border-[#e5e5e5]"
                  >
                    <svg
                      aria-label="Google logo"
                      width="16"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <g>
                        <path d="m0 0H512V512H0" fill="#fff"></path>
                        <path
                          fill="#34a853"
                          d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                        ></path>
                        <path
                          fill="#4285f4"
                          d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                        ></path>
                        <path
                          fill="#fbbc02"
                          d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                        ></path>
                        <path
                          fill="#ea4335"
                          d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                        ></path>
                      </g>
                    </svg>
                    Login with Google
                  </button>
                  <p className="flex justify-center pt-3">
                    Dont't Have An Account ?
                    <Link to="/register" className="text-red-500 font-semibold">
                      Register
                    </Link>
                  </p>
                </fieldset>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
