import React from 'react';
import { Text, View, Image } from 'react-native';

import NavStyles from './NavbarStyles.js';


const Navbar = () => {
  return (
    <View style={NavStyles.box}>
      <View style={NavStyles.content}>
        <Image source={require('../../Images/hamburger.png')} />
        <Text style={NavStyles.text}>Employee Profile</Text >
      </View>
    </View>
  );
};

export default Navbar;