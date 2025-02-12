import React from 'react';
import {useTheme} from '../Context/Theme';

const withTheming = (WrappedComponent, stylesheet) => {
  return props => {
    const {Colors,isDarkMode} = useTheme();
    const styles = stylesheet(Colors);
    return <WrappedComponent {...props} styles={styles} Colors={Colors} isDarkMode />;
  };
};

export default withTheming;
