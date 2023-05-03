import {Pressable, Text, View, StyleSheet} from 'react-native';
import globalStyle from '../utils/globalStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';
import CustomButton from '../components/CustomButton';
const ScreenA = ({navigation}: any) => {
  const [name, setName] = useState('');
  const handleClick = () => {
    navigation.navigate('Screen_B');
  };

  const getData = async () => {
    try {
      const userName = await AsyncStorage.getItem('UserName');
      if (userName !== null) {
        setName(userName);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const logoutUser = async () => {
    try {
      await AsyncStorage.clear();
      navigation.replace('Login');
    } catch (error) {}
  };

  return (
    <View style={styles.body}>
      <Text style={[styles.text, globalStyle.bruno]}>Welcome {name} !</Text>
      <CustomButton pressHandler={logoutUser}>Logout</CustomButton>
    </View>
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
  },
});
