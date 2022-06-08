import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
 const location = useLocation()
 
 const from = location.state?.from?.pathname || "/";

  const handleNavigateRegister = () => {
    navigate("/register");
  };

  if (user) {
    console.log(user);
    navigate(from, { replace: true });
  }

  const handleLogin = event => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    // console.log(email, password);
    signInWithEmailAndPassword(email, password);
  };

  return (
    <div className="container mx-auto w-50 border p-5">
      <h2 className="text-primary text-center">Login Page</h2>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <p>
        New user Ginius car
        <Link
          to="/register"
          className="text-danger pe-auto text-decoration-none"
          onClick={handleNavigateRegister}
        >
          Register
        </Link>
      </p>
     
    </div>
  );
};

export default Login;
