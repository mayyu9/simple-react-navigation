import { createStackNavigator } from 'react-navigation'

import Login from '../screens/Signin'

const LoggedOutNavigator = createStackNavigator({
  Login: {
    screen: Login
  }
});

export default LoggedOutNavigator
