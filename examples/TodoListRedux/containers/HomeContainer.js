import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";

import { changeTodoStatus, addNewTodo, filterTodoList } from "../actions/index";

import TodoListComponent from "../components/TodoListComponent";
import TodoFormComponent from "../components/TodoFormComponent";
import TodoFilterComponent from "../components/TodoFilterComponent";

class HomeContainer extends Component {
    toggleTodo(id) {
        let { dispatch } = this.props;
        dispatch(changeTodoStatus(id));
    }

    addTodo(text) {
        let { dispatch } = this.props;
        dispatch(addNewTodo(text));
    }

    filterTodo(filter) {
        let { dispatch } = this.props;
        dispatch(filterTodoList(filter));
    }

    render() {
        return (
            <View>
                <TodoListComponent
                    todoList={this.props.todoList}
                    toggleTodo={id => {
                        this.toggleTodo(id);
                    }}
                />
                <TodoFormComponent
                    addTodo={text => {
                        this.addTodo(text);
                    }}
                />
                <TodoFilterComponent
                    filter={this.props.currentFilter}
                    filterTodo={filter => {
                        this.filterTodo(filter);
                    }}
                />
            </View>
        );
    }
}

const getFilterTodos = (todos, filter) => {
    switch (filter) {
        case "All":
            return todos;
        case "Undo":
            return todos.filter(todo => !todo.status);
        case "Finish":
            return todos.filter(todo => todo.status);
        default:
            throw new Error("Unknown filter: " + filter);
    }
};

function mapStateToProps(state) {
    return {
        todoList: getFilterTodos(state.todos, state.filter),
        currentFilter: state.filter
    };
}

export default connect(mapStateToProps)(HomeContainer);
