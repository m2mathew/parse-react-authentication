'use strict';
var React = require('react');

module.exports = React.createClass({
    getInitialState: function() {
        return {
            error: null
        }
    },
    render: function() {
        console.log('render', this.state.error);
        return (
            <div className="container">
                <h1>REGISTER</h1>
                <p className="red-text">{this.state.error}</p>
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

                    <button className="waves-effect waves-light btn blue darken-3">Register</button>

                    </form>
            </div>
        );
    },
    onRegister: function(e) {
        e.preventDefault();
        var email = this.refs.email.getDOMNode().value;
        var password = this.refs.password.getDOMNode().value;
        console.log(email, password);

        var user = new Parse.User();
        user.set('username', email);
        user.set('password', password);
        user.set('email', email);

        user.signUp(null, {
            success: (user) => {
                console.log(user);
                this.setState({
                    error: null
                });
                this.props.router.navigate('', {trigger: true});
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
