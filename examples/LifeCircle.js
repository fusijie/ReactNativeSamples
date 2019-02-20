import React, { Component } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});

/**
 * Mounting
 * Updating
 * Unmounting
 * https://raw.githubusercontent.com/crazycodeboy/RNStudyNotes/master/React%20Native%E4%B9%8BReact%E9%80%9F%E5%AD%A6%E6%95%99%E7%A8%8B/images/component-lifecycle.jpg
 */
class LifeCirle extends Component {
  state = {
    count: 1
  };
  constructor(props) {
    super(props);
    console.log("---constructor---");
  }

  componentWillMount() {
    console.log("---componentWillMount---");
  }

  componentDidMount() {
    console.log("---componentDidMount---");
  }

  componentWillReceiveProps(nextProps) {
    console.log("---componentWillReceiveProps---");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("---shouldComponentUpdate---");
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("---componentWillUpdate---");
  }

  componentDidUpdate(nextProps, nextState) {
    console.log("---componentDidUpdate---");
  }

  componentWillUnmount() {
    console.log("---componentWillUnmount---");
  }

  render() {
    console.log("---render---");
    return (
      <Text
        onPress={() => {
          this.setState({
            count: this.state.count + 1
          });
        }}
      >
        Hello, LifeCirle {this.state.count}!
      </Text>
    );
  }
}

export default class App extends Component {
  state = { remove: false };

  render() {
    let view = this.state.remove ? null : <LifeCirle />;

    return (
      <View style={styles.container}>
        <Text
          onPress={() => {
            this.setState({
              remove: !this.state.remove
            });
          }}
        >
          点击移除/添加
        </Text>
        {view}
      </View>
    );
  }
}
