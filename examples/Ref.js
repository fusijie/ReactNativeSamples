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

class NewComponent extends Component {
  state = {
    size: 80
  };

  getSize() {
    return this.state.size;
  }

  render() {
    return (
      <View>
        <Text
          style={{ textAlign: "center", margin: 20 }}
          onPress={() => {
            this.setState({ size: this.state.size + 10 });
          }}
        >
          点击
        </Text>
        <Image
          source={require("../assets/logo.png")}
          style={{ width: this.state.size, height: this.state.size }}
        />
      </View>
    );
  }
}

export default class App extends Component {
  state = {
    size: 0
  };

  componentDidMount() {
    this.getNewComponentSize();
  }

  getNewComponentSize() {
    // let size = this.refs.ref_new_component.getSize();
    let size = this.ref_new_component.getSize();
    this.setState({ size: size });
  }

  render() {
    return (
      <View style={styles.container}>
        <NewComponent
          // ref="ref_new_component"
          ref={ref_new_component =>
            (this.ref_new_component = ref_new_component)
          }
        />
        <Text
          style={{ textAlign: "center", margin: 20 }}
          onPress={() => {
            this.getNewComponentSize();
          }}
        >
          当前大小是{this.state.size}
        </Text>
      </View>
    );
  }
}
