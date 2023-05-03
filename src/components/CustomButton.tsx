import React from 'react';
import {Pressable, Text} from 'react-native';

interface Props {
  children: React.ReactNode;
  pressHandler: () => void;
}

const CustomButton: React.FC<Props> = ({children, pressHandler}) => {
  return (
    <Pressable
      onPress={pressHandler}
      style={{
        marginBottom: 10,
        backgroundColor: 'purple',
        borderRadius: 10,
        paddingHorizontal: 30,
        paddingVertical: 10,
      }}>
      <Text style={{color: 'white', fontSize: 20}}>{children}</Text>
    </Pressable>
  );
};

export default CustomButton;
