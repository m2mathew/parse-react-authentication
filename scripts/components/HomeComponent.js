var React = require('react');

module.exports = React.createClass({
    render: function() {
        return (
            <div className="container">
                <div className="row">
                <h1>Home</h1>
                </div>
                <div className="home-pic">
                    <img src="https://d13yacurqjgara.cloudfront.net/users/255/screenshots/2249815/falcon.gif"/>
                    <div><small>original artwork by Rogie King from Helena, Montana</small></div>
                    <div><small>hesitantly borrowed from his curated collection at dribbble.com</small></div>
                </div>
            </div>
        );
    }
});
