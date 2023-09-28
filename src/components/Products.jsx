import { useEffect, useState } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";

export default function ProductList({
  products,
  setCartProducts,
  cartProducts,
}) {
  // State which includes a products array

  // State for switch buttons
  const [stateTitle, setTitle] = useState(false);
  const [statePrice, setPrice] = useState(false);

  const handleClick = (product) => {
    console.log(product.id);
    if (cartProducts.some((productItem) => productItem.id === product.id)) {
      const newCart = cartProducts.map((i) => {
        if (i.id === product.id) {
          const newItem = {
            ...product,
            quantity: i.quantity + 1,
          };
          return newItem;
        } else {
          return i;
        }
      });
      setCartProducts(newCart);
    } else {
      const cartItem = {
        ...product,
        quantity: 1,
      };

      setCartProducts([...cartProducts, cartItem]);
    }
  };

  // Sort by name

  const sortTitle = (products) => {
    if (!stateTitle) {
      setPrice(false);
      products.sort(compareTitle);
    } else {
      products.sort(compareId);
      setProducts(products);
    }
  };

  // Sort by price

  const sortPrice = (products) => {
    if (!statePrice) {
      setTitle(false);
      products.sort(comparePrice);
    } else {
      products.sort(compareId);
    }
  };

  // Compare title

  function compareTitle(a, b) {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  }

  // Compare price

  function comparePrice(a, b) {
    if (a.price < b.price) {
      return -1;
    }
    if (a.price > b.price) {
      return 1;
    }
    return 0;
  }

  // Compare ID

  function compareId(a, b) {
    if (a.id < b.id) {
      return -1;
    }
    if (a.id > b.id) {
      return 1;
    }
    return 0;
  }

  return (
    <>
      <Form>
        <FormGroup switch>
          <Input
            type="switch"
            checked={stateTitle}
            onClick={() => {
              setTitle(!stateTitle);
              sortTitle(products);
            }}
          />
          <Label check>Sort by Title </Label>
        </FormGroup>
        <FormGroup switch>
          <Input
            type="switch"
            checked={statePrice}
            onClick={() => {
              setPrice(!statePrice);
              sortPrice(products);
            }}
          />
          <Label check>Sort by Price</Label>
        </FormGroup>
      </Form>

      {!products.length ? (
        <div>Loading Products...</div>
      ) : (
        <div>
          {" "}
          {products.map((product) => {
            return (
              <div>
                <div style={{ backgroundColor: "grey" }} key={products.url} />

                <p>price:{product.price}</p>
                <p>title:{product.title}</p>
                <p>description: {product.description}</p>
                <button onClick={() => handleClick(product)}>
                  Add to Cart
                </button>
                <img className="product-img" src={product.image} />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
