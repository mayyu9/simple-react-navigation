import { createStackNavigator, createAppContainer } from 'react-navigation'

import Login from '../components/Login'

const LoggedOutNavigator = createStackNavigator({
  Login: {
    screen: Login
  }
});

export default createAppContainer(LoggedOutNavigator);
