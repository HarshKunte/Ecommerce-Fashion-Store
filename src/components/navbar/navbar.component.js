import { Fragment } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import './navbar.styles.scss'
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";

const Navbar = () => {
  const currentUser = useSelector(selectCurrentUser)
  const isCartOpen = useSelector(selectIsCartOpen)

  const signOutHandler = async () =>{
    await signOutUser()
  }
    return (
        <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrwnLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          {
            currentUser? (
              <span className="nav-link" onClick={signOutHandler}>SIGN OUT</span>
            ):
            (<Link className='nav-link' to='/auth'>
            SIGN IN
          </Link>)
          }

          <CartIcon/>
          
        </div>
        {isCartOpen && <CartDropdown/>}
      </div>
    </Fragment>
    );
}

export default Navbar;
