import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from 'react-redux';
import { btnActions } from './store/cartBtn';
import { Fragment, useEffect } from 'react';
import Notification from './components/UI/Notification';

let isInitial = true;

function App() {

  const dispatch= useDispatch();
  const notification = useSelector((state)=>state.cartBtn.notification);


  const show= useSelector(state=> state.cartBtn.showCart);

  const cart = useSelector(state=>state.cartItem)

  useEffect(()=>{
    const sendCartData = async()=>{
      dispatch(btnActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data!',
      })
      );
      const response = await fetch('https://react-http-76fdb-default-rtdb.firebaseio.com/cart.json',
       {
      method: 'PUT',//overwrite the existing data
      body: JSON.stringify(cart),
      });

      if(!response.ok){
        throw new Error('Sending cart data failed')
        
      }

      // const responseData = await response.json();

      dispatch(btnActions.showNotification({
        status: 'success',
        title: 'Sucess...',
        message: 'Sent cart data successfully!',
      }))


    };

    if(isInitial){
      isInitial = false;
      return;


    }

    sendCartData().catch((error=>{
      dispatch(btnActions.showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Sending cart data failed!',
      }))


    }))
    
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
