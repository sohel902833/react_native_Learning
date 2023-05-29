import React from 'react';
import {StyleSheet} from 'react-native';
import {Pressable, Text, View} from 'react-native';
import COLORS from '../../utils/colors';

interface Props {
  title: string;
  onPress: () => void;
  variant?: 'contained' | 'outlined';
  color?: 'primary' | 'secondary' | 'danger' | 'purple';
  buttonStyle?: any;
}
const CustomButton: React.FC<Props> = ({
  title,
  onPress,
  variant = 'contained',
  color = 'primary',
  buttonStyle,
}) => {
  const getHexColor = () => {
    if (color === 'primary') {
      return COLORS.PRIMARY;
    } else if (color === 'secondary') {
      return COLORS.SECONDARY;
    } else if (color === 'danger') {
      return COLORS.DANGER;
    } else if (color === 'purple') {
      return COLORS.PURPLE;
    }
  };

  return (
    <Pressable
      android_ripple={{color: getHexColor()}}
      style={[
        variant === 'contained'
          ? {backgroundColor: getHexColor()}
          : {borderWidth: 1, borderColor: getHexColor()},
        styles.buttonContainer,
        buttonStyle,
      ]}
      onPress={onPress}>
      <Text
        style={[
          variant === 'contained' ? {color: 'white'} : {color: getHexColor()},
          {fontWeight: 'bold', textAlign: 'center'},
        ]}>
        {title}
      </Text>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  buttonContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
});
