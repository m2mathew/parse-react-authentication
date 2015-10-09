var React = require('react');
var Backbone = require('backbone');
var _ = require('backbone/node_modules/underscore');
var DashButtonComponent = require('./DashButtonComponent');
var DashBoxComponent = require('./DashBoxComponent');


module.exports = React.createClass({
    componentWillMount: function() {
        this.dispatcher = {};
        _.extend(this.dispatcher, Backbone.Events);

    },
    render: function() {
        return (
            <div className="container">
                <div className="row col s8 m10">
                    <h1>Dashboard</h1>

                    <div className ="row button-clicking-box">
                        <DashButtonComponent dispatcher={this.dispatcher} />
                        <DashBoxComponent dispatcher={this.dispatcher} />
                    </div>
                    <div className="home-pic">
                        <img src="https://d13yacurqjgara.cloudfront.net/users/150724/screenshots/1888488/149_x-wing_1x.png"/>
                        <div><small>original artwork by Marko Stupic from Croatia</small></div>
                        <div><small>hesitantly borrowed from his nifty collection at dribbble.com</small></div>
                    </div>
                </div>
            </div>
        );
    }
});
