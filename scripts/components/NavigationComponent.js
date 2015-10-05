'use strict';
var React = require('react');
var HomeComponent = require('./HomeComponent');

module.exports = React.createClass({
    render: function() {
        var currentUser = Parse.User.current();

        var links = [];

        if(currentUser) {
            links.push(<li><a href="#dashboard" key={this.indexOf}>Dashboard</a></li>);
            links.push(<li><a href="#logout" onClick={this.onLogoutClick} key={this.indexOf}>Logout</a></li>);
            links.push(<li className="displayed-username" key={this.indexOf}>{currentUser.getEmail()}</li>);
        }
        else {
            links.push(<li><a href="#login" key={this.indexOf}>Login</a></li>);
            links.push(<li><a href="#register" key={this.indexOf}>Register</a></li>);
        }

        return (
            <div className="nav-wrapper light-blue lighten-2">
                <div><a href="#!" className="brand-logo offset-s1">Parse + Materialize</a></div>
                <ul className="right hide-on-med-and-down nav-list">
                  <li><a href="#">Home</a></li>
                  {links}
                </ul>
            </div>
        );
    },
    onLogoutClick: function() {
        Parse.User.logOut();
        this.forceUpdate();

        var currentUser = Parse.User.current();
        React.render(
            <HomeComponent />,
            app
        );
    }
});
