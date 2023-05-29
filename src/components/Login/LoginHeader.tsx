import {StyleSheet, Text, View} from 'react-native';
import CustomButton from '../Buttons/CustomButton';
import IconButton from '../Buttons/IconButton';

import Icon from 'react-native-vector-icons/Entypo';
import COLORS from '../../utils/colors';
const LoginHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <View>
        <IconButton
          onPress={() => {}}
          variant={'outlined'}
          style={{borderWidth: 0}}
          renderIcon={(color, size) => (
            <Icon name="arrow-left" color={COLORS.PRIMARY} size={20} />
          )}
        />
      </View>
      <View>
        <CustomButton
          title="English"
          onPress={() => {}}
          variant="outlined"
          color="primary"
        />
      </View>
    </View>
  );
};

export default LoginHeader;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
});
