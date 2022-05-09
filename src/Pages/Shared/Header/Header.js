import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";

const Header = () => {
    const[user] = useAuthState(auth);
    const handleSignOut=()=>{
        signOut(auth);
    }
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to='/home'>React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link as={Link} to='/home'>Home</Nav.Link>
            <Nav.Link as={Link} to='/blogs'>Blogs</Nav.Link>
            <Nav.Link as={Link} to='/about'>About</Nav.Link>
             
            </Nav>
            <Nav>
            {
                user&& <Nav.Link as={Link} to='/manageInventory'>Manage Items</Nav.Link>
              }
              
              {
                user&& <Nav.Link as={Link} to='/addInventoryItem'>Add Items</Nav.Link>
              }
               {
                user&& <Nav.Link as={Link} to='/myItems'>My Items</Nav.Link>
              }
              {
                  user?  <Nav.Link onClick={handleSignOut}>
                  Sign Out
                </Nav.Link> :
                 <Nav.Link  as={Link} to="/login">
                 Login
               </Nav.Link>

              }
             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
