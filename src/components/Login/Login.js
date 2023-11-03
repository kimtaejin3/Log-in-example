import React, { useState, useEffect } from "react";

export default function Login(props) {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emialIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const emailChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
    setFormIsValid(
      e.target.value.includes("@") && enteredPassword.trim().length > 6
    );
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes("@"));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    setFormIsValid(
      enteredEmail.includes("@") && event.target.value.trim().length > 6
    );
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <form
      className="rounded shadow-lg w-2/4 mx-auto mt-9 p-10"
      onSubmit={submitHandler}
    >
      <div className="mb-4">
        <label className="inline-block w-24mr-4 font-bold" for="mail">
          E-Mail
        </label>
        <input
          className={`${
            emialIsValid === false ? "border-red-600" : ""
          } inline-block w-full mt-2 p-1 border-2 rounded-xl`}
          type="text"
          id="mail"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
      </div>
      <div>
        <label className="inline-block w-24 mr-4 font-bold" for="password">
          Password
        </label>
        <input
          className={`${
            passwordIsValid === false ? "border-red-600" : ""
          } inline-block w-full mt-2 p-1 border-2 rounded-xl`}
          type="password"
          id="password"
          value={enteredPassword}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
      </div>
      <button
        disabled={!formIsValid}
        className="mt-4 bg-red-300 text-white py-1 px-5 rounded-lg border-b-black border-opacity-10 border-b-2"
      >
        LogIn
      </button>
    </form>
  );
}
