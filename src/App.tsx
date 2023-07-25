import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {store} from './app/store';
import Navigations from './Navigations';
export type RootStackParamList = {
  Login: undefined;
  Main_Screen: undefined;
  KeepMobileNumber: undefined;
  Keep_Password: {
    phoneNumber: string;
  };
  Confirm_Send_Money: {
    phoneNumber: string;
    amount: string;
    expiry: number;
    token: string;
    availableBalance: number;
    charge: number;
  };
  Rg_KeepMobileNumber: undefined;
  Rg_TakeNidFrontPhotoScreen: {
    mobileNumber: string;
  };
  SignupScreen: {
    name: string;
    dateOfBirth: string;
    idNo: string;
    mobileNumber: string;
  };
  Forget_Password: undefined;
};

const App = () => {
  return (
    <Provider store={store}>
      <Navigations />
    </Provider>
  );
};

export default App;
