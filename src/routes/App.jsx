// usar comando rafce 

import React from 'react';


import { BrowserRoute, Switch, router } from 'react-router-dom';
import Layout  from '../containers/Layout';
import  Login  from '../containers/Login';
import '../styles/global.scss';
import RecoveryPassword from '../containers/RecoveryPassword';

const App = () => {
  return (

    //se inserta la estructura Br para encapsular toda la app
    //ahora se usa un switch
    <BrowserRoute>
    <switch>
      <Layout>
      <router exact path="/" component={Home}></router>
        <router exact path="/Login" component={Login}></router>
        <router exact path="/RecoveryPassword" component={RecoveryPassword}></router>
        <router component={NotFound}></router>
      </Layout>
    </switch>
    </BrowserRoute>
  );
}

export default App;