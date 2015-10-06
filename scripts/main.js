'use strict';

var React = require('react');
var Backbone = require('backbone');
window.$ = require('jquery');
window.jQuery = $;
Parse.initialize("ojxAI7TJorc3fVboJ9utxlGJFh3N12NR0qr7JEhp", "oMTauokDLBsa1KvvuKuBwOQaUJAlby6bSZN7QTyM");

var NavigationComponent = require('./components/NavigationComponent');
var HomeComponent = require('./components/HomeComponent');
var DashboardComponent = require('./components/DashboardComponent');
var LoginComponent = require('./components/LoginComponent');
var RegisterComponent = require('./components/RegisterComponent');

var app = document.getElementById('app');
var nav = document.getElementById('nav');

var Router = Backbone.Router.extend({
    routes: {
        '': 'home',
        'dashboard': 'dashboard',
        'login': 'login',
        'register': 'register'
    },
    home: function() {
        React.render(
            <HomeComponent />,
            app
        );
    },
    dashboard: function() {
        var currentUser = Parse.User.current();
        if(currentUser) {
            React.render(
                <DashboardComponent />,
                app
            );
        }
        else {
            React.render(
                <LoginComponent router={r} />,
                app
            );
        }
    },
    login: function() {
        React.render(
            <LoginComponent router={r} />,
            app
        );
    },
    register: function() {
        React.render(
            <RegisterComponent router={r} />,
            app
        );
    }
});

var r = new Router;
Backbone.history.start();

React.render(
    <NavigationComponent router={r} />,
    nav
);
