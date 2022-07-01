import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { btnActions } from '../../store/cartBtn';

const CartButton = (props) => {

  const dispatch = useDispatch();
  const quantity = useSelector(state=>state.cartItem.totalQuantity);

  const btnClickHandler =()=>{
    dispatch(btnActions.btnClicked());
    
  }



  return (
    <button className={classes.button} onClick= {btnClickHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default CartButton;
