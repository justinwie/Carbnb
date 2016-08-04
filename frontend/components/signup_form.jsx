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
			<form onSubmit={this.handleSubmit}>

        <br />

        <label> First Name:
          <input type="text"
            value={this.state.fname}
            onChange={this.update("fname")} />
        </label>

        <br />

				<label> Last Name:
					<input type="text"
            value={this.state.lname}
            onChange={this.update("lname")} />
				</label>

        <br />

				<label> Email Address:
					<input type="text"
            value={this.state.email}
            onChange={this.update("email")} />
				</label>

        <br />

				<label> Password:
          <input type="password"
            value={this.state.password}
            onChange={this.update("password")} />
				</label>

        <br />
				<input type="submit" value="Sign Up" />
			</form>
		);
	}
});

module.exports = SignUpForm;
