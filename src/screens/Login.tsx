import {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ToastAndroid,
  Pressable,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import IconButton from '../components/Buttons/IconButton';
import LoginHeader from '../components/Login/LoginHeader';
import {bkashLogoImg} from '../utils/assets';
import AntIcon from 'react-native-vector-icons/AntDesign';
import COLORS from '../utils/colors';
import InputArea from '../components/TextInputs/InputArea';
import LabeledIconButton from '../components/Buttons/LabeledIconButton';
import {CommonActions, NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../App';
import {useLoginMutation} from '../feature/auth/authApi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AUTH_TOKEN_KEY} from '../utils/constant/Constant';
import {useDispatch} from 'react-redux';
import {setUserInfo} from '../feature/auth/authSlice';
import LoginLinks from '../components/Util/LoginLinks';

interface Props {
  navigation: NavigationProp<RootStackParamList>;
}
const Login: React.FC<Props> = ({navigation}: Props) => {
  const [loginUser, {data, isLoading, isError}] = useLoginMutation();
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const handleLoginUser = async () => {
    const res: any = await loginUser({
      phone,
      password,
    });
    if (res?.data?.user?._id) {
      ToastAndroid.show(res?.data?.message, ToastAndroid.SHORT);
      dispatch(setUserInfo(res?.data?.user));
      await AsyncStorage.setItem(AUTH_TOKEN_KEY, res?.data?.token);
      // navigation.dispatch(
      //   CommonActions.reset({
      //     index: 0,
      //     routes: [{name: 'Main_Screen'}],
      //   }),
      // );
    } else {
      ToastAndroid.show(res?.data?.message, ToastAndroid.SHORT);
    }
    console.log(res, data);
  };

  const navigateToHomePage = () => {
    navigation.navigate('Main_Screen');
  };
  const navigateToRegisterScreen = () => {
    navigation.navigate('Rg_KeepMobileNumber');
  };

  return (
    <View style={styles.body}>
      <LoginHeader />
      <ScrollView>
        <View style={{marginTop: 70, paddingHorizontal: 20}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Image style={{width: 70, height: 70}} source={bkashLogoImg} />
            <IconButton
              onPress={() => {}}
              renderIcon={() => (
                <AntIcon name="qrcode" color={COLORS.PRIMARY} size={70} />
              )}
              variant={'outlined'}
              style={{borderWidth: 0}}
            />
          </View>
          <Text style={styles.screenTitle}>Login Into Your Bkash Account</Text>
          <InputArea
            placeholder="Enter Your Account No."
            label="Account No"
            keyboardType="decimal-pad"
            autoFocus
            value={phone}
            onTextChange={value => setPhone(value)}
          />
          <InputArea
            placeholder="Type Your Password"
            label="Password"
            keyboardType="decimal-pad"
            secureText
            containerStyle={{
              marginTop: 10,
              marginBottom: 40,
            }}
            value={password}
            onTextChange={value => setPassword(value)}
          />
          <LoginLinks />
          <LabeledIconButton
            disabled={isLoading}
            title="Next"
            icon={<AntIcon name="arrowright" color={COLORS.WHITE} size={25} />}
            onPress={handleLoginUser}
            variant={'contained'}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'white',
  },
  screenTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10,
    marginBottom: 30,
  },
  linkArea: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  registerText: {
    color: COLORS.PRIMARY,
    fontWeight: 'bold',
  },
});
