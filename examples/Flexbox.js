import React, { Component } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    }
});

/**
 * flexDirection
 */
// export default class App extends Component {
//   render() {
//     return (
//       <View
//         style={{
//           flexDirection: "row-reverse",
//           backgroundColor: "darkgray",
//           marginTop: 50
//         }}
//       >
//         <View
//           style={{
//             width: 40,
//             height: 40,
//             backgroundColor: "darkcyan",
//             margin: 5
//           }}
//         >
//           <Text style={{ fontSize: 16 }}>1</Text>
//         </View>
//         <View
//           style={{
//             width: 40,
//             height: 40,
//             backgroundColor: "darkcyan",
//             margin: 5
//           }}
//         >
//           <Text style={{ fontSize: 16 }}>2</Text>
//         </View>
//         <View
//           style={{
//             width: 40,
//             height: 40,
//             backgroundColor: "darkcyan",
//             margin: 5
//           }}
//         >
//           <Text style={{ fontSize: 16 }}>3</Text>
//         </View>
//         <View
//           style={{
//             width: 40,
//             height: 40,
//             backgroundColor: "darkcyan",
//             margin: 5
//           }}
//         >
//           <Text style={{ fontSize: 16 }}>4</Text>
//         </View>
//       </View>
//     );
//   }
// }

/**
 * flexWrap
 */
// export default class App extends Component {
//   render() {
//     return (
//       <View
//         style={{
//           flexDirection: "row",
//           flexWrap: "wrap",
//           backgroundColor: "darkgray",
//           marginTop: 50
//         }}
//       >
//         <View
//           style={{
//             width: 100,
//             height: 40,
//             backgroundColor: "darkcyan",
//             margin: 5
//           }}
//         >
//           <Text style={{ fontSize: 16 }}>1</Text>
//         </View>
//         <View
//           style={{
//             width: 100,
//             height: 40,
//             backgroundColor: "darkcyan",
//             margin: 5
//           }}
//         >
//           <Text style={{ fontSize: 16 }}>2</Text>
//         </View>
//         <View
//           style={{
//             width: 100,
//             height: 40,
//             backgroundColor: "darkcyan",
//             margin: 5
//           }}
//         >
//           <Text style={{ fontSize: 16 }}>3</Text>
//         </View>
//         <View
//           style={{
//             width: 100,
//             height: 40,
//             backgroundColor: "darkcyan",
//             margin: 5
//           }}
//         >
//           <Text style={{ fontSize: 16 }}>4</Text>
//         </View>
//       </View>
//     );
//   }
// }

/**
 * justifyContent
 * alignItems
 */
// export default class App extends Component {
//   render() {
//     return (
//       <View
//         style={{
//           flexDirection: "row",
//           justifyContent: "center",
//           alignItems: "center",
//           backgroundColor: "darkgray",
//           marginTop: 50,
//           height: 400
//         }}
//       >
//         <View
//           style={{
//             width: 40,
//             height: 40,
//             backgroundColor: "darkcyan",
//             margin: 5
//           }}
//         >
//           <Text style={{ fontSize: 16 }}>1</Text>
//         </View>
//         <View
//           style={{
//             width: 40,
//             height: 40,
//             backgroundColor: "darkcyan",
//             margin: 5
//           }}
//         >
//           <Text style={{ fontSize: 16 }}>2</Text>
//         </View>
//         <View
//           style={{
//             width: 40,
//             height: 40,
//             backgroundColor: "darkcyan",
//             margin: 5
//           }}
//         >
//           <Text style={{ fontSize: 16 }}>3</Text>
//         </View>
//         <View
//           style={{
//             width: 40,
//             height: 40,
//             backgroundColor: "darkcyan",
//             margin: 5
//           }}
//         >
//           <Text style={{ fontSize: 16 }}>4</Text>
//         </View>
//       </View>
//     );
//   }
// }

/**
 * alignSelf
 * 可以重写父视图的alignItems
 */
// export default class App extends Component {
//   render() {
//     return (
//       <View
//         style={{
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "stretch",
//           backgroundColor: "darkgray",
//           marginTop: 50,
//           height: 400
//         }}
//       >
//         <View
//           style={{
//             height: 40,
//             backgroundColor: "darkcyan",
//             margin: 5
//           }}
//         >
//           <Text style={{ fontSize: 16 }}>1</Text>
//         </View>
//         <View
//           style={{
//             width: 40,
//             height: 40,
//             backgroundColor: "darkcyan",
//             margin: 5,
//             alignSelf: "flex-end"
//           }}
//         >
//           <Text style={{ fontSize: 16 }}>2</Text>
//         </View>
//         <View
//           style={{
//             width: 40,
//             height: 40,
//             backgroundColor: "darkcyan",
//             margin: 5,
//             alignSelf: "center"
//           }}
//         >
//           <Text style={{ fontSize: 16 }}>3</Text>
//         </View>
//         <View
//           style={{
//             width: 40,
//             height: 40,
//             backgroundColor: "darkcyan",
//             margin: 5
//           }}
//         >
//           <Text style={{ fontSize: 16 }}>4</Text>
//         </View>
//       </View>
//     );
//   }
// }

/**
 * flex
 * 默认值为0
 */
// export default class App extends Component {
//   render() {
//     return (
//       <View
//         style={{
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "stretch",
//           backgroundColor: "darkgray",
//           marginTop: 50,
//           height: 400
//         }}
//       >
//         <View
//           style={{
//             height: 40,
//             backgroundColor: "darkcyan",
//             margin: 5
//           }}
//         >
//           <Text style={{ fontSize: 16 }}>1</Text>
//         </View>
//         <View
//           style={{
//             width: 40,
//             height: 40,
//             backgroundColor: "darkcyan",
//             margin: 5,
//             alignSelf: "flex-end",
//             flex: 1
//           }}
//         >
//           <Text style={{ fontSize: 16 }}>2</Text>
//         </View>
//         <View
//           style={{
//             width: 40,
//             height: 40,
//             backgroundColor: "darkcyan",
//             margin: 5,
//             alignSelf: "center"
//           }}
//         >
//           <Text style={{ fontSize: 16 }}>3</Text>
//         </View>
//         <View
//           style={{
//             width: 40,
//             height: 40,
//             backgroundColor: "darkcyan",
//             margin: 5
//           }}
//         >
//           <Text style={{ fontSize: 16 }}>4</Text>
//         </View>
//       </View>
//     );
//   }
// }

/**
 * borderWidth & borderColor
 */
// export default class App extends Component {
//   render() {
//     return (
//       <View
//         style={{
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "center",
//           backgroundColor: "darkgray",
//           marginTop: 50,
//           height: 400
//         }}
//       >
//         <View
//           style={{
//             width: 40,
//             height: 40,
//             backgroundColor: "darkcyan",
//             margin: 5,
//             borderWidth: 2,
//             borderColor: "#ff0000"
//           }}
//         >
//           <Text style={{ fontSize: 16 }}>1</Text>
//         </View>
//       </View>
//     );
//   }
// }

/**
 * margin & padding & position
 */
export default class App extends Component {
    render() {
        return (
            <View
                style={{
                    flexDirection: "column",
                    backgroundColor: "darkgray",
                    marginTop: 50,
                    height: 400
                }}
            >
                <View
                    style={{
                        width: 100,
                        height: 100,
                        backgroundColor: "darkcyan",
                        magin: 5,
                        paddingLeft: 10,
                        paddingRight: 10,
                        left: 100
                    }}
                >
                    <View style={{ flex: 1, backgroundColor: "red" }} />
                </View>
            </View>
        );
    }
}
