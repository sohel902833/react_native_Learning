import {Pressable, Text} from 'react-native';

const CustomButton = () => {
  return (
    <Pressable
      style={{
        marginBottom: 10,
        backgroundColor: 'green',
        padding: 15,
        borderRadius: 10,
      }}>
      <Text style={{color: 'white'}}>Go Back to Screen A</Text>
    </Pressable>
  );
};

export default CustomButton;
