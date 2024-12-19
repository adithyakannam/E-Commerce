import { useState } from "react";
import "./App.css";
import { OrderContext } from "./Context/OrderContext";
import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./Components/Pages/Login";
import Nav from "./Components/Pages/NavBar/Nav";
import Men from "./Components/Collection/Men";
import Women from "./Components/Collection/Women";
import Home from "./Components/Pages/Home";
import Address from "./Components/CRUD/Address";
import Edit from "./Components/CRUD/Edit";
import Footer from "./Components/Pages/Footer";
import Electronics from "./Components/Collection/Electronics";
import Jewelery from "./Components/Collection/Jewelery";
import Cart from "./Components/CRUD/Cart";
import Profile from "./Components/Pages/Profile";
import Register from "./Components/Pages/Register";
import AuthenticationProvider from "./Context/AuthenticationProvider";
import PrivateRoute from "./Context/PrivateRoute";
import NoPage from "./Components/Pages/NoPage";
import Product from "./Components/Pages/Product";
import NewAddress from "./Components/CRUD/NewAddress";

function App() {
  const [orderCount, setOrderCount] = useState([]);

  return (
    <OrderContext.Provider value={{ orderCount, setOrderCount }}>
      <AuthenticationProvider>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route
              path="/address"
              element={<PrivateRoute element={Address} />}
            />
            <Route path="/home" element={<PrivateRoute element={Home} />} />
            <Route path="/men" element={<PrivateRoute element={Men} />} />
            <Route path="/women" element={<PrivateRoute element={Women} />} />
            <Route
              path="/jewelery"
              element={<PrivateRoute element={Jewelery} />}
            />
            <Route
              path="/electronics"
              element={<PrivateRoute element={Electronics} />}
            />
            <Route
              path="/newaddress"
              element={<PrivateRoute element={NewAddress} />}
            />
            <Route path="/edit" element={<PrivateRoute element={Edit} />} />
            <Route path="/cart" element={<PrivateRoute element={Cart} />} />
            <Route
              path="/profile"
              element={<PrivateRoute element={Profile} />}
            />
            <Route
              path="/product"
              element={<PrivateRoute element={Product} />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthenticationProvider>
    </OrderContext.Provider>
  );
}

export default App;
