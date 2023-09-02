export default function Products() {
  return <h1>Products</h1>;
}
import { useEffect, useState } from "react";

function ProductList() {
  // State which includes a products array
  const [products, setProducts] = useState([]);

  //Make call to Products api to fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const responseJson = await response.json();
      console.log(responseJson)
      setProducts(responseJson.results);
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
            return (
              <div style={{ backgroundColor: "grey" }} key={products.url} />
            );
          })}
        </div>
      )}
    </>
  );
}
