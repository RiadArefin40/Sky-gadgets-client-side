
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Login = () => {
    const emailRef=useRef('');
    const passwordRef=useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(
        auth
      );
    const [
        signInWithEmailAndPassword,
        user,loading,
        error
      ] = useSignInWithEmailAndPassword(auth);

   
    const handleSubmit= async event=>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value; 
        await signInWithEmailAndPassword(email, password); 
        const {data} = await axios.post('https://murmuring-garden-73699.herokuapp.com/getTocken',{email});
        localStorage.setItem('accessToken',data.accessToken)
        navigate(from, { replace: true })
    }
    if(user){
       // navigate(from, { replace: true })
   }
    let errorLogin;
    if(error){
      
        errorLogin=<div>
          <p className="text-danger text-center">Error: {error?.message}</p>
      </div>
      toast(error?.message);
      
      
  }
  const resetPassword= async()=>{
    const email = emailRef.current.value;
    if(email){
        await sendPasswordResetEmail(email);
        toast('Email sent for reset password');
    }
    else{
        toast('please enter your email adress')
    }
   
}
   if(loading){
    return <Loading></Loading>
   }
    
    return (
        <div className="container w-50">
      <h2 className="my-5 text-center">Please Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
        </Form.Group>
       
        <div>
        
          <Button className="btn button w-25 d-block mx-auto" variant="dark" type="submit">
            Login
          </Button>
        </div>
      </Form>
      <p className="text-center py-3">New to Sky-Gadgets? <Link className="text-decoration-none" to='/register'> Please Sign Up</Link></p>
      <p className="text-center" >Forget password? <button  onClick={resetPassword} variant="link" className="btn  btn-link text-decoration-none">Reset-Password</button> </p>
      {errorLogin}
      <SocialLogin ></SocialLogin>
      <ToastContainer />
      </div>
    );
};

export default Login;