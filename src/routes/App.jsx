// usar comando rafce 
import { render } from "react-dom";
import React from 'react';
import '../styles/global.css';

import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout  from '../containers/Layout';


import Header from '../components/Header';



import Home from '../pages/Home';
import  Login  from '../pages/Login';
import RecoveryPassword from '../pages/RecoveryPassword';
import Account from '../pages/Account';
import CreateAccount from '../pages/CreateAccount';
import Newpassword from '../pages/Newpassword';
import Emailsending from '../pages/Emailsending';
import Orders from '../pages/Orders';
import Checkout from '../pages/Checkout';
import NotFound from '../pages/NotFound';
import Orders from "../pages/Orders";







import '../styles/global.scss';

function App() {
  return (
    <BrowserRouter>
        <Layout>
        <Header></Header>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/RecoveryPassword" element={<RecoveryPassword />} />
          <Route path="/Account" element={<Account/>}></Route>
          <Route path="/CreateAccount" element={<CreateAccount/>}></Route>
          <Route path="/Newpassword" element={<Newpassword/>}></Route>
          <Route path="/Emailsending" element={<Emailsending/>}></Route>
          <Route path="/Orders" element={<Orders/>}></Route>
                    
          <Route path="*" element={<NotFound />} />
      </Routes>
        </Layout>
    </BrowserRouter>
  )
}

export default App;