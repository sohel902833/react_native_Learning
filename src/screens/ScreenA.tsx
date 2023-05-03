import {Pressable, Text, View, StyleSheet} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const BlockedAccountsScreen = ({navigation}: any) => {
  const handleClick = () => {
    navigation.navigate('Screen_B');
  };
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Blocked Account Screen A</Text>
      <Pressable
        onPress={handleClick}
        style={{
          marginBottom: 10,
          backgroundColor: 'green',
          padding: 15,
          borderRadius: 10,
        }}>
        <Text style={{color: 'white'}}>Go to Screen B</Text>
      </Pressable>
    </View>
  );
};
const ArticleScreen = ({navigation}: any) => {
  const handleClick = () => {
    navigation.navigate('Screen_B');
  };
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Article Screen</Text>
      <Pressable
        onPress={handleClick}
        style={{
          marginBottom: 10,
          backgroundColor: 'green',
          padding: 15,
          borderRadius: 10,
        }}>
        <Text style={{color: 'white'}}>Go to Screen B</Text>
      </Pressable>
    </View>
  );
};

const ScreenA = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerPosition: 'right',
      }}>
      <Drawer.Screen name="BlockedAccounts" component={BlockedAccountsScreen} />
      <Drawer.Screen name="Article" component={ArticleScreen} />
    </Drawer.Navigator>
  );
};

export default ScreenA;

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
