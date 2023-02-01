import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChatScreen from "../chat/ChatScreen";
import HomeScreen from "../home/Home";
import ReviewDetailsScreen from "../ReviewDetail/ReviewDetails";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "blue",
          },
          headerTintColor: "white",
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="ReviewDetails"
          component={ReviewDetailsScreen}
          options={({ route }) => ({
            title: route?.params?.title
              ? route?.params?.title
              : "Custom Review Details",
          })}
        />
        <Stack.Screen name="Chat" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeStack;
