import React from 'react';
import {LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {View, StyleSheet, StatusBar} from 'react-native';

import AuthRouter from './routes';
('./routes');

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar backgroundColor="#312e38" barStyle="light-content" />
    <View style={style.view}>
      <AuthRouter />
    </View>
  </NavigationContainer>
);

const style = StyleSheet.create({
  view: {
    backgroundColor: '#312e38',
    flex: 1,
  },
});

export default App;
