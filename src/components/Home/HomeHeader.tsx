import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {userImg} from '../../utils/assets';
import COLORS from '../../utils/colors';
import IconButton from '../Buttons/IconButton';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';
import {IAuth} from '../../feature/auth/auth.types';
import {useState} from 'react';
const HomeHeader = () => {
  const {user} = useSelector((state: {auth: IAuth}) => state.auth);
  const [showBalance, setShowBalance] = useState(false);

  const handleShowBalance = () => {
    setShowBalance(prev => !prev);
  };
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerLeft}>
        <Image style={styles.profileImage} source={userImg} />
        <View>
          <Text style={styles.userName}>
            {user?.firstName} {user?.lastName}
          </Text>

          <Pressable onPress={handleShowBalance}>
            <View style={styles.balanceContainer}>
              <Text style={styles.balanceText}>
                {showBalance ? user?.balance : 'See Balance'}
              </Text>
            </View>
          </Pressable>
        </View>
      </View>
      <View style={styles.headerRight}>
        <IconButton
          onPress={() => {}}
          renderIcon={(color, size) => {
            return <MaterialIcon name="bird" size={45} color={color} />;
          }}
        />
        <IconButton
          onPress={() => {}}
          renderIcon={(color, size) => {
            return <EntypoIcon name="trophy" size={35} color={color} />;
          }}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: COLORS.PRIMARY,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
  },
  userName: {
    color: 'white',
    fontSize: 19,
  },
  balanceContainer: {
    backgroundColor: 'white',
    width: 150,
    padding: 5,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 7,
  },
  balanceText: {
    color: COLORS.PRIMARY,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  profileImage: {
    height: 60,
    width: 60,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: `${COLORS.PRIMARY}30`,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default HomeHeader;
