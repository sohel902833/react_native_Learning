import {Image, StyleSheet, Text, View} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import HomeHeader from '../components/Home/HomeHeader';
import OptionItem from '../components/Home/OptionItem';

import FeatherIcon from 'react-native-vector-icons/Feather';
import AntIcon from 'react-native-vector-icons/AntDesign';
import COLORS from '../utils/colors';
import {IMainOptionItem} from '../types/home.types';
import globalStyle from '../utils/globalStyle';
import {bkashBannerImg} from '../utils/assets';
import {useSelector} from 'react-redux';
import {IAuth} from '../feature/auth/auth.types';

const dataList: IMainOptionItem[] = [
  {
    id: 1,
    title: 'Send Money',
    icon: <FeatherIcon name="send" color={COLORS.PRIMARY} size={37} />,
    routeName: 'KeepMobileNumber',
  },
  {
    id: 2,
    title: 'Mobile Recharge',
    icon: <AntIcon name="save" color={COLORS.PRIMARY} size={37} />,
  },
  {
    id: 3,
    title: 'Cash Out',
    icon: <AntIcon name="export" color={COLORS.PRIMARY} size={37} />,
  },
  {
    id: 4,
    title: 'Payment',
    icon: <AntIcon name="disconnect" color={COLORS.PRIMARY} size={37} />,
  },
  {
    id: 5,
    title: 'Add Money',
    icon: <AntIcon name="gift" color={COLORS.PRIMARY} size={37} />,
  },
  {
    id: 6,
    title: 'Pay Bill',
    icon: <AntIcon name="dingding" color={COLORS.PRIMARY} size={37} />,
  },
  {
    id: 7,
    title: 'Savings',
    icon: <AntIcon name="barchart" color={COLORS.PRIMARY} size={37} />,
  },
  {
    id: 8,
    title: 'Loan',
    icon: <AntIcon name="USB" color={COLORS.PRIMARY} size={37} />,
  },
];

const Home = () => {
  const {user} = useSelector((state: {auth: IAuth}) => state.auth);

  console.log('User', user);

  return (
    <View style={{flex: 1, backgroundColor: '#ffffff'}}>
      <HomeHeader />
      <ScrollView>
        <View style={styles.mainContainer}>
          {dataList.map((item, index) => (
            <OptionItem key={item.id} option={item} />
          ))}
        </View>
        <View style={styles.myBkashCardContainer}>
          <View style={styles.myBkashHeader}>
            <Text style={{color: 'black', ...globalStyle.poppins}}>
              My Bkash
            </Text>
            <Text style={{color: COLORS.PRIMARY, fontWeight: 'bold'}}>
              See All
            </Text>
          </View>
          <FlatList
            style={{paddingHorizontal: 10, marginBottom: 20, marginTop: 10}}
            horizontal={true}
            data={dataList}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <OptionItem option={item} />}
          />
        </View>
        <View style={{marginHorizontal: 20, marginTop: 10, marginBottom: 50}}>
          <Image
            style={styles.bannerImage}
            source={bkashBannerImg}
            resizeMode={'cover'}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    rowGap: 20,
    columnGap: 20,
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 40,
  },
  myBkashCardContainer: {
    marginTop: 40,
    marginHorizontal: 20,
    borderColor: '#b6b6b6',
    borderWidth: 2,
    borderRadius: 2,
  },
  myBkashHeader: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 5,
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    borderColor: '#b6b6b6',
  },
  bannerImage: {
    width: '100%',
    height: 200,
  },
});
export default Home;
