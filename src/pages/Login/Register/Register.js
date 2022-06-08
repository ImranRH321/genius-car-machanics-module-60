import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate("/login");
  };
  return (
    <div className="form_container">
      <h1>Register...</h1>
      <form>
        <input type="text" name="name" placeholder="Your Name" />
        <input
          type="email"
          name="email"
          id=""
          placeholder="Your Eamil"
          required
        />
        <input
          type="password"
          name="password"
          id=""
          placeholder="Your password"
        />
      </form>
      <p>
        All Ready have account ?
        <Link
          to="/login"
          className="text-danger pe-auto text-decoration-none"
          onClick={navigateLogin}
        >
             Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
