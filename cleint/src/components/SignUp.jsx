import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const SignUp = () => {
  const [inp1, setInpu1] = useState("");
  const [inp2, setInpu2] = useState("");
  const [inp3, setInpu3] = useState("");

  const { isAuth, handleAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleControll = () => {
    const payload = {
      name: inp1,
      email: inp2,
      password: inp3,
    };
    console.log(payload);
    axios
      .post("http://localhost:5000/register",payload)
      .then((e) => {
        console.log(e);
        handleAuth(true);
        navigate("/login", { replace: true });
      })
      .catch((error) => {
        console.log(error);
        handleAuth(false);
      });
  };

  return (
    <div className="jn-1">
      <h2>SignUp</h2>
      <input
        type="text"
        name=""
        id=""
        onChange={(e) => setInpu1(e.target.value)}
        placeholder="Enter Your name"
      />
      <input
        type="text"
        name=""
        id=""
        onChange={(e) => setInpu2(e.target.value)}
        placeholder="Enter Your Email"
      />
      <input
        type="text"
        name=""
        id=""
        onChange={(e) => setInpu3(e.target.value)}
        placeholder="Enter Your Password"
      />
      <button onClick={handleControll}>SignUp</button>
    </div>
  );
};
