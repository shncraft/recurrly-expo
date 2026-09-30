import { Link } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="flex-1 p-5 bg-background">
      <Text className="text-5xl font-sans-extrabold text-green-500">Home</Text>
      <Link
        href="/onboarding"
        asChild
        className="mt-4 text-background bg-primary p-4 rounded-md"
      >
        <Text>Go to Onboarding</Text>
      </Link>

      <Link
        href="/(auth)/sign-in"
        asChild
        className="mt-4 text-background bg-primary p-4 rounded-md"
      >
        <Text>Go to sign in</Text>
      </Link>
      <Link
        href="/(auth)/sign-up"
        asChild
        className="mt-4 text-background bg-primary p-4 rounded-md"
      >
        <Text>Go to sign up</Text>
      </Link>
    </SafeAreaView>
  );
}
