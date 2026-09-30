import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-green-500">
        Welcome to Nativewind!
      </Text>
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

      <Link href={"/subscriptions/spotify"}>Spotify Subscription</Link>
      <Link
        href={{
          pathname: "/subscriptions/[id]",
          params: { id: "claude" },
        }}
      >
        Claude Max Subscription
      </Link>
    </View>
  );
}
