/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import ES6Test from "./Demo/ES6Test";

// AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => ES6Test);
