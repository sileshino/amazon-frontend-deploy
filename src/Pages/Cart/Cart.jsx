import styles from "./cart.module.css";
import { useContext } from "react";
import { DataContext } from "../../components/DataProvider/DataProvider";
import Layout from "../../components/Layout/layout";
import ProductCard from "../../components/Product/ProductCard";
import { Link } from "react-router";
import CurrencyFormat from "../../components/CurrencyFormat/CurrencyFormat";
import { Type } from "../../Utility/action";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";


const Cart = () => {
  const [{ basket, user }, dispatch] = useContext(DataContext);
  const increment = (item) =>
    dispatch({
      type: Type.ADD_TO_BASKET,
      item,
    });
  const decrement = (id) =>
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      id,
    });

  const total = basket.reduce(
    (amount, item) => item.price * item.amount + amount,
    0
  );
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.cart_container}>
          <h2>Hello</h2>
          <h3>Your shopping basket</h3>
          <hr />
          {basket?.length == 0 ? (
            <p>Oops! No item in your cart</p>
          ) : (
            basket?.map((item, index) => (
              <div key={index} className={styles.cart_product}>
                <ProductCard
                  key={index}
                  product={item}
                  renderDesc={true}
                  flex={true}
                  renderAdd={false}
                />
                <div className={styles.btn_container}>
                  <button onClick={() => increment(item)}>
                    <IoIosArrowUp size={20} />
                  </button>
                  <span>{item.amount}</span>
                  <button onClick={() => decrement(item.id)}>
                    <IoIosArrowDown size={20} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
        {basket?.length !== 0 && (
          <div className={styles.subtotal}>
            <div>
              <p>Subtotal ({basket?.length} items)</p>
              <CurrencyFormat amount={total} />
            </div>
            <span>
              <input type="checkbox" />
              <small>This order contains a gift</small>
            </span>
            <Link to="/payments">Continue to checkout</Link>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Cart;
