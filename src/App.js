import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function App() {

  const show= useSelector(state=> state.cartBtn.showCart);

  const cart = useSelector(state=>state.cartItem)

  useEffect(()=>{
    fetch('https://react-http-76fdb-default-rtdb.firebaseio.com/cart.json', {
      method: 'PUT',//overwrite the existing data
      body: JSON.stringify(cart),
    });
  }, [cart]);

  return (
    <Layout>
      { show && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
