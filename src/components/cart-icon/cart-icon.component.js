import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.reducer';

const CartIcon = () => {
  const cartItemsCount = useSelector(selectCartCount)
  const isCartOpen = useSelector(selectIsCartOpen)

  const dispatch = useDispatch()

  const setIsCartOpenHandler = (bool) =>{
    dispatch(setIsCartOpen(bool))
  } 

  const toggleIsCartOpen = () => setIsCartOpenHandler(!isCartOpen);

  return (
    <div className='cart-icon-container' onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{cartItemsCount}</span>
    </div>
  );
};

export default CartIcon;

