import {Pressable, Text, View, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const Tab = createBottomTabNavigator();

const ChatScreen = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Chat Screen</Text>
      <Pressable
        style={{
          marginBottom: 10,
          backgroundColor: 'green',
          padding: 15,
          borderRadius: 10,
        }}>
        <Text style={{color: 'white'}}>Go Back to Screen A</Text>
      </Pressable>
    </View>
  );
};
const ConversationScreen = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Conversation Screen</Text>
      <Pressable
        style={{
          marginBottom: 10,
          backgroundColor: 'green',
          padding: 15,
          borderRadius: 10,
        }}>
        <Text style={{color: 'white'}}>Go Back to Screen A</Text>
      </Pressable>
    </View>
  );
};

const ScreenB = ({navigation}: any) => {
  const handleClick = () => {
    navigation.goBack();
  };
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size, focused}) => {
          let iconName;
          size = focused ? 25 : 20;
          color = focused ? '#f0f' : '#555';
          if (route.name === 'Chat') {
            iconName = 'autoprefixer';
          } else if (route.name === 'Conversation') {
            iconName = 'btc';
          }
          return <FontAwesome5 name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Conversation" component={ConversationScreen} />
    </Tab.Navigator>
  );
};

export default ScreenB;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    color: 'black',
    fontWeight: 'bold',
  },
});
