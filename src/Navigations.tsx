import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './screens/Login';
import MainBottomNav from './screens/MainBottomNav';
import KeepMobileNumber from './screens/send-money/KeepMobileNumber';
import COLORS from './utils/colors';
import KeepPassword from './screens/send-money/KeepPassword';
import ConfirmSendMoney from './screens/send-money/ConfirmSendMoney';
import {useSelector} from 'react-redux';
import RgKeepMobileNumber from './screens/register/RgKeepMobileNumber';
import RgTakeNidFrontPhotoScreen from './screens/register/RgTakeNidFrontPhotoScreen';
import SignupScreen from './screens/register/SignupScreen';
import {useGetCurrentUserQuery} from './feature/auth/authApi';
import {IAuth} from './feature/auth/auth.types';
import {RootStackParamList} from './App';
import ForgetPassword from './screens/forgot-password/ForgetPassword';
const Stack = createStackNavigator<RootStackParamList>();

const Navigations = () => {
  const {isLoading, data} = useGetCurrentUserQuery('');
  const {user} = useSelector((state: {auth: IAuth}) => state.auth);

  const isLoggedIn = user?._id ? true : false;
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!isLoggedIn ? (
          <>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Rg_KeepMobileNumber"
              component={RgKeepMobileNumber}
              options={{
                headerStyle: {
                  backgroundColor: COLORS.PRIMARY,
                },
                headerTintColor: 'white',
                title: 'Signup',
              }}
            />
            <Stack.Screen
              name="Rg_TakeNidFrontPhotoScreen"
              component={RgTakeNidFrontPhotoScreen}
              options={{
                headerStyle: {
                  backgroundColor: COLORS.PRIMARY,
                },
                headerTintColor: 'white',
                title: 'Nid Front Part',
              }}
            />
            <Stack.Screen
              name="SignupScreen"
              component={SignupScreen}
              options={{
                headerStyle: {
                  backgroundColor: COLORS.PRIMARY,
                },
                headerTintColor: 'white',
                title: 'Signup',
              }}
              initialParams={{
                name: '',
                idNo: '',
                dateOfBirth: '',
                mobileNumber: '',
              }}
            />
            <Stack.Screen
              name="Forget_Password"
              component={ForgetPassword}
              options={{
                headerStyle: {
                  backgroundColor: COLORS.PRIMARY,
                },
                headerTintColor: 'white',
                title: 'Forgot Password',
              }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Main_Screen"
              component={MainBottomNav}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="KeepMobileNumber"
              component={KeepMobileNumber}
              options={{
                headerStyle: {
                  backgroundColor: COLORS.PRIMARY,
                },
                headerTintColor: 'white',
              }}
            />
            <Stack.Screen
              name="Keep_Password"
              component={KeepPassword}
              options={{
                headerStyle: {
                  backgroundColor: COLORS.PRIMARY,
                },
                headerTintColor: 'white',
              }}
            />
            <Stack.Screen
              name="Confirm_Send_Money"
              component={ConfirmSendMoney}
              initialParams={{
                phoneNumber: '017xxx',
                amount: '500',
              }}
              options={{
                headerStyle: {
                  backgroundColor: COLORS.PRIMARY,
                },
                headerTintColor: 'white',
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigations;
