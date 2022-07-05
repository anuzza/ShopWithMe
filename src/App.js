import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from 'react-redux';
import { Fragment, useEffect } from 'react';
import Notification from './components/UI/Notification';
import {sendCartData} from './store/cart-slice';

let isInitial = true;

function App() {

  const dispatch= useDispatch();
  const notification = useSelector((state)=>state.cartBtn.notification);


  const show= useSelector(state=> state.cartBtn.showCart);

  const cart = useSelector(state=>state.cartItem)

  useEffect(()=>{
    

    if(isInitial){
      isInitial = false;
      return;
    }   

    dispatch(sendCartData(cart));

    
    
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && <Notification status={notification.status} title={notification.title} message={notification.message}/>}
      <Layout>
      { show && <Cart />}
      <Products />
    </Layout>
    </Fragment>
    
  );
}

export default App;
