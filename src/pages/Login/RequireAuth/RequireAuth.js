import React from "react";
import { useAuthState ,useSendEmailVerification } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import auth from "../../../firebase.init";
import Loading from "../../../Shared/Loading/Loading";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
 console.log('user', user);
  if (loading) {
    return <Loading></Loading>;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
   
  if(user.providerData[0].providerId==="password" && !user.emailVerified){
    return <div>
      <h2 className="text-danger">Email are not verified</h2>
      <h2 className="text-success">Verify your email address</h2>
      <button
      className="btn btn-primary"
        onClick={async () => {
          await sendEmailVerification();
          toast('Sent email verify');
        }}
      >
      send Email Verification
      </button>
      <ToastContainer />
    </div>
  }

  return children;
};

export default RequireAuth;
