import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import 'semantic-ui-css/semantic.css';
import { Roles } from 'meteor/alanning:roles';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Landing from '../pages/Landing';
import MyListing from '../pages/MyListing';
import ListStuffAdmin from '../pages/ListStuffAdmin';
import AddListing from '../pages/AddListing';
import EditListing from '../pages/EditListing';
import NotFound from '../pages/NotFound';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import Signout from '../pages/Signout';
import Deleted from '../pages/Deleted';
import Store from '../pages/Store';
import Saved from '../pages/Saved';
import Home from '../pages/HomePage';
import Profile from '../pages/Profile';
import NotifyAdmin from '../pages/NotifyAdmin';
import IssueAdmin from '../pages/IssueAdmin';
import Feedback from '../pages/Feedback';
import FeedbackAdmin from '../pages/FeedbackAdmin';
import ItemPage from '../pages/ItemPage';
import Guide from '../pages/Guide';
import OtherProfiles from '../pages/OtherProfiles';

/** Top-level layout component for this application. Called in imports/startup/client/startup.jsx. */
class App extends React.Component {
  render() {
    return (
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Landing}/>
              <Route path="/signin" component={Signin}/>
              <Route path="/signup" component={Signup}/>
              <Route path="/store" component={Store}/>
              <Route path="/saved" component={Saved}/>
              <Route path="/profile" component={Profile}/>
              <Route path="/home" component={Home}/>
              <Route path="/notif" component={NotifyAdmin}/>
              <Route path="/feed" component={Feedback}/>
              <Route path="/delete" component={Deleted}/>
              <Route path="/guide" component={Guide}/>
              <Route path="/details/:_id" component={ItemPage}/>
              <Route path="/profiles/:_id" component={OtherProfiles}/>
              <ProtectedRoute path="/list" component={MyListing}/>
              <ProtectedRoute path="/add" component={AddListing}/>
              <ProtectedRoute path="/edit/:_id" component={EditListing}/>
              <AdminProtectedRoute path="/admin" component={ListStuffAdmin}/>
              <AdminProtectedRoute path="/issues" component={IssueAdmin}/>
              <AdminProtectedRoute path="/feedback" component={FeedbackAdmin}/>
              <ProtectedRoute path="/signout" component={Signout}/>
              <Route component={NotFound}/>
            </Switch>
          </div>
        </Router>
    );
  }
}

/**
 * ProtectedRoute (see React Router v4 sample)
 * Checks for Meteor login before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      const isLogged = Meteor.userId() !== null;
      return isLogged ?
          (<Component {...props} />) :
          (<Redirect to={{ pathname: '/signin', state: { from: props.location } }}/>
      );
    }}
  />
);

/**
 * AdminProtectedRoute (see React Router v4 sample)
 * Checks for Meteor login and admin role before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const AdminProtectedRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={(props) => {
          const isLogged = Meteor.userId() !== null;
          const isAdmin = Roles.userIsInRole(Meteor.userId(), 'admin');
          return (isLogged && isAdmin) ?
              (<Component {...props} />) :
              (<Redirect to={{ pathname: '/signin', state: { from: props.location } }}/>
              );
        }}
    />
);

/** Require a component and location to be passed to each ProtectedRoute. */
ProtectedRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.object,
};

/** Require a component and location to be passed to each AdminProtectedRoute. */
AdminProtectedRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.object,
};

export default App;
