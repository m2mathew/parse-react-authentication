'use strict';
var React = require('react');

module.exports = React.createClass({
    getInitialState: function() {
        return {
            error: null
        }
    },
    render: function() {
        return (
            <div className="container">
                <h1>LOGIN</h1>
                <p className="red-text">{this.state.error}</p>

                <form className="col s12" onSubmit={this.onLogin}>
                    <div className="row">
                      <div className="input-field col s12">
                        <input id="email" type="email" className="validate" ref=
                    "email" />
                        <label>Email</label>
                      </div>
                    </div>

                    <div className="row">
                      <div className="input-field col s12">
                        <input id="password" type="password" className="validate" ref="password" />
                        <label>Password</label>
                      </div>
                    </div>

                    <button className="waves-effect waves-light btn blue darken-3">Login</button>
                </form>
            </div>
        );
    },
    onLogin: function(e) {
        e.preventDefault();

        var email = this.refs.email.getDOMNode().value;
        var password = this.refs.password.getDOMNode().value;

        Parse.User.logIn(email, password, {
            success: (user) => {
                this.props.router.navigate('dashboard', {trigger: true});
            },
            error: (user, err) => {
                this.setState({
                    error: err.message
                });
            }
        });
    }
});
