import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {IContactItem} from '../../types/send-money.types';

interface Props {
  contact: IContactItem;
  onPress: (contact: IContactItem) => void;
}
const ContactItem: React.FC<Props> = ({contact, onPress}) => {
  return (
    <TouchableOpacity onPress={() => onPress(contact)}>
      <View style={styles.contactItemContainer}>
        <View style={styles.avatarContainer}>
          <Text style={styles.nameFirst}>{contact.name.substring(0, 1)}</Text>
        </View>
        <View>
          <Text style={styles.contactName}>{contact.name}</Text>
          <Text style={styles.contactNumber}>{contact.number}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  contactItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
    marginTop: 10,
  },
  avatarContainer: {
    width: 40,
    height: 40,
    backgroundColor: '#b6b6b6',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameFirst: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  contactName: {
    color: 'black',
  },
  contactNumber: {
    fontWeight: 'bold',
    color: 'black',
  },
});

export default ContactItem;
