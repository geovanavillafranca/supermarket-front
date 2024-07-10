import { Card } from 'react-bootstrap';
import React from 'react';
import '../bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Product = ({ product, deleteProduct }) => {
  return (
    <Card className="my-3 p-3 rounded">
        <Card.Img style={{ width: '215px', height: '200px' }}  src={product.image} />
        <Card.Body>
            <Card.Title as="div">
                <strong>{product.name}</strong>
            </Card.Title>

            <Card.Text as="h4">
                ${product.price}
            </Card.Text>

            <Card.Text>
                <div className="my-3">
                    {product.stock > 0 ? "In Stock" : "Out Stock"}
                </div>
            </Card.Text>
                <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={() => deleteProduct(product.id)} />
        </Card.Body>
    </Card>
    );
};

export default Product