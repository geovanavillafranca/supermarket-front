import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from '../components/Product';
import { Row, Col,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [errorStatus, setErrorStatus] = useState(false);
  
  useEffect(() => {
    fetchProducts();
  }, []);
  
  const fetchProducts = () => {
    axios.get('http://3.17.11.203/api/products/')
      .then(response => {
        setProducts(response.data);
        setErrorStatus(false);
      })
      .catch(error => {
        setErrorStatus(true);
        console.error('There was an error fetching the products!', error);
      });
  };

  const deleteProduct = (id) =>{
      axios.delete(`http://3.17.11.203/api/product/${id}`)
      .then(setProducts(products.filter(p => p.id !== id)))
      .catch(error => {
        console.log("There was an error deleting product!", error)
      })
  }

  return (
    <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Our product's Available</h2>
        <Link  to='product/' style={{ marginRight: '10px' }}>
          <Button>
            Add Product
          </Button>
        </Link>
        </div>
        {errorStatus ? 
          <h3 style={{color: "red"}}>
            We are having some trouble. Please try again later!
          </h3>
        :
          <Row>
              {products.map(product => (
                  <Col key={product._id} sm={6} md={6} lg={4} xl={3}>
                      <Product product={product} deleteProduct={deleteProduct}/>
                  </Col>
              ))}
          </Row>
        }
      </div>
  );
};

export default ProductList;
