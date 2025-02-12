import {View, Text} from 'react-native';
import React from 'react';
import {ThemeProvider} from './src/Theme/Context/Theme';
import Root from './src/(app)/Root';
const App = () => {
  return (
    <ThemeProvider>
      <Root />
    </ThemeProvider>
  );
};

export default App;
