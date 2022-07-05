import { btnActions } from "./cartBtn";
import { cartActions } from "./cart-slice";

export const fetchCartData =()=>{
    return async (dispatch) =>{
        const fetchData = async () =>{
            const response = await fetch('https://react-http-76fdb-default-rtdb.firebaseio.com/cart.json' );

            if(!response.ok){
                throw new Error('Could not fetch cart data!');
            }

            const data = await response.json();

            return data ;


        };
        
        try{
            const cartData = await fetchData();
            
            dispatch(cartActions.replaceCart({items: cart.items || [], totalQuantity: cart.totalQuantity}));

        }catch(error){
                    dispatch(btnActions.showNotification({
                        status: 'error',
                        title: 'Error!',
                        message: 'Fetching cart data failed!',
                    })
            );

        }

    };
};

export const sendCartData =(cart)=>{
    return async (dispatch)=>{
            dispatch(btnActions.showNotification({
            status: 'pending',
            title: 'Sending...',
            message: 'Sending cart data!',
            })
        );
        
        

        const sendRequest = async()=>{
            const response = await fetch('https://react-http-76fdb-default-rtdb.firebaseio.com/cart.json',
        {
        method: 'PUT',//overwrite the existing data
        body: JSON.stringify({items: cart.items, totalQuantity: cart.totalQuantity}),
        });

        if(!response.ok){
            throw new Error('Sending cart data failed!');
        }
        };

        try{
            await sendRequest();
            dispatch(btnActions.showNotification({
            status: 'success',
            title: 'Sucess...',
            message: 'Sent cart data successfully!',
            }));



        }catch (error){
            dispatch(btnActions.showNotification({
            status: 'error',
            title: 'Error!',
            message: 'Sending cart data failed!',
            }));

        }
    };
    


};
