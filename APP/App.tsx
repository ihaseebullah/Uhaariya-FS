import {View, Text} from 'react-native';
import React from 'react';
import './gesture-handler';
import {ThemeProvider} from './src/Theme/Context/Theme';
import {Root} from './src/(app)/Root';
import {NavigationContainer} from '@react-navigation/native';
const App = () => {
  return (
    <NavigationContainer>
      <ThemeProvider>
        <Root />
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
