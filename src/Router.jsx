import { BrowserRouter, Routes, Route } from "react-router";
import Landing from "./Pages/Landing/Landing";
// import Layout from "./components/Layout/layout";
import Auth from "./Pages/Auth/Auth";
import Payment from "./Pages/Payment/Payment";
import Orders from "./Pages/Orders/Orders";
import Cart from "./Pages/Cart/Cart";
import Results from "./Pages/Results/Results";
import ProductDetail from './Pages/ProductDetail/ProductDetail'
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectRoute from "./components/ProtectRoute/ProtectRoute";

const stripePromise = loadStripe(
  "pk_test_51QwWHc4E9AfM83ZQ0hFBAFwazKJiiJKZoP2N5PivApQVCxy12n9xTePDoLlSBZGxdAu7g6W7tS6KFkYhzDh4yudW00dLBvjqr3"
);
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/payments" element={
          <ProtectRoute msg={"you must log in to pay"} redirect={'/payments'}>
        <Elements stripe={stripePromise}>
          <Payment />
        </Elements>
          </ProtectRoute>
        } />
        <Route path="/orders" element={
        
        <ProtectRoute msg={'you must log in to see your orders'}  redirect={'/orders'}>
          <Orders />
        </ProtectRoute>
        
        
        } />
        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
