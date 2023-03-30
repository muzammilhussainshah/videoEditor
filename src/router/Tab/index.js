import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import * as React from 'react';
import Home from '../../pages/Home/Home';
// import ConfirmPlayers from '../../pages/ConfirmPlayers/ConfirmPlayers';
import SplashScreen from '../../pages/SplashScreen/SplashScreen';
import TrimVideo from '../../pages/TrimVideo/TrimVideo';
// import GetherInProgress from '../../pages/GetherInProgress/GetherInProgress';
// import MyTabs from './SCBottomTabNavigator';
export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* <Stack.Screen name="MyTabs" component={MyTabs} /> */}
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="TrimVideo" component={TrimVideo} />
      {/* <Stack.Screen name="ConfirmPlayers" component={ConfirmPlayers} />
      <Stack.Screen name="GetherInProgress" component={GetherInProgress} /> */}

    </Stack.Navigator>
  );
}
