import {StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/redux';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider, Box} from 'native-base';

import Navigator from './src/navigation';

import 'react-native-gesture-handler';

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Provider store={store}>
          <Navigator />
        </Provider>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
