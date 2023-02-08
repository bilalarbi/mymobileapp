import { StatusBar } from 'expo-status-bar';

import {Text, View} from 'react-native';

const MyMobileApp = () => {
  return (
    <View style={{
      flex: 1,
justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Text>Hello Bilal!</Text>
    </View>
  );
};

export default MyMobileApp;