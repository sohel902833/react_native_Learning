import {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

const App = () => {
  const [name, setName] = useState('asdf');
  const handleKeyboardHide = () => {
    Keyboard.dismiss();
  };
  return (
    <TouchableWithoutFeedback onPress={handleKeyboardHide}>
      <View style={styles.container}>
        <Text style={styles.text}>Please Enter Your Name: </Text>
        <TextInput
          value={name}
          style={styles.input}
          placeholder="e.g Sohrab"
          onChangeText={value => setName(value)}
          multiline
          // keyboardType="phone-pad"
          maxLength={10}
          secureTextEntry={true}
        />
        <Text style={styles.text}>Your Name Is: {name}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    width: 200,
    borderColor: '#555',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 20,
    color: 'black',
  },
});
