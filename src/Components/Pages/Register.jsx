import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Contex/AuthContex';

const Register = () => {
    const { createUser, setUser, updateUser } = use(AuthContext);
  const [errorPassword, setErrorPassword] = useState("");

  const navigate =useNavigate()

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
            navigate("/");
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
          <div className="card bg-orange-100 w-full max-w-sm shrink-0 shadow-2xl">
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