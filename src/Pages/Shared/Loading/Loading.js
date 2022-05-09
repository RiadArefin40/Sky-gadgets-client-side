import React from "react";
import { Container, Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <Container className="mt-5">
        <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </Container>
      
   
  );
};

export default Loading;
