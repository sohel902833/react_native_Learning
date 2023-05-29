import {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Pressable,
  ToastAndroid,
} from 'react-native';
import {RootStackParamList} from '../../App';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useCamera} from 'react-native-camera-hooks';
import {RNCamera} from 'react-native-camera';
import TextRecognition from '@react-native-ml-kit/text-recognition';
import COLORS from '../../utils/colors';
import AntIcon from 'react-native-vector-icons/AntDesign';
const trimParsedText = (keyword: string, fullText: string): string => {
  // Find the index of the keyword
  const keywordIndex = fullText.indexOf(keyword);

  // Extract the actual name by removing the keyword and any leading/trailing spaces
  const actualText = fullText.substring(keywordIndex + keyword.length).trim();
  return actualText;
};

interface Props
  extends NativeStackScreenProps<
    RootStackParamList,
    'Rg_TakeNidFrontPhotoScreen'
  > {}

const RgTakeNidFrontPhotoScreen: React.FC<Props> = ({
  navigation,
  route,
}: Props) => {
  const [{cameraRef}, {takePicture}] = useCamera();
  const [imageUri, setImageUri] = useState<any>(null);

  const handleCapture = async () => {
    try {
      navigation.replace('SignupScreen', {
        name: '',
        dateOfBirth: '',
        idNo: '',
        mobileNumber: route.params.mobileNumber,
      });
      // const data = await takePicture();
      // setImageUri(data.uri);
      // parseBanglaText(data.uri);
    } catch (err) {
      console.log(err);
    }
  };

  const parseBanglaText = async (imageUri: any) => {
    const result = await TextRecognition.recognize(imageUri);

    let actualName = '';
    let dateOfBirth = '';
    let idNo = '';
    for (let block of result.blocks) {
      for (let line of block.lines) {
        console.log('Line Text', line.text);
        if (line.text.includes('Name')) {
          //parse name and separate name field
          actualName = trimParsedText('Name', line.text);
        } else if (line.text.includes('Date of Birth:')) {
          dateOfBirth = trimParsedText('Date of Birth:', line.text);
        } else if (line.text.includes('ID NO')) {
          const parsedIdNo = line.text;
          idNo = parsedIdNo.replace(/\D/g, '');
        }
      }
    }

    if (actualName && dateOfBirth && idNo) {
      navigation.replace('SignupScreen', {
        name: actualName,
        dateOfBirth: dateOfBirth,
        idNo: idNo,
        mobileNumber: route.params.mobileNumber,
      });
    } else {
      navigation.replace('SignupScreen', {
        name: '',
        dateOfBirth: '',
        idNo: '',
        mobileNumber: route.params.mobileNumber,
      });
      ToastAndroid.show(
        'Unable to detect id card information, Please take a clear picture and try again',
        ToastAndroid.LONG,
      );
    }
  };

  return (
    <View style={styles.body}>
      <View style={styles.cameraContainer}>
        <RNCamera
          ref={cameraRef}
          type={RNCamera.Constants.Type.back}
          style={{
            flex: 1,
          }}
        />
      </View>
      <View style={styles.actionContainer}>
        <Pressable onPress={handleCapture}>
          <AntIcon name="camerao" color="white" size={60} />
        </Pressable>
      </View>
    </View>
  );
};

export default RgTakeNidFrontPhotoScreen;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'white',
  },
  cameraContainer: {
    flex: 3,
  },
  actionContainer: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
