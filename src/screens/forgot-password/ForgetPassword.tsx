import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
} from 'react-native';
import IconButton from '../../components/Buttons/IconButton';
import {bkashLogoImg} from '../../utils/assets';
import AntIcon from 'react-native-vector-icons/AntDesign';
import COLORS from '../../utils/colors';
import InputArea from '../../components/TextInputs/InputArea';
import LabeledIconButton from '../../components/Buttons/LabeledIconButton';
import LoginLinks from '../../components/Util/LoginLinks';
import {useState} from 'react';
import {
  useForgetPasswordMutation,
  useResetPasswordByCodeMutation,
} from '../../feature/auth/authApi';
import CustomButton from '../../components/Buttons/CustomButton';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import {CommonActions} from '@react-navigation/native';
interface Props
  extends NativeStackScreenProps<RootStackParamList, 'Forget_Password'> {}

const ForgetPassword: React.FC<Props> = ({navigation}) => {
  const [forgetPassword, {isLoading: forgetPasswordLoading}] =
    useForgetPasswordMutation();
  const [resetPassword, {isLoading: resetPasswordLoading}] =
    useResetPasswordByCodeMutation();
  const [email, setEmail] = useState('sk@gmail.com');
  const [verificationCode, setVerificationCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [isEnteredEmail, setIsEnteredEmail] = useState(false);
  const [resendCodeCountDown, setResetCodeCountDown] = useState(0);
  const [errors, setErrors] = useState<any>({});

  const sendVerificationCode = async () => {
    try {
      if (!email) {
        setErrors({email: 'Please enter your email'});
        return;
      }
      const res: any = await forgetPassword({email});
      if (res?.data?.success) {
        setIsEnteredEmail(true);
        setResetCodeCountDown(5);
        startCountDown();
        ToastAndroid.show(res?.data?.message, ToastAndroid.LONG);
      } else {
        ToastAndroid.show(res?.data?.message, ToastAndroid.LONG);
      }
    } catch (err: any) {}
  };
  const handleResetPassword = async () => {
    try {
      if (verificationCode && newPassword) {
        const res: any = await resetPassword({
          email,
          code: verificationCode,
          newPassword,
        });
        if (res?.data?.success) {
          ToastAndroid.show(res?.data?.message, ToastAndroid.LONG);
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{name: 'Login'}],
            }),
          );
        } else {
          ToastAndroid.show(res?.data?.message, ToastAndroid.LONG);
        }
        console.log('Res', res);
      } else {
        let newError: any = {};
        if (!verificationCode) {
          newError.verificationCode = 'Please enter verification code.';
        }
        if (!newPassword) {
          newError.newPassword = 'Please enter your new password';
        }
        setErrors(newError);
      }
    } catch (err) {}
  };

  const startCountDown = () => {
    const countDownInterval = setInterval(() => {
      setResetCodeCountDown(current => {
        if (current > 0) {
          return current - 1;
        } else {
          clearInterval(countDownInterval);
          return current;
        }
      });
    }, 500);
  };
  const isLoading = forgetPasswordLoading || resetPasswordLoading;

  return (
    <View style={styles.container}>
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
          <Text style={styles.screenTitle}>Forgot Your Bkash Password</Text>
          {isEnteredEmail ? (
            <>
              <Text>
                We sent a verification code to this email "
                {email?.substring(0, 4)}***
                {email.substring(email?.length - 4, email?.length)}"
              </Text>
              {resendCodeCountDown > 0 ? (
                <Text>Resend After {resendCodeCountDown}</Text>
              ) : (
                <CustomButton
                  title="Resend Code"
                  variant="outlined"
                  onPress={sendVerificationCode}
                  buttonStyle={{width: 170, marginVertical: 20}}
                />
              )}

              <InputArea
                placeholder="Enter verification code"
                label="Verification code"
                keyboardType="number-pad"
                value={verificationCode}
                onTextChange={value => setVerificationCode(value)}
              />
              <InputArea
                placeholder="Enter new password"
                label="New password"
                keyboardType="number-pad"
                value={newPassword}
                onTextChange={value => setNewPassword(value)}
                containerStyle={{
                  marginTop: 15,
                }}
              />
            </>
          ) : (
            <InputArea
              placeholder="Enter your email address"
              label="Email Address"
              keyboardType="email-address"
              value={email}
              onTextChange={value => setEmail(value)}
              error={errors?.email ? true : false}
              helperText={errors?.email}
            />
          )}

          <LoginLinks
            disableLeft={true}
            secondLinkName="Login"
            secondLinkRouteName="Login"
          />
          {isLoading && <Text style={{marginVertical: 10}}>Please Wait..</Text>}
          {isEnteredEmail ? (
            <LabeledIconButton
              title="Reset Password"
              icon={
                <AntIcon name="arrowright" color={COLORS.WHITE} size={25} />
              }
              onPress={handleResetPassword}
              variant={'contained'}
              disabled={resetPasswordLoading}
            />
          ) : (
            <LabeledIconButton
              title="Send Verification Code"
              icon={
                <AntIcon name="arrowright" color={COLORS.WHITE} size={25} />
              }
              onPress={sendVerificationCode}
              variant={'contained'}
              disabled={forgetPasswordLoading}
            />
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
  resendButton: {
    backgroundColor: COLORS.PRIMARY,
    width: 130,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 14,
    marginVertical: 10,
  },
  resendButtonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default ForgetPassword;
