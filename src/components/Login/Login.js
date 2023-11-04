import React, { useState, useEffect, useReducer } from "react";

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return {
      value: action.val,
      isValid: action.val.includes("@"),
    };
  }
  if (action.type === "INPUT_BLUR") {
    return {
      value: state.value,
      isValid: state.value.includes("@"),
    };
  }

  return {
    value: "",
    isValid: false,
  };
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return {
      value: action.val,
      isValid: action.val.trim().length > 6,
    };
  }
  if (action.type === "INPUT_BLUR") {
    return {
      value: state.value,
      isValid: state.value.trim().length > 6,
    };
  }
  return {
    value: "",
    isValid: false,
  };
};

export default function Login(props) {
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: "",
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: "",
  });

  const emailChangeHandler = (e) => {
    dispatchEmail({ type: "USER_INPUT", val: e.target.value });

    setFormIsValid(emailState.isValid && passwordState.isValid);
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const passwordChangeHandler = (e) => {
    dispatchPassword({ type: "USER_INPUT", val: e.target.value });

    setFormIsValid(emailState.isValid && passwordState.isValid);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
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
            emailState.isValid === false ? "border-red-600" : ""
          } inline-block w-full mt-2 p-1 border-2 rounded-xl`}
          type="text"
          id="mail"
          value={emailState.value}
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
            passwordState.isValid === false ? "border-red-600" : ""
          } inline-block w-full mt-2 p-1 border-2 rounded-xl`}
          type="password"
          id="password"
          value={passwordState.value}
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
