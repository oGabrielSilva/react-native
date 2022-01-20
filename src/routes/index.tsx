import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignIn from '../pages/Signin';
import SignUp from '../pages/Signout';

const Auth = createNativeStackNavigator();

const AuthRouter: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      //   headerTintColor: '#fff',
      //   headerStyle: {
      //     backgroundColor: '#7159c1',
      //   },
      contentStyle: {backgroundColor: '#312e38'},
    }}>
    <Auth.Screen name="SignIn" component={SignIn} />
    <Auth.Screen name="SignUp" component={SignUp} />
  </Auth.Navigator>
);

export default AuthRouter;
