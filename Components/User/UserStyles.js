import { StyleSheet } from 'react-native';

const UserStyles = StyleSheet.create({
    container: {
        backgroundColor: '#F5F5F5',
    }, 

    box: {
      marginHorizontal: 16,
      marginTop: 25,

      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end',

    },

    detailsContent: {
        paddingRight: 30,
        display: 'flex',
        justifyContent: 'space-between',
    },

    username: {
        fontFamily: 'SourceSansPro-SemiBold',
        paddingBottom: 2,
        fontSize: 20,
        lineHeight: 30,
        color: '#344054',
    },

    userdetail: {
        fontFamily: 'SourceSansPro-Regular',
        fontSize: 16,
        lineHeight: 20,
        color: '#344054',
    },

    activebutton: {
        color: '#299647',
        backgroundColor: '#E6F9E9',
        paddingHorizontal: 8,
        borderRadius: 99
    }
});

export default UserStyles;