import React,{Fragment,useContext} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import AuthState from '../../context/auth/AuthState';
import ContactContext from '../../context/contact/contactContext';

const Navbar = ({title,icon}) => {
  const authContext = useContext(AuthContext);
  const contactContext = useContext(ContactContext);

  const {isAuthenticated, logout, user} =authContext;
  const {clearContacts} = contactContext;

  const onLogout = () => {
      logout();
      clearContacts();
  }

  const authLinks = (
       <Fragment>
           <li>Hello {user && user.name} {''}</li>
           {'                                                   '}
           <li >
               <a onClick={onLogout} href="#">
                   <i className="fas fa-sign-out-alt"></i> <span className="hide-sm">Logout</span>
               </a>
           </li>
       </Fragment>
  );

  const guestLinks = (
    <Fragment>
        <li>Hello {user && user.name}{' '}</li>
        {'                                                      '}
        <li >
            <Link to='/about'><i class="fa fa-newspaper-o" aria-hidden="true"></i>{' '}Subscriptions Available</Link>
        </li>
        <li>
                 <Link to='/register' ><i className="fas fa-user-plus"></i>{' '}Register</Link>
        </li> 
        <li>
                 <Link to='/login' ><i className="fas fa fa-sign-in" aria-hidden="true"></i>{' '}Login</Link>
        </li> 
    </Fragment>
);

    return (
        <div className="navbar bg-primary" >
            <ul style={{float: 'right'}}>
                {isAuthenticated?authLinks:guestLinks}
            </ul>
        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
}

Navbar.defalutProps = {
    title: '',
    icon: ''
}

export default Navbar;
