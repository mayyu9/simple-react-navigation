 import React, {Component} from "react";
 import { View, StyleSheet } from "react-native";
 import { Card, Button, FormLabel, FormInput } from "react-native-elements";
 import { login } from '../api/auth'

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.onLogin = this.onLogin.bind(this);
  }

  async onLogin() {
    await login();
    this.props.navigation.navigate('Dashboard');
  }

  render() {
    return (
      <View style={styles.base}>
        <Button
          title='Login'
          onPress={this.onLogin}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

// import { onSignIn } from "../auth";
//
// const Signin = ({ navigation }) => (
//   <View style={{ paddingVertical: 20 }}>
//     <Card>
//       <FormLabel>Email</FormLabel>
//       <FormInput placeholder="Email address..." />
//       <FormLabel>Password</FormLabel>
//       <FormInput secureTextEntry placeholder="Password..." />
//
//       <Button
//         buttonStyle={{ marginTop: 20 }}
//         backgroundColor="#03A9F4"
//         title="SIGN IN"
//         onPress={() => {
//           onSignIn().then(() => navigation.navigate("SignedIn"));
//         }}
//       />
//     </Card>
//   </View>
// );
//
// export default Signin;
