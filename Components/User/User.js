import React from 'react';
import { Text, View, Image } from 'react-native';
import UserDetails from './UserDetails/UserDetails.js';

import UserStyles from './UserStyles.js';

const User = () => {
  return (
    <View style={UserStyles.container}>
      <View style={UserStyles.box}>
        <Image source={require('../../Images/profilepic.png')} />
        <View style={UserStyles.detailsContent}>
          <Text style={UserStyles.username}>Darlene Robertson</Text>
          <Text style={UserStyles.userdetail}>Senior UX Designer</Text>
          <Text style={UserStyles.userdetail}>ID43178</Text>
        </View>
        <Text style={UserStyles.activebutton}>Active</Text>        
      </View>
      <UserDetails />
    </View>
  );
};

export default User;