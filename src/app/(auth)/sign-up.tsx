import { View, Text } from "react-native";
import { Link } from "expo-router";

const SignUpScreen = () => {
  return (
    <View>
      <Text>SignUpScreen</Text>
      <Link href={"/(auth)/sign-in"}>Sign In</Link>
    </View>
  );
};

export default SignUpScreen;
