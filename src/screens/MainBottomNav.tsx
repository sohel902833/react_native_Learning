import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Home from './Home';
import Inbox from './Inbox';
import QrScanner from './QrScanner';
import EntypoIcon from 'react-native-vector-icons/Entypo';

const NormalTab = ({
  focused,
  title,
  iconName,
}: {
  focused: boolean;
  title: string;
  iconName: string;
}) => {
  return (
    <View style={{alignItems: 'center'}}>
      <EntypoIcon
        name={iconName}
        color={focused ? '#e32f45' : '#748c94'}
        size={focused ? 24 : 22}
      />
      <Text
        style={
          focused ? {color: '#e32f45', fontWeight: 'bold'} : {color: '#748c94'}
        }>
        {title}
      </Text>
    </View>
  );
};

const CustomTabBarButton = ({onPress, children}: any) => {
  return (
    <TouchableOpacity
      style={{
        top: -30,
        justifyContent: 'center',
        alignItems: 'center',
        ...styles.shadow,
      }}
      onPress={onPress}>
      <View
        style={{
          width: 70,
          height: 70,
          borderRadius: 35,
          backgroundColor: '#e32f54',
        }}>
        {children}
      </View>
    </TouchableOpacity>
  );
};

const Tab = createBottomTabNavigator();

const MainBottomNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: '#ffffff',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          height: 70,
          ...styles.shadow,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <NormalTab focused={focused} iconName="home" title="HOME" />
          ),
        }}
      />
      <Tab.Screen
        name="QrScanner"
        component={QrScanner}
        options={{
          tabBarIcon: ({focused}) => (
            <EntypoIcon
              name={'home'}
              color={'#ffffff'}
              size={focused ? 30 : 28}
            />
          ),
          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={Inbox}
        options={{
          tabBarIcon: ({focused}) => (
            <NormalTab focused={focused} iconName="box" title="INBOX" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#00000099',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 3.5,
    shadowRadius: 5,
    elevation: 10,
  },
});

export default MainBottomNav;
