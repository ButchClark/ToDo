var React = require('react');
var Searcher = require('Searcher');
var Adder = require('Adder');
var ToDoList = require('ToDoList');
var ToDoItem = require('ToDoItem');


var ToDoApp = React.createClass({
    getInitialState: function(){
        return(
            {
             todos: [
                { key: 1, id: 1, text: "Walk the dog"},
                { key: 2, id: 2, text: "Clean the garage"},
                 { key: 3, id: 3, text: "Read"},
                 { key: 4, id: 4, text: "Sleep"}
                ]
            });
    },
    addToDo: function(todo){
        this.setState(todo.id, todo);
    },
    render: function(){
        var {todos} = this.state;
        return (
            <div>
                <Searcher/><br/>
                <hr/>
                <ToDoList todos={todos} /><br/>
                <hr/>
                <Adder addCallback={this.props.addCallback}/>
            </div>
        )
    }
});

module.exports = ToDoApp;