var React = require('react');

var Adder = React.createClass({
    doCallback: function(){
        addItem = {
            text: "Static content for now..."
        };
        this.props.addCallback(addItem);
        return;
    },
    render: function(){
        return(
            <div>
                <h3>Add an item here...</h3>
                <button onClick={this.props.doCallback}>Add ToDo Item</button>
                <h3>Well?  Do it already</h3>
            </div>
        );
    }
});

module.exports = Adder;