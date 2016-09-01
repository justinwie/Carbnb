const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');

const LoginForm = React.createClass({
  contextTypes: {
		router: React.PropTypes.object.isRequired
	},

  getInitialState(){
    return { email: "", password: "" };
  },

  componentDidMount() {
    this.errorListener = ErrorStore.addListener(this.forceUpdate.bind(this));
    this.sessionListener = SessionStore.addListener(this.redirectIfLoggedIn);
  },

  componentWillUnmount() {
    this.errorListener.remove();
    this.sessionListener.remove();
  },

  redirectIfLoggedIn() {
    if (SessionStore.isUserLoggedIn()) {
      this.context.router.push("/");
      this.props.closeModal();
    }
  },

  handleGuestLogin(e){
    e.preventDefault();

    const guestData = {
			email: "guest@email.com",
			password: "password"
		};

    SessionActions.logIn(guestData);
  },

	handleSubmit(e) {
		e.preventDefault();

		const formData = {
			email: this.state.email,
			password: this.state.password
		};

    SessionActions.logIn(formData);

	},

  update(property) {
    return (e) => this.setState({[property]: e.target.value});
  },

	render() {
		return (
			<form onSubmit={this.handleSubmit} className='form'>

        <br />

					<input type="text" id="focus-me"
            value={this.state.email}
            className="form-input"
            placeholder = "Email Address"
            onChange={this.update("email")} />

        <br />

          <input type="password"
            value={this.state.password}
            className="form-input"
            placeholder = "Password"
            onChange={this.update("password")} />

        <br />
        <button className="login_button" type="submit">Log In</button>
        <button className="login_button" onClick={this.handleGuestLogin}>Guest Login</button>
			</form>
		);
	}
});



module.exports = LoginForm;
