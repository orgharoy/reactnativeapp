import { StyleSheet } from 'react-native';

const ApplicationStyles = StyleSheet.create({
    container: {
      marginTop: 30,
      paddingHorizontal: 16,
      backgroundColor: '#F5F5F5',
    },
    heading: {
      fontSize: 18,
      lineHeight: 28,
      paddingBottom: 22,
      fontFamily: 'SourceSansPro-SemiBold',

      color: '#344054'
    },
    items: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap'

    },
    item: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: 86,
      height: 98,
    },

    iteminside: {
      paddingLeft: 12, 
    },

    itemtext: {
      fontSize: 14,
      lineHeight: 17, 
      paddingTop: 4,
      textAlign: 'center',
      

      color: '#1D2939'
    }
    
});

export default ApplicationStyles;