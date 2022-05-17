import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button} from "react-native";
import React, { useEffect,useState } from "react";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { LogBox } from "react-native";







WebBrowser.maybeCompleteAuthSession();
export default function App() {
  const [loggedIn, setLoggedIn]=useState("");
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId:"811790422557-h7la2ijvl3gj122on9lsnvh7v37319ek.apps.googleusercontent.com",
    webClientId:
      "811790422557-juioe5a483kqrn16fkhuf4pu625he7e4.apps.googleusercontent.com",
  });

  useEffect(() => {
    if (response?.type === "success") {
      const { authentication, type} = response;
      setLoggedIn(type);
    }
  }, [response]);


  return (
    <View style={styles.container}>
      <Button 
      disabled={!request}
      title="login"
      onPress={()=>{
        promptAsync();
      }}
      />
      <Text>{loggedIn==="success"? "LoggedIn":"LoggedOut"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
