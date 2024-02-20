import { Routes, Route, HashRouter } from 'react-router-dom';
import { useState } from 'react';
import './index.css';


// ******************* Site Imports ******************* 
import Header from "./components/Site/Header";
import Banner from './components/Site/Banner';
import Categories from './components/Site/Categories';
import RandomFact from './components/Site/RandomFact';
import WhyUs from './components/Site/WhyUs';
import Footer from './components/Site/Footer';
import Contact from './components/Site/Contact';
import FoodPage from './components/Site/FoodPage';
import Cart from './components/Site/Cart';
import Login from './components/Site/Login';
import SignUp from './components/Site/SignUp';
import AdminPanel from './components/Admin/AdminPanel';
import OrderForm from './components/Site/OrderForm';
import Navigation from './components/Site/Navigation';
import MyOrders from './components/Site/MyOrders';
import AllFoods from './components/Site/AllFoods';
import SearchPage from './components/Site/SearchPage';
import PaymentPage from './components/Site/PaymentPage';
import PaymentSuccess from './components/Site/PaymentSuccess';



// ******************* Admin Panel Imports ******************* 
import Admins from './components/Admin/Users/Admins';
import Users from './components/Admin/Users/Users';
import AllOrders from './components/Admin/Orders/AllOrders';
import PendingOrders from './components/Admin/Orders/PendingOrders';
import CompletedOrders from './components/Admin/Orders/CompletedOrders';
import AllAvailableFoods from './components/Admin/Foods/AllAvailableFoods';
import AddFood from './components/Admin/Foods/AddFood';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import Payments from './components/Admin/Payments/Payments';
import EditOrder from "./components/Admin/Orders/EditOrder";
import EditUser from "./components/Admin/Users/EditUser";
import EditFood from "./components/Admin/Foods/EditFood";
import Message from './ui/Message';

const url = "https://flavourfound.onrender.com/admin/";
// const url = "http://localhost:80/admin/";

const fetchData = async (url, method, req_body)=>{

    const config = {
        "method": method,
        "headers": {
            'Content-Type': "application/json",
        },
    }

    if(method !== 'GET'){
        config.body = JSON.stringify(req_body);
    }

    const response = await fetch(url, config);

    const resData = await response.json();
    return resData;
}

const App = ()=>{


  // ******************* Admin Panel Related Functions And States ******************* 
  const [editOrderModalIsShown, setEditOrderModalIsShown] = useState(false);
  const [editOrderModalData, setEditOrderModalData] = useState({});

  const showEditOrderModal = (data)=>{
      setEditOrderModalData(data);
      setEditOrderModalIsShown(true);
  }

  const hideEditOrderModal = ()=>{
      setEditOrderModalData({});
      setEditOrderModalIsShown(false);
  }

  const [editUserModalIsShown, setEditUserModalIsShown] = useState(false);
  const [editUserModalData, setEditUserModalData] = useState({});

  const showEditUserModal = (data)=>{
      setEditUserModalData(data);
      setEditUserModalIsShown(true);
  }

  const hideEditUserModal = ()=>{
      setEditUserModalData({});
      setEditUserModalIsShown(false);
  }

  const [editFoodModalIsShown, setEditFoodModalIsShown] = useState(false);
  const [editFoodModalData, setEditFoodModalData] = useState({});


  const showEditFoodModal = (data)=>{
      setEditFoodModalData(data);
      setEditFoodModalIsShown(true);
  }

  const hideEditFoodModal = ()=>{
      setEditFoodModalData({});
      setEditFoodModalIsShown(false);
  }




 
  // ******************* Site Related Functions And States ******************* 
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = ()=>{
    setNavigationIsShown(false);
    setCartIsShown(true);
  }

  const hideCartHandler = ()=>{
    setCartIsShown(false);
  }

  const [loginIsShown, setLoginIsShown] = useState(false);

  const showLoginHandler = ()=>{
    setNavigationIsShown(false);
    setLoginIsShown(true);
  }

  const hideLoginHandler = ()=>{
    setLoginIsShown(false);
  }

  const [signupIsShown, setSignupIsShown] = useState(false);

  const showSignupHandler = ()=>{
    setLoginIsShown(false);
    setSignupIsShown(true);
  }

  const hideSignupHandler = ()=>{
    setSignupIsShown(false);
  }

  const [orderFormIsShown, setOrderFormIsShown] = useState(false);

  const showOrderFormHandler = ()=>{
    setLoginIsShown(false);
    setSignupIsShown(false);
    setCartIsShown(false);
    setOrderFormIsShown(true);
  }

  const hideOrderFormHandler = ()=>{
    setOrderFormIsShown(false);
  }

  const [navigationIsShown, setNavigationIsShown] = useState(false);

  const showNavigationHandler = ()=>{
    setNavigationIsShown(true);
  }

  const hideNavigationHandler = ()=>{
    setNavigationIsShown(false);
  }

  const [myOrdersIsShown, setMyOrdersIsShown] = useState(false);

  const showMyOrdersHandler = ()=>{
    setNavigationIsShown(false);
    setMyOrdersIsShown(true);
  }

  const hideMyOrdersHandler = ()=>{
    setMyOrdersIsShown(false);
  }

  return (
    <div className="app-container flex justify-between flex-col min-h-[100dvh]">

    <HashRouter>

      <Message />

      {/* ******************* Site Related Modals *******************  */}
      {cartIsShown && <Cart showLogin={showLoginHandler} hideCartHandler={hideCartHandler} showOrderFormHandler={showOrderFormHandler} />}
      {navigationIsShown && <Navigation showLogin={showLoginHandler} showMyOrders={showMyOrdersHandler} hideNavigationHandler={hideNavigationHandler} />}
      {loginIsShown && <Login hideLoginHandler={hideLoginHandler} showSignup={showSignupHandler} />}
      {signupIsShown && <SignUp hideSignupHandler={hideSignupHandler} />}
      {orderFormIsShown && <OrderForm hideOrderFormHandler={hideOrderFormHandler} />}
      {myOrdersIsShown && <MyOrders hideMyOrdersModal={hideMyOrdersHandler} />}
      <Header showCart={showCartHandler} showLogin={showLoginHandler} showNavigation={showNavigationHandler} />



      {/* ******************* Admin Panel Related Modals *******************  */}
      {editOrderModalIsShown && <EditOrder url={url} fetchData={fetchData} orderDetails={editOrderModalData} hideEditOrderModal={hideEditOrderModal} />}    
      {editUserModalIsShown && <EditUser url={url} fetchData={fetchData} userDetails={editUserModalData} hideEditUserModal={hideEditUserModal} />}
      {editFoodModalIsShown && <EditFood url={url} fetchData={fetchData} foodDetails={editFoodModalData} hideEditFoodModal={hideEditFoodModal} />}


      <Routes>

        {/* ******************* Site Routes *******************  */}
        <Route exact path="/" element={
          <>
          <Banner />

          <Categories />

          <RandomFact />

          <WhyUs />

          <Contact />

          </>
        } />
        <Route path="/food-page" element={<FoodPage />} />
        <Route path="/all" element={<AllFoods />} />
        <Route path="/search" element={<SearchPage />} />
        <Route exact path="/payment-page" element={<PaymentPage />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />



        {/* ******************* Admin Panel Routes *******************  */}
        <Route path="/admin" element={<AdminPanel />}>
          <Route index element={<Dashboard url={url} fetchData={fetchData} />} />
          <Route path="admins" element={<Admins showEditUserModal={showEditUserModal} url={url} fetchData={fetchData} />} />
          <Route path="all-users" element={<Users url={url} showEditUserModal={showEditUserModal} fetchData={fetchData} />} />
          <Route path="all-orders" element={<AllOrders showEditOrderModal={showEditOrderModal} url={url} fetchData={fetchData} />} />
          <Route path="completed-orders" element={<CompletedOrders url={url} fetchData={fetchData} />} />
          <Route path="pending-orders" element={<PendingOrders showEditOrderModal={showEditOrderModal} url={url} fetchData={fetchData} />} />
          <Route path="all-foods" element={<AllAvailableFoods showEditFoodModal={showEditFoodModal} url={url} fetchData={fetchData} />} />
          <Route path="add-food" element={<AddFood url={url} fetchData={fetchData} />} />
          <Route path="payments" element={<Payments url={url} fetchData={fetchData} />} />
        </Route>

      </Routes>
      <Footer />
    </HashRouter>      

    </div>
  );
}

export default App;
