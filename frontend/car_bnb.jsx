const React = require('react')
const ReactDOM = require('react-dom')
const Modal = require("react-modal");


const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const hashHistory = ReactRouter.hashHistory;

const SessionStore = require('./stores/session_store')
const SessionActions = require('./actions/session_actions')

const LoginForm = require('./components/login_form.jsx')
const SignUpForm = require('./components/signup_form.jsx')
const NavBar = require('./components/navbar');
const Search = require('./components/search');
const RootPage = require('./components/root_page')

const App = require('./components/app.jsx')

const appRouter = (
  <Router history={ hashHistory }>
    <Route path="/" component={App} >
      <IndexRoute component={RootPage} />
      <Route path="/login" component={ LoginForm } />
      <Route path="/signup" component={ SignUpForm } />
      <Route path="/cars" component={ Search } />
    </Route>
  </Router>
);

document.addEventListener("DOMContentLoaded", function(){
  const content = document.getElementById('content');
  Modal.setAppElement(document.body);
  ReactDOM.render(appRouter, content);
});
