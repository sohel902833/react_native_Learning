import {useLayoutEffect, useState} from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {Text, View} from 'react-native';
import LabeledIconButton from '../../components/Buttons/LabeledIconButton';
import InputArea from '../../components/TextInputs/InputArea';
import COLORS from '../../utils/colors';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {RootStackParamList} from '../../App';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import globalStyle from '../../utils/globalStyle';

interface Props
  extends NativeStackScreenProps<RootStackParamList, 'Keep_Password'> {}

const KeepPassword = ({navigation, route}: Props) => {
  const [amount, setAmount] = useState('');
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Send Money',
    });
  });

  const handleNavigate = () => {
    navigation.replace('Confirm_Send_Money', {
      phoneNumber: route.params.phoneNumber,
      amount: amount,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Text style={styles.receiverText}>Receiver</Text>
        <View style={styles.receiverNumberContainer}>
          <Text style={styles.receiverNumberText}>
            {route?.params?.phoneNumber}
          </Text>
        </View>
      </View>
      {/* enter amount section  */}
      <View style={{marginTop: 15}}></View>
      <View style={styles.cardContainer}>
        <Text style={styles.receiverText}>Amount</Text>
        <View style={styles.receiverNumberContainer}>
          <TextInput
            style={styles.amountEt}
            placeholder="Amount"
            keyboardType="numeric"
            value={amount}
            onChangeText={value => setAmount(value)}
          />
        </View>
        <Text style={[styles.receiverText, {color: COLORS.PRIMARY}]}>
          Available Balance: $34343
        </Text>
      </View>
      <View style={{marginTop: 15}}></View>
      <View style={styles.cardContainer}>
        <InputArea
          keyboardType={'numeric'}
          label="Password"
          placeholder="Enter Your Password"
          containerStyle={{
            marginBottom: 15,
          }}
          inputStyle={{
            borderBottomWidth: 0,
          }}
        />
        <LabeledIconButton
          title="Next"
          icon={<AntIcon name="arrowright" color={COLORS.WHITE} size={25} />}
          onPress={handleNavigate}
          variant={'contained'}
        />

        <View style={{marginTop: 15}}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    borderRadius: 10,
    padding: 15,
  },
  cardContainer: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
  },
  receiverText: {
    color: '#b6b6b6',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  receiverNumberContainer: {
    marginBottom: 20,
  },
  receiverNumberText: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  amountEt: {
    fontSize: 40,
    textAlign: 'center',
    ...globalStyle.bruno,
  },
});

export default KeepPassword;
