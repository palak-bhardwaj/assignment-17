import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function Products() {
  const [products, setProducts] = useState([]);

  async function fetchData() {

    let res = await axios.get('https://dummyjson.com/products');
    setProducts(res.data.products);

  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='outer'>
      {
        products.map((product) => (
          <div key={product.id} className="card">
            <h2>Product Title: {product.title}</h2>
            Product Thumbnail: <br /> <img src={product.thumbnail} className='Image' /> 
          <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Rating: {product.rating}</p>
           
          </div>
        ))
      
      }
    </div>
  );
}

export default Products;
