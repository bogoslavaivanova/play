import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Products = () => {
  // Sample product data
  const products = [
    {
      id: 1,
      name: 'Product 1',
      image: 'https://fimgs.net/mdimg/perfume/375x500.30663.jpg',
    },
    {
      id: 2,
      name: 'Product 2',
      image: 'https://cdn.awsli.com.br/800x800/651/651812/produto/144697707/0735bd5c90.jpg',
    },
    // Add more product objects as needed
  ];

  return (
    <div>
      <h1>Products</h1>
      <Row>
        {products.map(product => (
          <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Card style={{ width: '18rem', margin: '10px' }}>
              <Card.Img
                variant="top"
                src={product.image}
                style={{ width: '200px', height: '200px' }} // Set width and height here
              />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Button variant="primary">Buy Now</Button>
                <Button variant="link">
                  <FontAwesomeIcon icon={faHeart} style={{ color: 'red' }} />
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Products;
