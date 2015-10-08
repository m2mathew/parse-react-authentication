'use strict';
var React = require('react');
var Backbone = require('backbone');
var $ = require('jquery');
var HomeComponent = require('./HomeComponent');

module.exports = React.createClass({
    componentWillMount: function() {
        this.props.router.on('route', () => {
            this.forceUpdate();
        });
    },
    componentDidMount: function() {
        $('document').ready(function(){
            $(".button-collapse").sideNav();
        });
    },
    render: function() {
        var currentUser = Parse.User.current();

        var currentUrl = Backbone.history.getFragment();

        var links = [];

        links.push(this.createNavLink('', 'Home'));

        if(currentUser) {
            links.push(this.createNavLink('dashboard', 'Dashboard'));
            links.push(<li key={this.objectId}><a href="#" onClick={this.onLogoutClick}>Logout</a></li>);
            links.push(<li className="displayed-username" key={this.objectId}>{currentUser.getEmail()}</li>);
        }
        else {
            links.push(this.createNavLink('login', 'Login'));
            links.push(this.createNavLink('register', 'Register'));
        }

        return (
            <div className="nav-wrapper light-blue lighten-2">
                <div>
                    <a href="#!" className="brand-logo offset-s1">Parse + Materialize</a>
                </div>
                <a href="#" data-activates="mobile-demo" className="button-collapse">
                    <i className="material-icons">menu</i>
                </a>
                <ul className="right hide-on-med-and-down nav-list">
                  {links}
                </ul>
                <ul className="side-nav" id="mobile-demo">
                  {links}
                </ul>
            </div>
        );
    },
    onLogoutClick: function(e) {
        e.preventDefault();
        Parse.User.logOut();
        this.forceUpdate();

        this.props.router.navigate('', {trigger: true});
    },
    createNavLink: function(url, label) {
        var currentUrl = Backbone.history.getFragment();

        if(currentUrl === url) {
            return (<li className="active" key={this.objectId}><a href={"#"+url}>{label}</a></li>);
        }
        else {
            return (<li key={this.objectId}><a href={"#"+url}>{label}</a></li>);
        }
    }
});
