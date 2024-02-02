import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import './navbar.styles.scss'
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navbar = () => {
  const {currentUser} = useContext(UserContext)

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
          
        </div>
      </div>
    </Fragment>
    );
}

export default Navbar;
