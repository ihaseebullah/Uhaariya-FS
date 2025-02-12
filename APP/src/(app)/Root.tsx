import {createStackNavigator} from '@react-navigation/stack';
import Home from './(main)/(home)/Home';
import { StatusBar } from 'react-native';

const Stack = createStackNavigator();

export const Root = () => {
  return (
    <Stack.Navigator>
      <StatusBar backgroundColor="#6200EE" barStyle="light-content" />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};
