import React from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ItemDetail = ({ item }) => {
  const { img, _id, name, price, quantity, description, suppliername } = item;
  const navigate = useNavigate();
  const navigateToInventory = (id) => {
    console.log("navigate");
    navigate(`/inventory/${id}`);
  };
  return (
    <div className="my-2">
      <Card className="my-2">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            Des:{description} <br />
            Price:${price} <br />
            Quantity: {quantity} <br />
            Supplier:{suppliername} <br />
          </Card.Text>
        </Card.Body>

        <Button
          variant="dark"
          className="w-50 mx-auto my-2"
          onClick={() => navigateToInventory(_id)}
        >
          Update
        </Button>
      </Card>
    </div>
  );
};

export default ItemDetail;
