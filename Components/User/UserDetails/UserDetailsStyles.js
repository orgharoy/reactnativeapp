import { StyleSheet } from 'react-native';

const UserDetailsStyles = StyleSheet.create({
    container: {
        marginTop: 11,
        paddingHorizontal: 16,
        backgroundColor: '#F5F5F5',

    }, 
    images:{
        paddingTop: 3,
    },
    infosection: {
        paddingVertical: 8,
        display: 'flex',
        flexDirection: 'row'
    },
    textsection: {
        paddingLeft: 18
    },
    textsectionislam: {
        paddingLeft: 44
    },

    subheading: {
        fontSize: 16,
        lineHeight: 24,

        color: '#344054'
    },
    littletext: {
        fontSize: 12,
        lineHeight: 18,
        fontStyle: 'normal',
        color: '#667085'
    }

});

export default UserDetailsStyles;