import {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Alert,
  Keyboard,
} from 'react-native';
import CustomButton from '../components/CustomButton';
import {logoImg} from '../utils/assets';
import globalStyle from '../utils/globalStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Login = ({navigation}: any) => {
  const [name, setName] = useState('');

  const setData = async () => {
    if (name.length === 0) {
      Alert.alert('Warning!', 'Please Write Your Name');
    } else {
      try {
        await AsyncStorage.setItem('UserName', name);
        navigation.replace('Home');
      } catch (err) {
        console.log(err);
      }
    }
  };

  const getData = async () => {
    try {
      const userName = await AsyncStorage.getItem('UserName');
      if (userName !== null) {
        navigation.replace('Home');
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const onBodyPress = () => {
    Keyboard.dismiss();
  };
  return (
    <TouchableWithoutFeedback onPress={onBodyPress}>
      <View style={styles.body}>
        <Image source={logoImg} style={styles.logo} />
        <Text style={[globalStyle.bruno, styles.text]}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={value => setName(value)}
        />
        <CustomButton pressHandler={setData}>Login</CustomButton>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Login;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#0080ff',
  },
  logo: {
    width: 200,
    height: 200,
    margin: 20,
  },
  text: {
    fontSize: 40,
    color: 'white',
  },
  input: {
    width: 300,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 10,
    backgroundColor: '#fff',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 130,
    marginBottom: 10,
  },
});
