import {useNavigation} from '@react-navigation/native';
import {Pressable} from 'react-native';
import {StyleSheet, Text, View} from 'react-native';
import COLORS from '../../utils/colors';

interface Props {
  firstLinkName?: string;
  firstLinkRouteName?: string;
  secondLinkName?: string;
  secondLinkRouteName?: string;
  disableLeft?: boolean;
  disableRight?: boolean;
}

const LoginLinks: React.FC<Props> = ({
  firstLinkName = 'Forget Password',
  firstLinkRouteName = 'Forget_Password',
  secondLinkName = 'Register',
  secondLinkRouteName = 'Rg_KeepMobileNumber',
  disableLeft = false,
  disableRight = false,
}) => {
  const navigation = useNavigation();

  const handleFirstLinkNavigation = () => {
    if (!disableLeft) {
      // @ts-ignore
      navigation.navigate(firstLinkRouteName);
    }
  };
  const handleSecondLinkNavigation = () => {
    if (!disableRight) {
      // @ts-ignore
      navigation.navigate(secondLinkRouteName);
    }
  };

  return (
    <View style={styles.linkArea}>
      <Pressable onPress={handleFirstLinkNavigation}>
        <Text style={styles.registerText}>{!disableLeft && firstLinkName}</Text>
      </Pressable>
      <Pressable onPress={handleSecondLinkNavigation}>
        <Text style={styles.registerText}>
          {!disableRight && secondLinkName}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default LoginLinks;
