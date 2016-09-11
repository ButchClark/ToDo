var React = require('react');

var ToDoItem = React.createClass({
    render: function () {
        var {id, text} = this.props;
        return (
            <div>
                <p>{id}.  {text}</p>
            </div>
        );
    }
});

module.exports = ToDoItem;