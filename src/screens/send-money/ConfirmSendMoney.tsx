import {useLayoutEffect, useRef, useState} from 'react';
import {Pressable, StyleSheet, TextInput, ToastAndroid} from 'react-native';
import {Text, View} from 'react-native';
import COLORS from '../../utils/colors';
import {RootStackParamList} from '../../App';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import globalStyle from '../../utils/globalStyle';
import TapOnHoldToProgress from '../../components/SendMoney/TapAndHoldProgress';
import {useConfirmSendMoneyMutation} from '../../feature/transections/transectionsApi';

interface Props
  extends NativeStackScreenProps<RootStackParamList, 'Confirm_Send_Money'> {}

const ConfirmSendMoney = ({navigation, route}: Props) => {
  const [confirmSendMoney, {isLoading}] = useConfirmSendMoneyMutation();
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Send Money',
    });
  });

  const navigateToHomePage = () => {
    navigation.replace('Main_Screen');
  };

  const handleSubmit = async () => {
    const {token, expiry} = route.params;
    const res: any = await confirmSendMoney({token});
    if (res?.data?.success) {
      ToastAndroid.show(res?.data?.message, ToastAndroid.SHORT);
      navigateToHomePage();
    } else {
      ToastAndroid.show(res?.data?.message, ToastAndroid.LONG);
    }
  };

  const {phoneNumber, amount, expiry, availableBalance, charge} = route.params;

  return (
    <View style={styles.container}>
      <TapOnHoldToProgress />
      <View style={styles.cardContainer}>
        <Text style={styles.receiverText}>Receiver</Text>
        <View style={styles.receiverNumberContainer}>
          <Text style={styles.receiverNumberText}>{phoneNumber}</Text>
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
          Available Balance: {availableBalance}
        </Text>
        <Text style={[styles.receiverText, {color: COLORS.PRIMARY}]}>
          Charge: {charge}
        </Text>
      </View>
      <View style={{marginTop: 15}}></View>
      <Pressable
        disabled={isLoading}
        onPress={handleSubmit}
        style={styles.tabBarContainer}>
        <Text style={styles.cofirmButtonText}>
          {isLoading ? 'Please Wait...' : 'Confirm'}
        </Text>
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
