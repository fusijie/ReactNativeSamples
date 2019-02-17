/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";

// import App from "./App";
// import App from "./examples/HelloWorld";
// import App from "./examples/SimpleAppMovies";
// import App from "./examples/RNImage";
import App from "./examples/RNAnimated";

AppRegistry.registerComponent(appName, () => App);
