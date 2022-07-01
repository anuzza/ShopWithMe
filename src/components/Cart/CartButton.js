import classes from './CartButton.module.css';
import { useDispatch } from 'react-redux';
import { btnActions } from '../../store/cartBtn';

const CartButton = (props) => {

  const dispatch = useDispatch();

  const btnClickHandler =()=>{
    dispatch(btnActions.btnClicked());
    
  }



  return (
    <button className={classes.button} onClick= {btnClickHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
