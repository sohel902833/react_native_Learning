import {useState} from 'react';
import {Text, View, StyleSheet, Image, Pressable} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import IconButton from '../../components/Buttons/IconButton';
import {bkashLogoImg} from '../../utils/assets';
import AntIcon from 'react-native-vector-icons/AntDesign';
import COLORS from '../../utils/colors';
import InputArea from '../../components/TextInputs/InputArea';
import LabeledIconButton from '../../components/Buttons/LabeledIconButton';
import {RootStackParamList} from '../../App';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

interface Props
  extends NativeStackScreenProps<RootStackParamList, 'Rg_KeepMobileNumber'> {}

const RgKeepMobileNumber: React.FC<Props> = ({navigation}: Props) => {
  const [accountNumber, setAccountNumber] = useState('');

  const navigateToHomePage = () => {
    navigation.navigate('Main_Screen');
  };
  const navigateToNIDFrontPhotoScreen = () => {
    if (accountNumber.length > 3) {
      navigation.replace('Rg_TakeNidFrontPhotoScreen', {
        mobileNumber: accountNumber,
      });
    }
  };
  const navigateToRegisterScreen = () => {
    navigation.replace('Login');
  };

  return (
    <View style={styles.body}>
      <ScrollView>
        <View style={{marginTop: 70, paddingHorizontal: 20}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Image style={{width: 70, height: 70}} source={bkashLogoImg} />
            <IconButton
              onPress={() => {}}
              renderIcon={() => (
                <AntIcon name="qrcode" color={COLORS.PRIMARY} size={70} />
              )}
              variant={'outlined'}
              style={{borderWidth: 0}}
            />
          </View>
          <Text style={styles.screenTitle}>Signup Into Bkash </Text>
          <InputArea
            placeholder="Enter Your Account No."
            label="Account No"
            keyboardType="decimal-pad"
            autoFocus
            value={accountNumber}
            onTextChange={value => setAccountNumber(value)}
          />
          <View style={styles.linkArea}>
            <Text style={styles.registerText}>Forget Password</Text>
            <Pressable onPress={navigateToRegisterScreen}>
              <Text style={styles.registerText}>Login</Text>
            </Pressable>
          </View>
          <LabeledIconButton
            onPress={navigateToNIDFrontPhotoScreen}
            title="Next"
            icon={<AntIcon name="arrowright" color={COLORS.WHITE} size={25} />}
            variant={'contained'}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default RgKeepMobileNumber;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'white',
  },
  screenTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10,
    marginBottom: 30,
  },
  linkArea: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  registerText: {
    color: COLORS.PRIMARY,
    fontWeight: 'bold',
  },
});
