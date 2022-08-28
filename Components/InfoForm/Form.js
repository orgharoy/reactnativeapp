import React from 'react';
import { Text, View, Image, TouchableOpacity, TextInput } from 'react-native';

import FormStyles from './FormStyles.js';

const Form = () => {
  return (
    <View style={FormStyles.container}>

      <Text style={FormStyles.heading} >Please input your information</Text>
      <View style={FormStyles.formandbutton}>
        <View>
          <View>
            <Text style={FormStyles.formheading}> Leave Type</Text>
            <TextInput style={FormStyles.input} />
          </View>

          <View style={FormStyles.flexsection}>
            <View style={FormStyles.flexitem}>
              <Text style={FormStyles.formheading}> From Date</Text>
              <TextInput style={FormStyles.inputflex} />
            </View>
            <View>
              <Text style={FormStyles.formheading}> To Date</Text>
              <TextInput style={FormStyles.inputflex} />
            </View>
          </View>


          <View>
            <Text style={FormStyles.formheading}> Location </Text>
            <TextInput style={FormStyles.input} />
          </View>
          <View>
            <Text style={FormStyles.formheading}> Reason </Text>
            <TextInput style={FormStyles.input} />
          </View>
          <View style={FormStyles.upload}>
            <View style={FormStyles.uploadarrow}>
              <Image source={require('../../Images/Arrow.png')} />
            </View>
            <Text style={FormStyles.formheading} >File Upload</Text>
          </View>

        </View>
        
        <TouchableOpacity style={FormStyles.button}>
          <Text style={FormStyles.submittext}>Apply</Text>
        </TouchableOpacity>

      </View>
      
    
    </View>
  );
};

export default Form;