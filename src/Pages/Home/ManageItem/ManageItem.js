import React, { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import './ManageItem.css'

const ManageItem = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState([]);
  useEffect(() => {
    const url = `https://murmuring-garden-73699.herokuapp.com/product/${itemId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [item]);

  const handleUpdatequantity = (itemId) => {
    const url = `https://murmuring-garden-73699.herokuapp.com/product/${itemId}`;

    if (item.quantity > 0) {
      const quantity = parseInt(item.quantity)  - 1;
      fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ quantity }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(quantity);
          console.log("success", data);
          alert("delivered successfully");
        });
    } else {
      alert("Item sold-out");
    }
  };

 const handleReStockItem = event=>{
    event.preventDefault();
    const reStockQuantity =parseInt(event.target.quantity.value) ;
    const url = `https://murmuring-garden-73699.herokuapp.com/product/${itemId}`;
    
    const quantity = parseInt(item.quantity) + reStockQuantity;
      fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ quantity }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(quantity);
          console.log("success", data);
          alert("restock successfully");
          event.target.reset();
        });
 }

  return (
    <div>
         <Container >
      <div className="p-5 ">
        <h2 className="my-3">Manage Items id:{itemId}</h2>
        <div className="additem p-5 ">
        <img src={item.img} alt="" />
        <h4>{item.name}</h4>
        <h5>Des:{item.description}</h5>
        <p>Quantity: {item.quantity}</p>
        <p>Supplier:{item.suppliername}</p>
        <button className="btn btn-dark px-4" onClick={() => handleUpdatequantity(itemId)}>Deliver</button>
        <Form onSubmit={handleReStockItem}>
          <Form.Label>Quantity For Restock</Form.Label>
          <br />
          <input type="number" name="quantity" id="" placeholder="Re-stock quantity" /> <br />
          <input type="submit" className="btn btn-dark my-3 px-5" value="Add" />
        </Form>
        </div>
      
      </div>

    </Container>
    <Link to="/manageInventory"><Button variant="dark " className="my-3">Manage Inventory</Button></Link>
    
    </div>
   

  );
};

export default ManageItem;
