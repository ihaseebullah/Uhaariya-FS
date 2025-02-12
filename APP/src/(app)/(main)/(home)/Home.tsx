<<<<<<< HEAD:APP/src/(app)/(main)/(home)/Home.tsx
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useTheme} from '../../../Theme/Context/Theme';
interface HomeProps {}
const Home: React.FC<HomeProps> = ({}) => {
  const {Colors, isDarkMode, toggleTheme} = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.Primary,
    },
    btn: {
      borderColor: Colors.Secondary,
      padding: 8,
      borderWidth: 0.5,
      borderRadius: 16,
      marginTop: 10,
    },
    text: {
      color: Colors.Secondary,
    },
  });
=======
import {View, Text} from 'react-native';
import React from 'react';
import {useTheme} from '../Theme/Context/Theme';
>>>>>>> parent of c393bef (Boilerplate setted up):APP/src/(app)/Landing.tsx

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

export default Home;
