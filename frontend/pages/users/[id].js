import React, { useReducer, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { useNavigate} from "react-router-dom";
// import userReducer from '../slices/userSlice';
import { login, userReducer, changeuser } from "../../slices/userSlice";
// import LoginSt from "../styles/Login.module.css";
// import "./Login.css";

const LoginOne = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  // const routeChange  = () => {
  //   let path = `newPath`;
  //   navigate(path);
  // }

  const reducer = useReducer(userReducer);

  const handleSubmit = (e) => {
    e.preventDefault();
    // this.setState({})

    dispatch(
      login({
        name: name,
        email: email,
        password: password,
        loggedIn: true,
      })
    );
    // dispatch(login("name"))
  };
  return (
    <div className="login">
      <form className="login__form" onDispatch={(e) => handleDispatch(e)}>
        <h1>Login Here</h1>
        <input
          type="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="submit__btn"
          onClick={() => handleSubmit(e)}
        >
          {" "}
          Submit{" "}
        </button>
      </form>
    </div>
  );
};

export default LoginOne;
