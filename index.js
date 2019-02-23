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
// import App from "./examples/RNAnimated";
// import App from "./examples/RNLayoutAnimation";
// import App from "./examples/RNTimeout";
// import App from "./examples/DefineComponent";
// import App from "./examples/LifeCircle";
// import App from "./examples/RNImport";
// import App from "./examples/Props";
// import App from "./examples/State";
// import App from "./examples/Ref";
// import App from "./examples/Class";
// import App from "./examples/Flexbox";
import App from "./examples/ReactNavigation";
// import App from "./examples/ReactNavigationLifeCircle";
// import App from "./examples/ReactNavigationModal";

AppRegistry.registerComponent(appName, () => App);
