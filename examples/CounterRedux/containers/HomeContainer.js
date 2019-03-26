/*
 * @Author: JackyFu
 * @Date: 2019-03-26 09:22:43
 * @Last Modified by:   JackyFu
 * @Last Modified time: 2019-03-26 09:22:43
 */
import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

class HomeContainer extends Component {
    render() {
        return (
            <View>
                <Text>Hello Redux</Text>
            </View>
        );
    }
}

export default HomeContainer;
