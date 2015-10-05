'use strict';
var React = require('react');

module.exports = React.createClass({
    render: function() {
        return (
            <div className="nav-wrapper blue">
                <a href="#!" className="brand-logo offset-s1">Parse + Materialize</a>
                <ul className="right hide-on-med-and-down">
                  <li><a href="#">Home</a></li>
                  <li><a href="#dashboard">Dashboard</a></li>
                  <li><a href="#login">Login</a></li>
                  <li><a href="#register">Register</a></li>
                </ul>
            </div>
        );
    }
});
