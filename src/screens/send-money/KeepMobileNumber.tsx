import {NavigationProp} from '@react-navigation/native';
import {useLayoutEffect, useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {Text, View} from 'react-native';
import LabeledIconButton from '../../components/Buttons/LabeledIconButton';
import ContactItem from '../../components/SendMoney/ContactItem';
import InputArea from '../../components/TextInputs/InputArea';
import {IContactItem} from '../../types/send-money.types';
import COLORS from '../../utils/colors';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {RootStackParamList} from '../../App';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

const numberList: IContactItem[] = [
  {
    id: 1,
    name: 'Md Sohrab Hossain',
    number: '01740244739',
  },
  {
    id: 2,
    name: 'Md Jahangir Alom',
    number: '01793886801',
  },
];

interface Props
  extends NativeStackScreenProps<RootStackParamList, 'KeepMobileNumber'> {}

const KeepMobileNumber: React.FC<Props> = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Send Money',
    });
  });

  const handleContactPress = (contact: IContactItem) => {
    setPhoneNumber(contact.number);
  };
  const handleNavigate = () => {
    navigation.replace('Keep_Password', {
      phoneNumber: phoneNumber,
    });
  };

  return (
    <View style={styles.container}>
      <InputArea
        keyboardType={'numeric'}
        label="Receiver"
        placeholder="Enter Receiver Number"
        value={phoneNumber}
        onTextChange={value => setPhoneNumber(value)}
        containerStyle={{
          marginBottom: 15,
        }}
      />
      <LabeledIconButton
        title="Next"
        icon={<AntIcon name="arrowright" color={COLORS.WHITE} size={25} />}
        onPress={handleNavigate}
        variant={'contained'}
        disabled={phoneNumber?.length === 0}
      />
      <Text style={styles.recentText}>Recent</Text>
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={numberList}
        renderItem={({item}) => (
          <ContactItem contact={item} onPress={handleContactPress} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    margin: 15,
    borderRadius: 10,
    padding: 15,
  },
  recentText: {
    color: '#b6b6b6',
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 20,
    borderBottomWidth: 1,
    borderColor: '#b6b6b650',
    paddingBottom: 10,
  },
});

export default KeepMobileNumber;
