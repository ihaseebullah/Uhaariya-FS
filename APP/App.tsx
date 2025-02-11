import {View, Text} from 'react-native';
import React from 'react';
import {ThemeProvider} from './src/Theme/Context/Theme';
import Landing from './src/(app)/Landing';
const App = () => {
  return (
    <ThemeProvider>
      <Landing />
    </ThemeProvider>
  );
};

export default App;
