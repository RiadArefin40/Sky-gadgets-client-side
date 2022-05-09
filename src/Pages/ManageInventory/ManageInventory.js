import React, { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Loading from "../Shared/Loading/Loading";
import ManageInventoryItem from "./ManageInventoryItem";

const ManageInventory = () => {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    fetch("https://murmuring-garden-73699.herokuapp.com/product")
      .then((res) => res.json())
      .then((data) => setProduct(data));
      console.log(products)
      if(products.length=0){
          <Loading></Loading>
      }
  
  }, [products]);
  return (
    <Container>
      <h1 className="p-5">Manage Inventory</h1>
      
      {
          products.length===0 && <Loading></Loading>
      }
      <Table responsive striped bordered hover variant="dark">
        
        <thead>
    <tr>
      <th>Name</th>
      <th>Quantity</th>
      <th>Price</th>
      <th>Remove</th>
    </tr>
  
        </thead>
        <tbody>

          {products.map((product) => (
            <ManageInventoryItem
              key={product._id}
              product={product}
            ></ManageInventoryItem>
          ))
          
          }
        
        </tbody>
      </Table>
      <ToastContainer></ToastContainer>
      <Link to="/addInventoryItem">
      <Button variant="dark" className="my-5">Add New Item</Button>
 </Link>
    </Container>
  );
};

export default ManageInventory;
