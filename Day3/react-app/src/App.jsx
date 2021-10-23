import { Route, Redirect, Switch } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Students } from "./Pages/Students";
import { Users } from "./Pages/Users";
import { UserDetails } from "./Pages/UserDetails";
import { ContactUs } from "./Pages/ContactUs";

export const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/students">
            <Students />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
          <Route path="/users/:id">
            <UserDetails />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Redirect to="/students" />
          </Route>
        </Switch>
      </div>
    </>
  );
};
