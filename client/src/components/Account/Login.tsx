import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/store";
import { signIn } from "../../store/authSlice";
// import { loginRequest, loginSuccess, loginFailure, logout  } from "../../store/authSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const initialState = { email: "", password: "" };
  const [formData, setFormData] = useState(initialState);
  const handleChange = (e: React.ChangeEvent<any>) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    dispatch(signIn(JSON.stringify(formData)));
    // dispatch(loginRequest())
    // setTimeout(() => {
    //     // If login is successful, dispatch loginSuccess action
    //     // Else, dispatch loginFailure action with an error message
    //     if (username === 'example' && password === 'password') {
    //       dispatch(loginSuccess(username));
    //     } else {
    //       dispatch(loginFailure('Invalid username or password.'));
    //     }
    //   }, 2000); // Simulate API delay for login process
    // };
  };
  useEffect(() => {
    console.log(formData);
  }, [formData]);
  return (
    <div className="modalDiv">
      <div className="modal rounded-2xl">
        <div className="grid grid-cols-12 py-4 px-6 modal-header">
          <div className="col-span-1 m-0">
            <button onClick={() => navigate("/")}></button>{" "}
          </div>
        </div>
        <div className="container login-container flex flex-col">
          <h1 className="text-3xl font-bold">Sign in to Twitter</h1>

          <input
            className="modal-input border rounded-md border-gray-700"
            name="email"
            onChange={(e) => handleChange(e)}
            placeholder="email"
          ></input>
          <input
            className="modal-input border rounded-md border-gray-700"
            name="password"
            onChange={(e) => handleChange(e)}
            placeholder="password"
          ></input>

          <span className="text-gray-700 extra-info">
            Don't have an account?{" "}
            <Link to="/signup" className="color-primary">
              Sign up
            </Link>
          </span>
        </div>
        <button
          className="next-btn rounded-full my-7 p-4"
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Login;
