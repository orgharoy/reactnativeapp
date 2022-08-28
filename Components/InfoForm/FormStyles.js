import { StyleSheet } from 'react-native';

const FormStyles = StyleSheet.create({
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
    formandbutton: {
        backgroundColor: '#ffffff',
        display: 'flex',
        alignItems: 'center'
    },
    form: {
        borderWidth: 1
    },
    formheading: {
        paddingTop: 16,
        fontSize: 14,
        lineHeight: 20,
        color: '#299647',

    },
    flexsection: {
        display: 'flex',
        flexDirection: 'row',

    },
    input: {
        width: 340,
        borderBottomColor: '#D0D5DD',
        borderLeftColor: 'white',
        borderRightColor: 'white',
        borderTopColor: 'white',
        borderWidth: 1
    },

    flexitem: {
        paddingRight: 37
    },
    inputflex: {
        width: 147,
        borderBottomColor: '#D0D5DD',
        borderLeftColor: 'white',
        borderRightColor: 'white',
        borderTopColor: 'white',
        borderWidth: 1
    },
    upload: {
        paddingTop: 30,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    uploadarrow: {
        paddingTop: 15,
        paddingRight: 13

    },
    button:{
        backgroundColor: '#299647',
        width: 88,
        borderRadius: 100,
        paddingVertical: 10,
        paddingHorizontal: 22,
        marginTop: 24,
    },
    submittext: {
        color: 'white'
    },

});

export default FormStyles;