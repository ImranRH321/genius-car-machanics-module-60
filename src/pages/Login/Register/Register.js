import React from "react";
import { Button } from "react-bootstrap";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();

  const hanldeLoginNavigate = () => {
    navigate("/login");
  };

  const handleRegister = event => {
    event.preventDefault()
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(name, email, password);
  };

  return (
    <div className="form_container">
      <h1>Register...</h1>
      <form onSubmit={handleRegister}>
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
        <Button variant="primary" type="submit">
          Register
        </Button>
      </form>
      <p>
        All Ready have account ?
        <Link
          to="/login"
          className="text-danger pe-auto text-decoration-none"
          onClick={hanldeLoginNavigate}
        >
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
