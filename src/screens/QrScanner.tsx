import AsyncStorage from '@react-native-async-storage/async-storage';
import {StyleSheet} from 'react-native';
import {Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import CustomButton from '../components/Buttons/CustomButton';
import {removeUserInfo} from '../feature/auth/authSlice';
import {AUTH_TOKEN_KEY} from '../utils/constant/Constant';

const QrScanner = () => {
  const dispatch = useDispatch();
  const logoutUser = async () => {
    await AsyncStorage.removeItem(AUTH_TOKEN_KEY);
    dispatch(removeUserInfo());
  };
  return (
    <View style={styles.container}>
      <Text>QrScanner Page</Text>
      <CustomButton title="Logout" onPress={logoutUser} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default QrScanner;
