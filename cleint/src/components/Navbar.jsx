import React from "react";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="m-1">
      <div
        onClick={() => {
          navigate("/", { replace: true });
        }}
      >
        Home
      </div>
      <div
        onClick={() => {
          navigate("/login", { replace: true });
        }}
      >
        Login
      </div>
      <div
        onClick={() => {
          navigate("/signUp", { replace: true });
        }}
      >
        SignUp
      </div>
    </div>
  );
};
