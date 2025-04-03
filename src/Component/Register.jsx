import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { signInWithPopup, updateProfile } from "firebase/auth";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  const { createUser, auth, googleProvider, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    const name = form.get("name");
    const photo = form.get("photo");

    const regexPass = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!regexPass.test(password)) {
      return toast.error(
        "Must contain uppercase, and lowercase letters, and be at least 6 characters long"
      );
    }

    createUser(email, password)
      .then((res) => {
        const profile = {
          displayName: name,
          photoURL: photo,
        };
        updateProfile(auth.currentUser, profile)
          .then(() => {
            toast.success("Your Account is Registered ");
            navigate("/");
          })
          .catch((err) => toast.error(err));
      })
      .catch((err) => {
        toast.error("Error during registration:", err);
      });
  };

  const handleSignInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => setUser(res.user))
      .catch((err) => toast.error(err));
  };
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex justify-center items-center min-h-screen lg:w-1/4 mx-auto p-6">
        <div className="text-center lg:text-left"></div>
        <div className="card bg-base-100 w-full shadow-2xl">
          <form onSubmit={handleSubmit} className="card-body  ">
            <h1 className="text-5xl font-bold text-center text-[#333333]">
              Register now!
            </h1>
            <fieldset className="fieldset px-5 py-7 relative">
              <label className="fieldset-label">Username</label>
              <input
                type="text"
                name="name"
                className="input w-full"
                placeholder="Username"
              />
              <label className="fieldset-label">Photo URL</label>
              <input
                type="text"
                name="photo"
                className="input w-full"
                placeholder="Photo URL"
              />
              <label className="fieldset-label">Email</label>
              <input
                type="email"
                name="email"
                className="input w-full"
                placeholder="Email"
              />
              <label className="fieldset-label">Password</label>
              <input
                // type={showPassword ? "text" : "password"}
                className="input w-full"
                placeholder="Password"
                name="password"
              />

              <button className="btn bg-[#F4C724] text-[#333333] mt-4">
                Register
              </button>
            </fieldset>
          </form>

          <button
            onClick={handleSignInWithGoogle}
            className="btn bg-white text-black border-2 shadow-md w-2/3 mx-auto -mt-8 mb-5"
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
          <p className="text-center font-medium pb-3 text-[#333333]">
            Already Have An Account?{" "}
            <Link className="font-bold text-[#20B2AA]" to={"/login"}>
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
