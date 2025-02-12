import {View, Text} from 'react-native';
import React from 'react';
import {useTheme} from '../Theme/Context/Theme';

const Landing = () => {
  const {Colors, isDarkMode} = useTheme();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.Primary,
      }}>
      <Text>Current Theme: {isDarkMode ? 'Dark' : 'Light'}</Text>
    </View>
  );
};

export default Landing;
