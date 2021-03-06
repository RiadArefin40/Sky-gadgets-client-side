import React, { useEffect, useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
import ItemDetail from "../ItemDetails/ItemDetail";
import "./Inventory.css";

const InventoryItems = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("https://murmuring-garden-73699.herokuapp.com/product")
      .then((res) => res.json())
      .then((data) => setItems(data));
    setLoading(true);
  }, []);

  console.log(items);
  console.log(loading);
  return (
    <div>
       <h2 className="my-5">Inventory_items</h2>
      <Container className="inventoryItems">
       
        {items.length === 0 && <Loading></Loading>}
        <Row xs={1} md={2} lg={3} className="gx-5 mx-5">
          {loading ? (
            items.slice(0,6).map((item) => (
              <ItemDetail key={item._id} item={item}></ItemDetail>
            ))
          ) : (
            <Loading></Loading>
          )}
        </Row>
         
      </Container>
      <Link to="/manageInventory">
      <Button variant="dark" className="my-5 px-5 p-2">Manage Inventory</Button>
      </Link>
    </div>
  );
};

export default InventoryItems;
