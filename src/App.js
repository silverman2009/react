import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import "./App.css";
import Dashbord from "./components/dashbord/Dashbord";
import SignUpcreditamount from "./components/dashbord/SignUpcreditamount";
import SignUpBussiness from "./components/SignUpBussiness/SignUpBussiness";
import MangeTransactions from "./components/manageTransactions/MangeTransactions";
import ManageRequest from "./components/manageRequest/ManageRequest";
import Layout from "./components/layout/Layout";
import InsertPhoneNumber from "./components/signUpNewUser/InsertPhoneNumber/InsertPhoneNumber";
import SignUpUserNew from "./components/signUpNewUser/FormSignUP/FormSignUpOne";
import SignUpUserNewTwo from "./components/signUpNewUser/FormSignUP/FormSignUpTwo";
import SendCodeNumber from "./components/signUpNewUser/SendCodeNumber/SendCodeNumber";
import CounterOfficeCode from "./components/CounterOfficeCode/CounterOfficeCode";
import ListCustomer from "./components/listCustomer/list";
import BusinessmanageMent from "./components/BusinessmanageMent/BusinessmanageMent.jsx";
import ManageOrganizations from "./components/ManageOrganizations/ManageOrganizations";
import InsertPhoneLogin from "./components/signUpLogin/InsertPhoneNumber/InsertPhoneNumber";
import Login from "./components/signUpLogin/Login/Login";
import { LoginInfoProvider } from "./components/context/LoginInfo";
import VerifyCode from "./components/signUpLogin/SendCodeNumber/SendCodeNumber";
import { TokenVerifyCodeLogin } from "./components/context/TokenVerifyCodeLOgin";
import ManageRequestAdmin from "./components/AdminDashboard/Content/ManageRequest/ManageRequestAdmin"
import ManageOrganitionsAdmin from "./components/AdminDashboard/Content/ManageOrganizations/ManageOrganitionsAdmin"
import ManageUserNormalAdmin from "./components/AdminDashboard/Content/ManageUserNormal/ManageUserNormal";
import ManageBussinessAdmin from './components/AdminDashboard/Content/ManageBussiness/ManageBussinessAdmin';
import ShowInfoBussiness from "./components/AdminDashboard/Content/ManageBussiness/showInfoBussiness/ShowInfoBussiness"
import Success from "./Success"
import Pay from "./Pay"

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <LoginInfoProvider>
          <TokenVerifyCodeLogin>
            <Switch>
              <Route path="/Success" component={Success} />      
              <Route path="/PnBs/pay" component={Pay} />      
              <Route path="/insertPhoneNumber" component={InsertPhoneNumber} />      
              <Route path="/Login" component={Login} />
              <Route path="/VerifyCode"  component={VerifyCode} />
              <Route path="/InsertPhoneLogin" component={InsertPhoneLogin} />
              <Route path="/SendCodeNumber" component={SendCodeNumber} />
              <Route path="/signUpUserNew" component={SignUpUserNew} />
              <Route path="/signUpUserNewTwo" component={SignUpUserNewTwo} />
              <Route path="/SignUpBussiness" component={SignUpBussiness} />
              <Route path="/ManageRequestAdmin" component={ ManageRequestAdmin}/>
              <Route path="/ManageOrganitionsAdmin" component={ ManageOrganitionsAdmin}/>
              <Route path="/ManageUserNormalَAdmin" component={ ManageUserNormalAdmin}/>
              <Route path="/ManageBussinessAdmin" component={ ManageBussinessAdmin}/>
              <Route path="/ShowInfoBussiness" component={ ShowInfoBussiness}/>
              <>
                <Layout>
                  <Route path="/home" component={Dashbord} />
                  <Route path="/ManageRequest" component={ManageRequest} />
                  <Route path="/ListCustomer" component={ListCustomer} />

                  <Route
                    path="/CounterOfficeCode"
                    component={CounterOfficeCode}
                  />
                  <Route
                    path="/SignUpcreditamount"
                    component={SignUpcreditamount}
                  />
                   <Route
                    path="/MangeTransactions"
                    component={MangeTransactions}
                  />
                   <Route
                    path="/BusinessmanageMent"
                    component={BusinessmanageMent}
                  />
                </Layout>
              </>
            </Switch>
          </TokenVerifyCodeLogin>
        </LoginInfoProvider>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
