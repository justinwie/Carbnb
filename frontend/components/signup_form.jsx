const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');

const SignUpForm = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState(){
    return { email: "", password: "", fname: "", lname: ""};
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
    }
  },

  handleSubmit(e) {
		e.preventDefault();

		const formData = {
			email: this.state.email,
			password: this.state.password,
      fname: this.state.fname,
      lname: this.state.lname,
		};

    SessionActions.signUp(formData);
	},

  update(property) {
    return (e) => this.setState({[property]: e.target.value});
  },

	render() {
		return (
			<form onSubmit={this.handleSubmit} className='form'>

        <br />

          <input type="text"
            className="form-input"
            value={this.state.fname}
            placeholder = "First Name"
            onChange={this.update("fname")} />

        <br />

					<input type="text"
            className="form-input"
            value={this.state.lname}
            placeholder = "Last Name"
            onChange={this.update("lname")} />

        <br />

					<input type="text"
            className="form-input"
            value={this.state.email}
            placeholder = "Email Address"
            onChange={this.update("email")} />

        <br />

          <input type="password"
            className="form-input"
            value={this.state.password}
            placeholder = "Password"
            onChange={this.update("password")} />

        <br />
        <button type="submit" className="signup_button">Sign Up</button>
			</form>
		);
	}
});

module.exports = SignUpForm;
