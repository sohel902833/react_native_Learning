import Post from "./Post";
import Video from "./Video";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Entypo,
  Ionicons,
  AntDesign,
  Feather,
  FontAwesome5,
} from "@expo/vector-icons";
import Profile from "./Profile";
const Tab = createBottomTabNavigator();

const Home = ({ navigation, route: parentRoute }) => {
  const handleTabScreenOptions = ({ route }) => {
    return {
      tabBarIcon: ({ color, focused, size }) => {
        if (route?.name === "Post") {
          if (focused) {
            return <Entypo name="home" size={24} color="black" />;
          } else {
            return <Ionicons name="home-outline" size={24} color="black" />;
          }
        } else if (route?.name === "Video") {
          if (focused) {
            return <AntDesign name="youtube" size={24} color="black" />;
          } else {
            return <Feather name="youtube" size={24} color="black" />;
          }
        }
      },
    };
  };
  return (
    <Tab.Navigator screenOptions={handleTabScreenOptions}>
      <Tab.Screen name="Post" component={Post} />
      <Tab.Screen name="Video" component={Video} />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused, size }) => {
            if (focused) {
              return <FontAwesome5 name="user-alt" size={24} color="black" />;
            } else {
              return <FontAwesome5 name="user" size={24} color="black" />;
            }
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Home;
