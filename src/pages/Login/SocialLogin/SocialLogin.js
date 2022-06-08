import React from "react";
import google from "../../../images/social/google.png";
import facebook from "../../../images/social/facebook.png";
import githup from "../../../images/social/githup.png";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();

  if (user) {
    console.log(user);
    navigate("/");
  }

  let setErrror;
  if (error) {
    setErrror = (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }

  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <p className="mt-2 px-4">or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>
      {setErrror}
      <button
        onClick={() => signInWithGoogle()}
        style={{ height: "37px" }}
        className="d-flex align-items-center justify-content-center mx-auto btn btn-primary w-50 mb-2"
      >
        <img style={{ heigth: "10px", width: "30px" }} src={google} alt="" />
        <span className="px-2">Google Sign In</span>
      </button>
      <button
        style={{ height: "37px" }}
        className="d-flex align-items-center justify-content-center mx-auto btn btn-primary w-50 mb-2"
      >
        <img style={{ heigth: "10px", width: "30px" }} src={facebook} alt="" />
        <span className="px-2">Facebook Sign In</span>
      </button>
      <button
        style={{ height: "37px" }}
        className="d-flex align-items-center justify-content-center mx-auto btn btn-primary w-50 mb-2"
      >
        <img style={{ heigth: "10px", width: "30px" }} src={githup} alt="" />
        <span className="px-2">Githup Sign In</span>
      </button>
    </div>
  );
};

export default SocialLogin;
