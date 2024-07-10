import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const categories = ['Fruits and Vegetables', 'Meat', 'Beverages', 'Electronics'];

const categoryMap = {
  'Fruits and Vegetables': 1,
  'Meat': 2,
  'Beverages': 3,
  'Electronics': 4,
};

const ProductList = () => {
    const navigate = useNavigate();
    const [image, setImage] = useState();
    const [formData, setFormData] = useState({
      id: null,
      name: '',
      price: '00.00',
      description: '',
      stock: 0,
      image: '',
      category: categories[0],
    });
  
    const handleChange = (e) => {
      const { name, value, files } = e.target;
      if (name === 'image') {
        setFormData({ ...formData, image: files[0] });
      } else {
        setFormData({ ...formData, [name]: value });
      }
    };

    const handleSubmit = async (e) => {
      e.preventDefault();

      const dataToSend = new FormData();

      dataToSend.append('name', formData.name)
      dataToSend.append('price', formData.price)
      dataToSend.append('description', formData.description)
      dataToSend.append('stock', formData.stock)
      dataToSend.append('category', categoryMap[formData.category])
      dataToSend.append('image', image, image.name)
      createProduct(dataToSend);
    }

    const createProduct = async (data) => {
      try {
        await axios.post('http://3.17.11.203/api/products/', data);
        navigate('/');
      } catch (error) {
        console.error('There was an error creating product!', error);
      }
    };
  
  
    return (
      <div>
        <h2>Create new product</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Product</Form.Label>
            <Form.Control type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required/>
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>Stock</Form.Label>
            <Form.Control
                type="number"
                name="stock"
                value={formData.stock}
                onChange={handleChange}
                required
            />
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              row={3}
              value={formData.description}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>Image</Form.Label>
            <Form.Control
          enctype="multipart/form-data"
            type="file"
            name="image"
            onChange={(e)=>setImage(e.target.files[0])}
            required
          />
          </Form.Group>
          <Form.Group className="mb-3"  >
            <Form.Label style={{marginRight: "20px"}}>Select Category </Form.Label>
            <Form.Select 
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </Form.Select>
          </Form.Group>
          <Button type="submit">Save</Button>

        </Form>

      </div>
    );
  };
  
  export default ProductList;