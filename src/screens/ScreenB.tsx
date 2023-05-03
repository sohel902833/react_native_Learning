import {Pressable, Text, View, StyleSheet} from 'react-native';
import globalStyle from '../utils/globalStyle';

const ScreenB = ({navigation}: any) => {
  const handleClick = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.body}>
      <Text style={[styles.text, globalStyle.dancingScript]}>
        Conversation Screen
      </Text>
      <Pressable
        onPress={handleClick}
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
  },
});
