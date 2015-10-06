var React = require('react');

module.exports = React.createClass({
    render: function() {
        return (
            <div className="col-sm-6">
                <button className="waves-effect waves-light btn-large light-blue lighten-2 white-text" onClick={this.onButtonClick}>Click Me!</button>
            </div>
        );
    },
    onButtonClick: function(e) {
        this.props.dispatcher.trigger('greeting', 'hello');
    }
});
