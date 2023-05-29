import React from 'react';
import {StyleSheet} from 'react-native';
import {Pressable, Text, View} from 'react-native';
import COLORS from '../../utils/colors';

interface Props {
  title: string;
  onPress: () => void;
  variant?: 'contained' | 'outlined';
  color?: 'primary' | 'secondary' | 'danger' | 'purple';
  containerStyle?: any;
  icon: React.ReactNode;
  disabled?: boolean;
}
const LabeledIconButton: React.FC<Props> = ({
  title,
  onPress,
  variant = 'contained',
  color = 'primary',
  containerStyle,
  icon,
  disabled = false,
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
      disabled={disabled}
      android_ripple={{color: getHexColor()}}
      style={[
        variant === 'contained'
          ? {backgroundColor: getHexColor()}
          : {borderWidth: 1, borderColor: getHexColor()},
        styles.buttonContainer,
      ]}
      onPress={onPress}>
      <View style={[styles.container, containerStyle]}>
        <Text
          style={[
            variant === 'contained' ? {color: 'white'} : {color: getHexColor()},
            {fontWeight: 'bold'},
          ]}>
          {title}
        </Text>
        {icon}
      </View>
    </Pressable>
  );
};

export default LabeledIconButton;

const styles = StyleSheet.create({
  buttonContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
