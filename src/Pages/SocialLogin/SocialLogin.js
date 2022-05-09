import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <p className="mt-2 px-2">or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>

      <div>
        <button
          onClick={handleGoogleSignIn}
          className="btn button btn-dark w-50 d-block mx-auto my-3"
        >
          <img style={{ height: "30px" }} alt="" />
          <span className="px-2">Google Sign-in</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
