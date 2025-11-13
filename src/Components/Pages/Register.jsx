import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Contex/AuthContex";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, setUser, updateUser, signInWithGoogle } =
    use(AuthContext);
  const [errorPassword, setErrorPassword] = useState("");

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
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
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoUrl = e.target.photoUrl.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log({ name, photoUrl, email, password });

    const PasswordFilter = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

    if (!PasswordFilter.test(password)) {
      setErrorPassword(
        "Password Length Must be 6 character & have an Uppercase, Lowercase  letter"
      );

      return;
    } else {
      setErrorPassword("");
    }

    createUser(email, password)
      .then((res) => {
        const user = res.user;
        updateUser({ displayName: name, photoURL: photoUrl })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photoUrl });

            navigate(`${location.state ? location.state : "/"}`);
          })

          .catch((error) => {
            console.log(error);
            setUser(user);
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };
  return (
    <div>
      <div className="hero  min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl text-teal-500 font-bold">
              Register your account
            </h1>
          </div>
          <div className="card bg-fuchsia-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleRegister}>
              <div className="card-body">
                <fieldset className="fieldset">
                  {/* Name */}
                  <label className="label">Name</label>
                  <input
                    name="name"
                    type="Text"
                    className="input"
                    placeholder="Your Name"
                    required
                  />

                  {/* photoUrl*/}
                  <label className="label">Photo Url</label>
                  <input
                    name="photoUrl"
                    type="Text"
                    className="input"
                    placeholder="Your photo Url"
                    required
                  />
                  {/* email */}
                  <label className="label">Email</label>
                  <input
                    name="email"
                    type="email"
                    className="input"
                    placeholder="Email"
                    required
                  />

                  {/* password */}
                  <label className="label">Password</label>
                  <input
                    name="password"
                    type="password"
                    className="input"
                    placeholder="Password"
                    required
                  />

                  {errorPassword && (
                    <p className="text-red-500 text-xs">{errorPassword}</p>
                  )}

                  <button
                    type="submit"
                    className="btn bg-[#622069] text-white border-[#591660] mt-4"
                  >
                    Register
                  </button>
                  <button
                    onClick={handleGoogleSignIn}
                    className="btn mt-4 hover:bg-pink-300 bg-white text-black border-[#e5e5e5]"
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
                    Already Have An Account ?
                    <Link to="/login" className="text-green-500 font-semibold">
                      Please Login
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

export default Register;
