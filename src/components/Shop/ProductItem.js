import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { cartActions } from '../../store/cart-slice';
import { useDispatch, useSelector } from 'react-redux';

const ProductItem = (props) => {
  const cart = useSelector(state=>state.cartItem);



  const dispatch = useDispatch();
  const { title, price, description , id} = props;

  const addtoCartHandler=()=>{
    const newTotalQuantity = cart.totalQuantity +1;

    const updatedItems = cart.items.slice()//creates copy via slice to avoid mutation 
    const existingItem = updatedItems.find((item)=>item.id===id);
    if(existingItem){
      const updatedItem= {...existingItem};//new obj + copy existing properties
      updatedItem.quantity++;
      updatedItem.price = updatedItems.price+price;
      const existingItemIndex= updatedItems.findIndex((item)=> item.id===id);
      updatedItems[existingItemIndex]= updatedItem;
    }else {
      updatedItems.push({
        id: id,
        price: price,
        quantity: 1,
        totalPrice: price,
        name: title,

      });
    }


    const newCart = {
      totalQuantity: newTotalQuantity,
      items: updatedItems,
    };

    dispatch(cartActions.replaceCart(newCart));

    
    // dispatch(cartActions.addItemToCart({
    //   id,
    //   title,
    //   price,
    // }));


  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addtoCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
