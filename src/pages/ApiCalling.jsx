import { useEffect, useState } from "react";

function ApiCalling() {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
      });

  }, []);

  return (
    <div>
      <h1>API Calling</h1>

      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ApiCalling;