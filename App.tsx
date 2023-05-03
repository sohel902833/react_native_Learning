import {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  Pressable,
} from 'react-native';

const App = () => {
  const [name, setName] = useState('asdf');
  const [submitted, setSubmitted] = useState(false);
  const handleKeyboardHide = () => {
    Keyboard.dismiss();
  };

  const handleSubmit = () => {
    setSubmitted(prev => !prev);
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
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonStyle}
          onPress={handleSubmit}>
          <Text style={styles.buttonText}>
            {submitted ? 'Submit' : 'Clear'}
          </Text>
        </TouchableOpacity>
        <TouchableHighlight
          activeOpacity={0.5}
          style={styles.buttonStyle}
          underlayColor="black"
          onPress={handleSubmit}>
          <Text style={styles.buttonText}>
            {submitted ? 'Submit' : 'Clear'}
          </Text>
        </TouchableHighlight>
        <Pressable
          android_ripple={{color: 'green'}}
          style={styles.buttonStyle}
          onPress={handleSubmit}>
          <Text style={styles.buttonText}>
            {submitted ? 'Submit' : 'Clear'}
          </Text>
        </Pressable>
        {/* <Button title={submitted ? 'Submit' : 'Clear'} onPress={handleSubmit} /> */}
        {submitted && <Text style={styles.text}>Your Name Is: {name}</Text>}
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
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 20,
    color: 'blue',
    fontWeight: 'bold',
  },
  buttonStyle: {
    backgroundColor: 'pink',
    padding: 10,
    borderRadius: 10,
  },
});
