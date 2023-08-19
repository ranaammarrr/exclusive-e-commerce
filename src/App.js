import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import Products from "./screens/Products";
import Cart from "./screens/Cart";
import Header from "./components/Header";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Footer from "./components/Footer";
import './components.css'
import Login from "./screens/Login";
import { AuthContextProvider } from "./context/AuthContext";
import SignUp from "./screens/SignUp";
import ProtectedRoute from "./protectedRoutes/ProtectedRoute";
import Account from "./components/Account";
import './App.css'
import CheckOut from "./screens/CheckOut";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import StripePaymentForm from "./components/StripePaymentForm";
import NotFound from "./screens/NotFound";
import About from "./screens/About";

const stripePromise = loadStripe(
  "pk_test_51NdoiLJdqgiLA5C3VAIreAzo421s63MDMRHMxgyE1WUqXVgl7t8F3EX4mD7a9QNlUSgztteS1CYYQBMw1tT3Goto00OHKN78vj"
);

function App() {
  return (
    <Elements stripe={stripePromise}>
      <AuthContextProvider>
        <div className="app-container">
          <Header />
          <div className="content">
            <Routes>
              <Route path="/" element={<ProtectedRoute> <HomeScreen /> </ProtectedRoute>} />
              <Route path="/products" element={<Products />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/account" element={<Account />} />
              <Route path="/checkout" element={<CheckOut />} />
              <Route path="/about" element={<About />} />
              <Route path="/stripe" element={<StripePaymentForm />} />
              <Route path='/not-found' element={<NotFound />} />
              <Route path='*' element={<Navigate to="/not-found" replace />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </AuthContextProvider>
    </Elements>
  );
}

export default App;
