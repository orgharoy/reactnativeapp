import React from 'react';
import { Text, View, Image } from 'react-native';

import UserDetailsStyles from './UserDetailsStyles';

const UserDetails = () => {
  return (
    <View style={UserDetailsStyles.container}>
        <View style={UserDetailsStyles.infosection}>
            <View style={UserDetailsStyles.images}>
                <Image source={require('../../../Images/briefcase.png')} />
            </View>
            <View style={UserDetailsStyles.textsection}>
                <Text style={UserDetailsStyles.subheading}>Human Resource</Text>
                <Text style={UserDetailsStyles.littletext}>Department</Text>
            </View>
        </View>
        <View style={UserDetailsStyles.infosection}>
            <View style={UserDetailsStyles.images}>
                <Image source={require('../../../Images/cake.png')} />
            </View>
            <View style={UserDetailsStyles.textsection}>
                <Text style={UserDetailsStyles.subheading} >28 September, 1990</Text>
                <Text style={UserDetailsStyles.littletext} >Date of Birth</Text>
            </View>
        </View>
        <View style={UserDetailsStyles.infosection}>
            <View style={UserDetailsStyles.images}>
                <Image source={require('../../../Images/avatar.png')} />
            </View>
            <View style={UserDetailsStyles.textsection}>
                <Text style={UserDetailsStyles.subheading} >Female</Text>
                <Text style={UserDetailsStyles.littletext} >Gender</Text>
            </View>
            <View style={UserDetailsStyles.textsectionislam}>
                <Text style={UserDetailsStyles.subheading} >Islam</Text>
                <Text style={UserDetailsStyles.littletext} >Religion</Text>
            </View>
        </View>
    </View>
  );
};

export default UserDetails;