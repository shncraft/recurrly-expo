import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const SignInScreen = () => {
  return (
    <View>
      <Text>SignInScreen</Text>
      <Link href={"/(auth)/sign-up"}>Create Account</Link>
      <Link href={"/"}>Go back</Link>
    </View>
  );
};

export default SignInScreen;
