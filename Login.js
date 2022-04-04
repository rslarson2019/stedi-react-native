import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import { View, Text, Button } from "react-native";

//const [phoneNumber, setPhoneNumber] = useState("");
//const [oneTimePassword, setOneTimePassword] = useState("");

export default function Login(props) {
  const [phoneNumber, setPhoneNumber] = useState(phoneNumber);
  const [oneTimePassword, setOneTimePassword] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View>
      <Text style={styles.login}>Log in to continue</Text>
      <TextInput
        style={styles.input}
        onChangeText={setPhoneNumber}
        value={phoneNumber}
        placeholder="Phone Number"
        //keyboardType="numeric"
      />
      <Button
        style={styles.input}
        title="Generate Password"
        onPress={() => {
          fetch("https://dev.stedi.me/twofactorlogin/" + phoneNumber, {
            method: "POST",
            headers: {
              Accept: "application/text",
              "Content-Type": "application/text",
            },
          });
          
        }}
      ></Button>
      <TextInput
        style={styles.input}
        onChangeText={setOneTimePassword}
        value={oneTimePassword}
        placeholder="One-Time Password"
        keyboardType="numeric"
      />
      <Button
        style={styles.input}
        title="Log In"
        onPress={() => {
          fetch("https://dev.stedi.me/twofactorlogin/", {
            method: "POST",
          body:JSON.stringify(
            {
              phoneNumber:phoneNumber,
              password:oneTimePassword
            }),
            
          });
          //const token = Response.JSON();
            setUserLoggedIn(true);
        }}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  login: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    backgroundColor: "green",
    height: "18%",
    alignItems: "flex-end",
    paddingTop: 50,
    paddingLeft: 95,
    paddingRight: 10,
    fontSize: 30,
  },
  input: {
    height: "15%",
    fontSize: 23,
  },
});