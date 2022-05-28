import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const Login = () => {
  const [inp1, setInpu1] = useState("");
  const [inp2, setInpu2] = useState("");
  const { isAuth, handleAuth } = useContext(AuthContext);
  const navigate = useNavigate();


  const handleControll = () => {
    const payload = {
      email: inp1,
      password: inp2,
    };
    axios
      .post("http://localhost:5000/login", payload)
      .then((e) => {
        console.log(e);
        handleAuth(true);
        navigate("/", { replace: true });
      })
      .catch((error) => {
        console.log(error);
        handleAuth(false);
      });
  };

  return (
    <div className="jn-1">
      <h2>Login</h2>
      <input
        type="text"
        name=""
        id=""
        onChange={(e) => setInpu1(e.target.value)}
        placeholder="Enter Your Email"
      />
      <input
        type="text"
        name=""
        id=""
        onChange={(e) => setInpu2(e.target.value)}
        placeholder="Enter Your Password"
      />
      <button onClick={handleControll}>Login</button>
    </div>
  );
};
