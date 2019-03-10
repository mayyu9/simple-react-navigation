import React, {Component} from "react";
import { View,StyleSheet } from "react-native";
import { Card, Button, Text } from "react-native-elements";
//import { onSignOut } from "../auth";
//import React, { Component } from 'react'
//import { View, StyleSheet, Button } from 'react-native'

import { logout } from '../api/auth'

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.onLogout = this.onLogout.bind(this);
  }

  async onLogout() {
    await logout();
    this.props.navigation.navigate('Login');
  }

  render() {
    return (
      <View style={styles.base}>
        <Button
         title='Logout'
         onPress={this.onLogout} />
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
// const Profile = ({ navigation }) => (
//   <View style={{ paddingVertical: 20 }}>
//     <Card title="John Doe">
//       <View
//         style={{
//           backgroundColor: "#bcbec1",
//           alignItems: "center",
//           justifyContent: "center",
//           width: 80,
//           height: 80,
//           borderRadius: 40,
//           alignSelf: "center",
//           marginBottom: 20
//         }}
//       >
//         <Text style={{ color: "white", fontSize: 28 }}>JD</Text>
//       </View>
//       <Button
//         backgroundColor="#03A9F4"
//         title="SIGN OUT"
//         onPress={() => onSignOut().then(() => navigation.navigate("SignedOut"))}
//       />
//     </Card>
//   </View>
// );

//export default Profile;
