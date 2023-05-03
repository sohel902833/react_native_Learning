import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ScreenA from './screens/ScreenA';
import ScreenB from './screens/ScreenB';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Screen_A"
          component={ScreenA}
          options={{
            header: () => null,
          }}
        />
        <Stack.Screen
          name="Screen_B"
          component={ScreenB}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
