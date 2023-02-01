import { createDrawerNavigator } from "@react-navigation/drawer";
import Chat from "../chat/Chat";
const Drawer = createDrawerNavigator();

const ReviewDetails = () => {
  return (
    <Drawer.Navigator initialRouteName="Chat">
      <Drawer.Screen name="Chat" component={Chat} />
    </Drawer.Navigator>
  );
};

export default ReviewDetails;
