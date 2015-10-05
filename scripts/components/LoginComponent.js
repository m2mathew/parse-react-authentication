'use strict';
var React = require('react');

module.exports = React.createClass({
    render: function() {
        return (
            <div className="container">
                <h1>LOGIN</h1>

                <form className="col s12" onSubmit={this.onRegister}>
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

                    <button className="waves-effect waves-light btn">Login</button>

                </form>
            </div>
        );
    },
    onRegister: function(e) {
        e.preventDefault();
        console.log('the login button was clicked');

        var email = this.refs.email.getDOMNode().value;
        var password = this.refs.password.getDOMNode().value;

        // var user = new Parse.User();
        // user.set('username', email);
        // user.set('password', password);
        // user.set('email', email);

        Parse.User.logIn(email, password, {
            success: (user) => {
                console.log(user);
                this.props.router.navigate('dashboard', {trigger: true});
            },
            error: (user, err) => {
                console.log(user, err);
                this.setState({
                    error: err.message
                });
            }
        });
    }
});
