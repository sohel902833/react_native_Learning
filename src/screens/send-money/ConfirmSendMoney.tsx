import {useLayoutEffect, useRef, useState} from 'react';
import {Pressable, StyleSheet, TextInput, ToastAndroid} from 'react-native';
import {Text, View} from 'react-native';
import LabeledIconButton from '../../components/Buttons/LabeledIconButton';
import InputArea from '../../components/TextInputs/InputArea';
import COLORS from '../../utils/colors';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {RootStackParamList} from '../../App';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import globalStyle from '../../utils/globalStyle';
import ProgressIndecator from '../../components/SendMoney/ProgressIndecator';
import TapOnHoldToProgress from '../../components/SendMoney/TapAndHoldProgress';

interface Props
  extends NativeStackScreenProps<RootStackParamList, 'Confirm_Send_Money'> {}

const ConfirmSendMoney = ({navigation, route}: Props) => {
  const pressValue = useRef(0);
  const [intervalValue, setIntervalValue] = useState(0);
  let countInterval: any = null;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Send Money',
    });
  });

  const handleNavigate = () => {};

  const {phoneNumber, amount} = route.params;
  return (
    <View style={styles.container}>
      <TapOnHoldToProgress />
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
            editable={false}
            value={amount}
          />
        </View>
        <Text style={[styles.receiverText, {color: COLORS.PRIMARY}]}>
          Available Balance: $34343
        </Text>
      </View>
      <View style={{marginTop: 15}}></View>
      <Pressable style={styles.tabBarContainer}>
        <Text style={styles.cofirmButtonText}>Confirm</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  tabBarContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: COLORS.PRIMARY,
    padding: 20,
    height: 100,
    borderTopLeftRadius: 1500,
    borderTopRightRadius: 1500,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cofirmButtonText: {
    fontSize: 28,
    color: 'white',
    ...globalStyle.bruno,
  },
  container: {
    flex: 1,
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

export default ConfirmSendMoney;
