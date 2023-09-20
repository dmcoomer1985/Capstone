import { useState,useEffect} from 'react';

function Cart() {
  const [cart, setCart] = useState({});
  const [products, setProducts] = useState([])
  const [cartProducts, setCartProducts] = useState([])

  useEffect(() => { 
    try {
 let cartData
 let productData
    const fetchCart = async () => {
      const response = await fetch("https://fakestoreapi.com/carts/5");
      const responseJson = await response.json();
      console.log(responseJson);
  setCart(responseJson)
      
     
    };
   
        const fetchProducts = async () => {
        const response = await fetch("https://fakestoreapi.com/products");
        const responseJson = await response.json();
        console.log(responseJson);
     setProducts(responseJson)
  
        
      };
       
      fetchCart();
      fetchProducts();

      const filteredProducts = products.filter((product)=>{
      cart.products
      })
    } catch(error) {console.log(error)}
   
  }, []);

  console.log({cart, products}) 
  return (
    <div>
    <h2>The Shopping Cart</h2>
    
    </div>
  )
}

export default Cart