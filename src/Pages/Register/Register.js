
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {

    const navigate = useNavigate();
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const nameRef=useRef("")

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{ sendEmailVerification: true });
  

    const handleRegister = async (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        createUserWithEmailAndPassword(email, password)
      };

      if (user) {
        navigate("/home");
      }
      if(loading){
        return <Loading></Loading>
     }

    return (
        <div className="container w-50">
      <h2 className="my-5 text-center">Please Register</h2>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control ref={nameRef} type="text" placeholder="Enter Your Name" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
       
        <div>
        <Button
            className="btn button w-25 d-block mx-auto"
            variant="dark"
            type="submit"
          >
            Register
          </Button>
        </div>
      </Form>
      <p className="text-center py-3">New to Fitness-Press? <Link className="text-decoration-none" to='/login'> Please Log In</Link></p>
      <SocialLogin></SocialLogin>
    </div>
    );
};

export default Register;