import { useState, useEffect } from "react";

function Cart({ cartProducts, setCartProducts, products }) {
  const [cart, setCart] = useState([]);
  const userId = localStorage.getItem("User");

  useEffect(() => {
    try {
      let cartData;
      let productData;
      const fetchCartProducts = async () => {
        //Make cart id dynamic.
        const response = await fetch(
          `https://fakestoreapi.com/carts/user/${userId}`
        );
        const responseJson = await response.json();
        setCart(responseJson[0].products);
      };

      fetchCartProducts();

      //   const cartProductIds = cart.map(cartProduct=>{
      //     return cartProduct.productId
      //   })

      //   const filteredProducts = products.filter((product) => {
      //           return cartProductIds.includes(product.id)
      //   });
      //   const filteredProductsWithQuantity = filteredProducts.map(product=>{
      //     for (const cartProduct of cart) {
      //       if(cartProduct.productId===product.id) {
      //         product.quantity = cartProduct.quantity
      //         return product
      //       }
      //     }
      //   })
      //   console.log(filteredProductsWithQuantity)
      //  setCartProducts(filteredProductsWithQuantity)
      //add a quantity property to each cart product.
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleRemove = (product) => {
    const newCartProducts = cartProducts.filter((i) => i.id !== product.id);
    setCartProducts(newCartProducts);
  };

  const handleAdd = async (product) => {
    await addItem(product);
  };

  const addItem = async (product) => {
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
  };

  const handleSubtract = async (product) => {
    let productEmpty = false;
    const newCart = cartProducts.map((i) => {
      if (i.id === product.id) {
        const newItem = {
          ...product,
          quantity: i.quantity - 1,
        };

        if (newItem.quantity < 1) {
          productEmpty = true;
        }
        return newItem;
      } else {
        return i;
      }
    });
    console.log(productEmpty);
    productEmpty ? handleRemove(product) : setCartProducts(newCart);
  };

  return (
    <div>
      <h2>The Shopping Cart</h2>
      <div>
        {" "}
        {cartProducts &&
          cartProducts.map((product) => {
            return (
              <div>
                <div style={{ backgroundColor: "grey" }} key={products.url} />

                <p>price:{product.price}</p>
                <p>title:{product.title}</p>
                <p>description: {product.description}</p>
                <img className="product-img" src={product.image} />
                <p>quantity:{product.quantity}</p>
                <button onClick={() => handleAdd(product)}>+</button>
                <button onClick={() => handleSubtract(product)}>-</button>
                <button onClick={() => handleRemove(product)}>Remove</button>
                <button>Checkout</button>
              </div>
            );
          })}
      </div>
    </div>
  );
}
export default Cart;
