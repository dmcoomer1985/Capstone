
import { useEffect, useState } from "react";

export default function ProductList() {
  // State which includes a products array
  const [products, setProducts] = useState([]);

  //Make call to Products api to fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const responseJson = await response.json();
      console.log(responseJson)
      setProducts(responseJson);
    };
    fetchProducts();
  }, []);

  return (
    <>
      {!products.length ? (
        <div>Loading Products...</div>
      ) : (
        <div>
          {" "}
          {products.map((product) => {
            return ( <div>
              <div style={{ backgroundColor: "grey" }} key={products.url}/>
              <p>price:{product.price}</p>
              <p>title:{product.title}</p>
              <p>description: {product.description}</p>
              <img className="product-img" src= {product.image} />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
