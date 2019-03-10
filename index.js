/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import App from './App';
//import Root from "./app/Root";
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
