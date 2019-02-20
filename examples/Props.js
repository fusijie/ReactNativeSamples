import React, { Component } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});

class NewComponent extends Component {
  static defaultProps = {
    name: "小红",
    age: 20
  };

  static propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    sex: PropTypes.string.isRequired
  };

  render() {
    return (
      <View style={{ margin: 10 }}>
        <Text>姓名：{this.props.name}</Text>
        <Text>年龄：{this.props.age}</Text>
        <Text>性别：{this.props.sex}</Text>
      </View>
    );
  }
}

export default class App extends Component {
  render() {
    let params = {
      name: "小张",
      age: 23,
      sex: "男"
    };
    let { name, sex } = params;
    return (
      <View style={styles.container}>
        <NewComponent name="小明" sex="男" />
        <NewComponent {...params} />
        <NewComponent name={name} sex={sex} />
      </View>
    );
  }
}
