import { BackHandler, StyleSheet } from 'react-native';

const NavStyles = StyleSheet.create({
    box: {
      height: 56,
      backgroundColor: '#299647',
    },
    content: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      paddingHorizontal: 19,
    },

    text: {
      color: 'white',
      fontFamily: 'SourceSansPro-SemiBold',
      paddingLeft: 19,
      fontSize: 19
    }
});

export default NavStyles;