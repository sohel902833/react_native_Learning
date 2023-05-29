import React from 'react';
import {KeyboardTypeOptions} from 'react-native';
import {TextInput, View, StyleSheet, Text} from 'react-native';
import COLORS from '../../utils/colors';

interface Props {
  label: string;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;

  secureText?: boolean;
  containerStyle?: any;
  inputStyle?: any;
  autoFocus?: boolean;
  value?: string;
  onTextChange?: (value: string) => void;
  error?: boolean;
  helperText?: string;
}

const InputArea: React.FC<Props> = ({
  label,
  placeholder,
  keyboardType,
  secureText = false,
  containerStyle,
  autoFocus = false,
  value = '',
  onTextChange,
  inputStyle,
  error,
  helperText,
}) => {
  return (
    <View style={[containerStyle]}>
      <Text style={styles.lable}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        style={[
          styles.input,
          inputStyle,
          {borderBottomColor: error ? 'red' : COLORS.ASH},
        ]}
        keyboardType={keyboardType}
        secureTextEntry={secureText}
        autoFocus={autoFocus}
        value={value}
        onChangeText={onTextChange}
      />
      {error && <Text style={styles.error}>{helperText}</Text>}
    </View>
  );
};

export default InputArea;

const styles = StyleSheet.create({
  lable: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  error: {
    fontSize: 13,
    color: 'red',
  },
  input: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.ASH,
  },
});
