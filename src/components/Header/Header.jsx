import styles from './header.module.css'
import AmazonLogo from '../../assets/images/amazonLogo.png'
import USA_Flag from '../../assets/images/Flag_of_the_United_States.png'
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import LowerHeader from './LowerHeader';
import { Link } from 'react-router';
import { useContext } from 'react';
import { DataContext } from '../DataProvider/DataProvider';
import {auth} from '../../Utility/firebase';

const Header = () => {
  const [{user, basket},dispatch] = useContext(DataContext);
  const totalItem = basket?.reduce((amount,item)=>(item.amount +amount),0)
  return (
    <div className={styles.fixed}>
      <div className={styles.header_container}>
        <div className={styles.logo_container}>
          <Link to="/">
            <img src={AmazonLogo} alt="Amazon Logo" />
          </Link>
          <div className={styles.delivery}>
            <span>
              <SlLocationPin />
            </span>
            <div>
              <p>Delivered to</p>
              <span>Ethiopia</span>
            </div>
          </div>
        </div>
        <div className={styles.search}>
          <select name="" id="">
            <option value="">All</option>
          </select>
          <input type="text" placeholder="Search Amazon" />
          <BsSearch size={45} />
        </div>
        <div className={styles.order_container}>
          <Link to="" className={styles.language}>
            <img src={USA_Flag} alt="USA_Flag" />
            <select name="" id="">
              <option value="">EN</option>
            </select>
          </Link>

          <Link to={!user && "/auth"}>
              <div>
                {user ? (
                  <>
                    <p>Hello {user?.email?.split("@")[0]}</p>
                    <span onClick={() => (user ? auth.signOut() : null)}>
                      Sign Out
                    </span>
                  </>
                ) : (
                  
                  <>
                    <p>Hello, Sign In</p>
                    <span>Account & Lists</span>
                  </>
                )}
              </div>
            </Link>



          <Link to="/orders">
            <p>Returns</p>
            <span>& Orders</span>
          </Link>
          <Link to="/cart" className={styles.cart}>
            <BiCart size={35} />
            <span>{totalItem}</span>
          </Link>
        </div>
      </div>
      <LowerHeader />
    </div>
  );
}

export default Header