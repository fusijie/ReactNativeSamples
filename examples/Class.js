import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    }
});

class Student {
    constructor(name, sex, age) {
        this.name = name;
        this.sex = sex;
        this.age = age;
    }

    getDescription() {
        return `姓名：${this.name}  性别：${this.sex}  年龄：${this.age}`;
    }
}

class GirlStudent extends Student {
    constructor(name, age) {
        super(name, "女", age);
    }
    getDescription() {
        return super.getDescription() + "!!!";
    }
}

export default class App extends Component {
    constructor(props) {
        super(props);
        this.stu = new Student("小明", "男", 20);
        this.girlStu = new GirlStudent("小红", 18);
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={{ margin: 20 }}>{this.stu.getDescription()}</Text>
                <Text style={{ margin: 20 }}>
                    {this.girlStu.getDescription()}
                </Text>
            </View>
        );
    }
}
