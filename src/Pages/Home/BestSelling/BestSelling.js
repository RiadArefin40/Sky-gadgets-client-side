import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const BestSelling = () => {
    return (
        <div>
            <h2>Our Best selling Products</h2>
            <Row xs={2} md={4} className="g-4 m-5">
 
    <Col>
      <Card>
        <Card.Img variant="top" src="https://i.ibb.co/R6mdRK9/2971-1.png" />
        <Card.Body>
          <Card.Title>Xaomi-Sport HD set</Card.Title>
          <Card.Text>
           Total Sold: 167
           <p>Ratings : 5/5</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card>
        <Card.Img variant="top" src="https://i.ibb.co/z8X25VK/2971-2.png" />
        <Card.Body>
          <Card.Title>Apple Watch Gen-1</Card.Title>
          <Card.Text>
          Total Sold: 317
          <p>Ratings : 5/5</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card>
        <Card.Img variant="top" src="https://i.ibb.co/fXbqbBq/2971-3.png" />
        <Card.Body>
          <Card.Title>Apple Watch Gen-2</Card.Title>
          <Card.Text>
          Total Sold: 361
          <p>Ratings : 5/5</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card>
        <Card.Img variant="top" src="https://i.ibb.co/rbTyhqf/2971-4.png" />
        <Card.Body>
          <Card.Title>Dell-spx1104</Card.Title>
          <Card.Text>
          Total Sold: 675
          <p>Ratings : 5/5</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  
</Row>
        </div>
    );
};

export default BestSelling;