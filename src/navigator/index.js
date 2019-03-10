import { createSwitchNavigator, createAppContainer, createStackNavigator } from 'react-navigation'

import LoggedOutNavigator from './LoggedOut'
import LoggedInNavigator from './LoggedIn'

// export const getRootNavigator = (loggedIn = false) => createAppContainer(createSwitchNavigator(
//   {
//     LoggedOut: {
//       screen: LoggedOutNavigator
//     },
//     LoggedIn: {
//       screen: LoggedInNavigator
//     }
//   },
//   {
//     initialRouteName: loggedIn ? 'LoggedIn' : 'LoggedOut'
//   }
// )
// );

const AppNavigator = createStackNavigator({
  LoggedOut: {
    screen: LoggedOutNavigator
  },
  LoggedIn: {
    screen: LoggedInNavigator
  }
},
{initialRouteName: 'LoggedOut'}
)

export default createAppContainer(AppNavigator);
