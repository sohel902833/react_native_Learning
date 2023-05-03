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
  Alert,
  ToastAndroid,
  Modal,
} from 'react-native';

const App = () => {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [enableModal, setEnableModal] = useState(false);
  const handleKeyboardHide = () => {
    Keyboard.dismiss();
  };

  const handleSubmit = () => {
    if (name?.length > 3) {
      setSubmitted(prev => !prev);
    } else {
      setEnableModal(true);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handleKeyboardHide}>
      <View style={styles.container}>
        <Modal
          hardwareAccelerated
          animationType="slide"
          transparent={true}
          visible={enableModal}
          onRequestClose={() => setEnableModal(false)}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text>The name must have 3 characters long.</Text>
            </View>
          </View>
        </Modal>
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
    backgroundColor: 'white',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000010',
  },
  modalContent: {
    backgroundColor: 'white',
    width: 300,
    height: 300,
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
