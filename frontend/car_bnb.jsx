const React = require('react')
const ReactDOM = require('react-dom')

const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const hashHistory = ReactRouter.hashHistory;

const SessionStore = require('./stores/session_store')
const SessionActions = require('./actions/session_actions')

const LoginForm = require('./components/login_form.jsx')
const SignUpForm = require('./components/signup_form.jsx')

const App = require('./components/app.jsx')

const appRouter = (
  <Router history={ hashHistory }>
    <Route path="/" component={ App } >
      <Route path="/login" component={ LoginForm } />
      <Route path="/signup" component={ SignUpForm } />

    </Route>
  </Router>
);

document.addEventListener("DOMContentLoaded", function(){
  const content = document.getElementById('content');
  ReactDOM.render(appRouter, content);
});
