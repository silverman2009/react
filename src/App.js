import Layout from "./components/Layout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreateNewCategory from "./components/CreateNewCategory";
import CreateNewChanel from "./components/CreateNewChanel";
import GroupNote from "./components/GroupNote";
import UserProfile from "./components/UseProfile";
import Home from "./components/Home";
import ListCustomer from "./components/listCustomer/list";
import ListCustomerNotActivate from "./components/listCustomer/ListCustomerNotActivate";
import CategoryCustomer from "./components/categoryCustomer/CategoryCustomer";
import { WriteProvider } from "./components/context/WriteComponentContext";
import Profile from "./components/Profle/Profile";
import "./App.css";
const App = () => {
  return (
    <Router>
      <WriteProvider>
        <Layout />
        <Switch>
          <>
            <div className="margin__right">
              <Route exact path="/" component={Home} />
              <Route path="/CreateNewCategory" component={CreateNewCategory} />
              <Route path="/CreateNewChanel" component={CreateNewChanel} />
              <Route path="/GroupNote" component={GroupNote} />
              <Route path="/UserProfile" component={UserProfile} />
              <Route path="/Profile" component={Profile} />
              <Route path="/ListCustomer" component={ListCustomer} />
              <Route
                path="/ListCustomerNotActivate"
                component={ListCustomerNotActivate}
              />
              <Route path="/CategoryCustomer" component={CategoryCustomer} />
            </div>
          </>
        </Switch>
      </WriteProvider>
    </Router>
  );
};

export default App;
