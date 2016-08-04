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
    }
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
			<form onSubmit={this.handleSubmit}>

        <br />

				<label> Email:
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
				<input type="submit" value="Submit" />
			</form>
		);
	}
});

module.exports = LoginForm;
