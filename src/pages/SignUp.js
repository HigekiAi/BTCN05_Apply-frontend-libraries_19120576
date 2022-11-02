import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { API_URL } from "../config";

function SignUp(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [submitted, setSubmitted] = useState(false);
  const [usernameExist, setUsernameExist] = useState(false);

  const createNewUser = async (data) => {
    try {
      console.log("post");
      let result = await fetch(API_URL, {
        method: "post",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      result = await result.json();
      if (!result.username) {
        setUsernameExist(true);
      } else {
        setUsernameExist(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const submitSignup = async (data) => {
    setSubmitted(true);
    mutate(data);
  };

  const { isLoading, isError, error, mutate } = useMutation(createNewUser, {
    onSuccess: (res) => {},
    onError: (err) => {
      console.log(err);
    },
  });

  return (
    <div className="register">
      <h1 className="signup-title">Register</h1>
      <form className="signup-form" onSubmit={handleSubmit(submitSignup)}>
        <input
          className="signup-input"
          type="text"
          placeholder="Enter username"
          {...register("username", { required: true })}
        />
        {errors.username && (
          <span className="input-warn">Please enter a username</span>
        )}
        {submitted && usernameExist ? (
          <span className="input-warn">
            Username already exists. Please try another one.
          </span>
        ) : null}
        <input
          className="signup-input"
          type="password"
          placeholder="Enter password"
          {...register("password", { required: true })}
        />
        {errors.password && (
          <span className="input-warn">Please enter a password</span>
        )}
        {submitted && !usernameExist && !errors.username && !errors.password ? (
          <div className="success-message">Sign up success!</div>
        ) : null}
        <button className="signup-button" type="submit">
          Sign Up
        </button>
      </form>
      <div className="">
        {isLoading ? "updating..." : ""}
        {isError ? error.message : ""}
      </div>
    </div>
  );
}

export default SignUp;
