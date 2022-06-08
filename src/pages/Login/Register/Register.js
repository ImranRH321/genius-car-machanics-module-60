import React from "react";
import { Button } from "react-bootstrap";
import { Link, Navigate, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import "./Register.css";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();

  let errorElement;
  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }

  const handleNavigateLogin = () => {
    navigate("/login");
  };

  if (user) {
    navigate("/");
  }
  const handleRegister = event => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    // console.log(name, email, password);
    createUserWithEmailAndPassword(email, password);
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
        <input type="checkbox" name="trams" id="trams"></input>
        <label className='ps-2'>Accepts Genius car Trams and condition </label>
        <Button variant="primary d-block w-50 mx-auto mb-2" type="submit">
          Register
        </Button>
      </form>
      {errorElement}

      <p>
        All Ready have account ?
        <Link
          to="/login"
          className="text-primary pe-auto text-decoration-none"
          onClick={handleNavigateLogin}
        >
          Please Login
        </Link>
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
