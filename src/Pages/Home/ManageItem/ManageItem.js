import React, { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";

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
    <Container>
      <div>
        <h2>Manage Items id:{itemId}</h2>
        <img src={item.img} alt="" />
        <p>{item.name}</p>
        <p>Quantity: {item.quantity}</p>
        <button onClick={() => handleUpdatequantity(itemId)}>Deliver</button>
        <Form onSubmit={handleReStockItem}>
          <Form.Label>Email address</Form.Label>
          <br />
          <input type="number" name="quantity" id="" placeholder="Re-stock quantity" /> <br />
          <input type="submit" value="Add" />
        </Form>
      </div>
    </Container>
  );
};

export default ManageItem;
