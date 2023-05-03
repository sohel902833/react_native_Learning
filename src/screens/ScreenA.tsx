import {Pressable, Text, View, StyleSheet} from 'react-native';
import globalStyle from '../utils/globalStyle';
const ScreenA = ({navigation}: any) => {
  const handleClick = () => {
    navigation.navigate('Screen_B');
  };
  return (
    <View style={styles.body}>
      <Text style={[styles.text, globalStyle.dancingScript]}>
        Article Screen
      </Text>
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
