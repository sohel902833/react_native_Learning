import React from 'react';
import {StyleSheet} from 'react-native';
import {Pressable, Text, View} from 'react-native';
import COLORS from '../../utils/colors';

interface Props {
  icon?: any;
  onPress: () => void;
  variant?: 'contained' | 'outlined';
  color?: 'primary' | 'secondary' | 'danger' | 'purple';
  style?: any;
  renderIcon: (color: string, size: number) => React.ReactNode;
}
const IconButton: React.FC<Props> = ({
  icon,
  onPress,
  variant = 'contained',
  color = 'primary',
  style = {},
  renderIcon,
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
        style,
      ]}
      onPress={onPress}>
      {renderIcon(variant === 'contained' ? 'white' : 'black', 20)}
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 10,
    borderRadius: 50,
  },
});
