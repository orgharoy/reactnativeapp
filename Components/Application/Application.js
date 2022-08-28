import React from 'react';
import { Text, View, Image } from 'react-native';

import ApplicationStyles from './ApplicationStyles.js';

const Application = () => {
  return (
    <View style={ApplicationStyles.container}>
      <Text style={ApplicationStyles.heading}>Employee Application</Text>
      <View style={ApplicationStyles.items}>
        <View style={ApplicationStyles.item}>
          <Image source={require('../../Images/leave.png')} />
          <Text style={ApplicationStyles.itemtext} >Leave</Text>
        </View>
        <View style={[ApplicationStyles.item, ApplicationStyles.iteminside]}>
          <Image source={require('../../Images/movement.png')} />
          <Text style={ApplicationStyles.itemtext}>Movement</Text>
        </View>
        <View style={[ApplicationStyles.item, ApplicationStyles.iteminside]}>
          <Image source={require('../../Images/attendance.png')} />
          <Text style={ApplicationStyles.itemtext}>Remote Attendance</Text>
        </View>
        <View style={[ApplicationStyles.item, ApplicationStyles.iteminside]}>
          <Image source={require('../../Images/IOU.png')} />
          <Text style={ApplicationStyles.itemtext}>IOU</Text>
        </View>
        <View style={ApplicationStyles.item}>
          <Image source={require('../../Images/loan.png')} />
          <Text style={ApplicationStyles.itemtext}>Loan</Text>
        </View>
        <View style={[ApplicationStyles.item, ApplicationStyles.iteminside]}>
          <Image source={require('../../Images/overtime.png')} />
          <Text style={ApplicationStyles.itemtext}>Overtime</Text>
        </View>
      </View>
    </View>
  );
};

export default Application;