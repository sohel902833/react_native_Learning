import {NavigationProp, useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {RootStackParamList} from '../../App';
import {IMainOptionItem} from '../../types/home.types';

interface Props {
  option: IMainOptionItem;
}
const OptionItem: React.FC<Props> = ({option}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const handleNavigate = () => {
    if (option?.routeName) {
      //@ts-ignore
      navigation.navigate(option?.routeName);
    }
  };
  return (
    <TouchableOpacity onPress={handleNavigate}>
      <View style={styles.optionItem}>
        {option.icon}
        <Text style={styles.itemText}>{option.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  optionItem: {
    alignItems: 'center',
    width: 80,
  },
  itemText: {
    fontWeight: '400',
    marginTop: 10,
    color: 'black',
    textAlign: 'center',
  },
});
export default OptionItem;
