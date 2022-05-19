import React, { useEffect, useState } from "react";
import auth from "../../firebase.init";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import Loading from "../Shared/Loading";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useToken from "../../hook/useToken";

const Login = () => {
  const [signInWithGoogle, gUser, gloading, gerror] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const [email, setEmail] = useState("");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };

  const [token] = useToken(user || gUser);

  let errorMessage;
  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, from, navigate]);
  if (loading || gloading) {
    return <Loading />;
  }
  if (error || gerror) {
    errorMessage = (
      <p className="text-red-500">
        <span>{error?.message || gerror?.message}</span>
      </p>
    );
  }

  return (
    <div className="flex h-screen justify-center items-center ">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body ">
          <h2 className="text-center text-4xl font-bold">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                autoComplete="off"
                type="text"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: "true",
                    message: "Email is Required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide valid Email",
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                autoComplete="off"
                type="password"
                placeholder="Your pass"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: "true",
                    message: "Password is Required",
                  },

                  minLength: {
                    value: 8,
                    message: "Minimum eight characters",
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            <div className="my-2">
              <button
                onClick={async () => {
                  await sendPasswordResetEmail(email);
                  alert("Sent email");
                }}
              >
                Reset password
              </button>
            </div>
            {errorMessage}
            <input
              className="btn w-full max-w-xs text-white "
              type="submit"
              value="Login"
            />
          </form>
          <p className="text-center text-sm">
            New to Doctors Portal?
            <Link to="/signup" className="text-secondary w-19">
              {" "}
              Create a New Account
            </Link>
          </p>
          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline"
          >
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
