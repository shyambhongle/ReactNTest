import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Screen from '../screens';
import {RootStackParamList} from '../ts/app.type';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="Login"
        component={Screen.Login}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name="OtpVerify"
        component={Screen.OtpVerify}
        options={{headerShown: false}}
      />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
