import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {RootStackParamList} from '../../App';
import IconButton from '../../components/Buttons/IconButton';
import LabeledIconButton from '../../components/Buttons/LabeledIconButton';
import InputArea from '../../components/TextInputs/InputArea';
import {bkashLogoImg} from '../../utils/assets';
import COLORS from '../../utils/colors';
import AntIcon from 'react-native-vector-icons/AntDesign';
import * as Yup from 'yup';
import {useRegisterMutation} from '../../feature/auth/authApi';
import {ToastAndroid} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AUTH_TOKEN_KEY} from '../../utils/constant/Constant';
import {useDispatch} from 'react-redux';
import {setUserInfo} from '../../feature/auth/authSlice';
interface Props
  extends NativeStackScreenProps<RootStackParamList, 'SignupScreen'> {}

const SignupScreen: React.FC<Props> = ({navigation, route}) => {
  const [registerUser, {isLoading, isError, data}] = useRegisterMutation();
  const dispatch = useDispatch();
  const [accountNumber, setAccountNumber] = useState(route.params.mobileNumber);
  const [name, setName] = useState(route.params.name);
  const [lastName, setLastName] = useState('');
  const [idNo, setIdNo] = useState(route.params.idNo);
  const [dateOfBirth, setDateOfBirth] = useState(route.params.dateOfBirth);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState<any>({});

  const handleSubmit = () => {
    const userScheme = Yup.object({
      name: Yup.string().required('Please enter your first name'),
      lastName: Yup.string().required('Please enter last name'),
      accountNumber: Yup.string().required('Please enter account/phone number'),
      idNo: Yup.string().required('Please enter your nid no'),
      email: Yup.string()
        .required('Please enter email')
        .email('Invalid email address'),
      dateOfBirth: Yup.string().required('please enter your birthdate'),
      password: Yup.string().required('Please Enter Your Password'),
      // .matches(
      //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\_*])(?=.{6,})/,
      //   'Must Contain 6 Characters, One Uppercase, One Lowercase, One Number and one special case Character',
      // ),
      confirmPassword: Yup.string()
        .required('Please Confirm Your Password')
        .oneOf([Yup.ref('password')], "Password Doesn't matched"),
    });
    userScheme
      .validate(
        {
          name,
          lastName,
          accountNumber,
          idNo,
          email,
          dateOfBirth,
          password,
          confirmPassword,
        },
        {abortEarly: false},
      )
      .then((value: any) => {
        setErrors({});
        registerUser({
          firstName: name,
          lastName: lastName,
          phone: accountNumber,
          password,
          email,
          birthdate: dateOfBirth,
          idNo,
        });
      })
      .catch((err: any) => {
        let newError: any = {};
        err.inner?.forEach((item: any) => {
          newError[item.path] = item.message;
        });
        setErrors(newError);
      });
  };

  useEffect(() => {
    if (!isLoading && !isError && data) {
      if (data?.errors) {
        setErrors({
          ...data?.errors,
          name: data?.errors?.firstName,
          dateOfBirth: data?.errors?.birthdate,
          accountNumber: data?.errors?.phone,
        });
      } else if (data?.success && data?.token) {
        finishSignup(data);
      }
      ToastAndroid.show(data?.message, ToastAndroid.LONG);
    }
  }, [isError, isLoading, data]);

  const finishSignup = async (data: any) => {
    const token = data?.token;

    dispatch(setUserInfo(data?.user));
    await AsyncStorage.setItem(AUTH_TOKEN_KEY, token);
  };

  return (
    <View style={styles.body}>
      <ScrollView>
        <View style={{marginTop: 70, marginBottom: 40, paddingHorizontal: 20}}>
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
          <Text style={styles.screenTitle}>Create Account</Text>
          <InputArea
            placeholder="Enter Your Account No."
            label="Account No"
            keyboardType="decimal-pad"
            value={accountNumber}
            onTextChange={value => setAccountNumber(value)}
            error={errors?.accountNumber ? true : false}
            helperText={errors?.accountNumber}
          />
          <InputArea
            placeholder="First Name"
            label="First Name"
            value={name}
            onTextChange={value => setName(value)}
            containerStyle={{
              marginTop: 15,
            }}
            error={errors?.name ? true : false}
            helperText={errors?.name}
          />
          <InputArea
            placeholder="Last Name"
            label="Last Name"
            value={lastName}
            onTextChange={value => setLastName(value)}
            containerStyle={{
              marginTop: 15,
            }}
            error={errors?.lastName ? true : false}
            helperText={errors?.lastName}
          />
          <InputArea
            placeholder="Enter Your  Nid No"
            label="Nid No"
            value={idNo}
            onTextChange={value => setIdNo(value)}
            containerStyle={{
              marginTop: 15,
            }}
            keyboardType="decimal-pad"
            error={errors?.idNo ? true : false}
            helperText={errors?.idNo}
          />
          <InputArea
            placeholder="Birth Date"
            label="Birth Date"
            value={dateOfBirth}
            onTextChange={value => setDateOfBirth(value)}
            containerStyle={{
              marginTop: 15,
            }}
            error={errors?.dateOfBirth ? true : false}
            helperText={errors?.dateOfBirth}
          />
          <InputArea
            placeholder="Email"
            label="Email"
            value={email}
            onTextChange={value => setEmail(value)}
            containerStyle={{
              marginTop: 15,
            }}
            error={errors?.email ? true : false}
            helperText={errors?.email}
          />
          <InputArea
            placeholder="Type Your Password"
            label="Password"
            keyboardType="decimal-pad"
            secureText
            value={password}
            onTextChange={value => setPassword(value)}
            containerStyle={{
              marginTop: 15,
            }}
            error={errors?.password ? true : false}
            helperText={errors?.password}
          />
          <InputArea
            placeholder="Confirm Password"
            label="Confirm Password"
            keyboardType="decimal-pad"
            secureText
            value={confirmPassword}
            onTextChange={value => setConfirmPassword(value)}
            containerStyle={{
              marginTop: 15,
              marginBottom: 40,
            }}
            error={errors?.confirmPassword ? true : false}
            helperText={errors?.confirmPassword}
          />
          <View style={styles.linkArea}>
            <Text style={styles.registerText}>Forget Password</Text>
            <Pressable>
              <Text style={styles.registerText}>Login</Text>
            </Pressable>
          </View>
          {isLoading && (
            <Text style={{textAlign: 'center', marginVertical: 15}}>
              Please wait we are creating your account..
            </Text>
          )}
          <LabeledIconButton
            title="Signup"
            icon={<AntIcon name="arrowright" color={COLORS.WHITE} size={25} />}
            onPress={handleSubmit}
            variant={'contained'}
          />
        </View>
      </ScrollView>
    </View>
  );
};

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
export default SignupScreen;
