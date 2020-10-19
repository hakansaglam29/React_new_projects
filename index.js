/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Login from './src/login_lesson/Login';
import News from './src/news_lesson/News';
import Virtual from './src/virtualized_lesson/virtualized_lesson';
import Class from './src/Class_lesson/Class';
import Todo from './src/todo_grup/todo';
import Todo_ezran from './src/todo_lesson/todo_ezran';
import PB from './src/Portfolio_input_button/portfolioBuilding';
import Search_Product from './src/search_product/search_product';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Todo_ezran);