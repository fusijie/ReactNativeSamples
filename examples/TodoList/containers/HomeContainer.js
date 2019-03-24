import React, { Component } from "react";
import { View, Text } from "react-native";
import TodoListComponent from "../components/TodoListComponent";
import TodoFormComponent from "../components/TodoFormComponent";

export default class HomeContainer extends Component {
  state = {
    todoList: [
      {
        title: "Eat",
        status: true
      },
      {
        title: "Play",
        status: false
      },
      {
        title: "Sleep",
        status: false
      }
    ]
  };

  toggleTodo(index) {
    let todoList = this.state.todoList;
    let todo = todoList[index];
    if (todo) {
      todo.status = !todo.status;
      this.setState({
        todoList: todoList
      });
    }
  }

  addTodo(text) {
    let todoList = this.state.todoList;
    todoList.push({
      title: text,
      status: false
    });
    this.setState({
      todoList: todoList
    });
  }

  render() {
    return (
      <View>
        <TodoListComponent
          todoList={this.state.todoList}
          toggleTodo={index => {
            this.toggleTodo(index);
          }}
        />
        <TodoFormComponent
          addTodo={text => {
            this.addTodo(text);
          }}
        />
      </View>
    );
  }
}
