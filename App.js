import React from 'react';
import { ScrollView } from 'react-native';
import Navbar from './Components/Navbar/Navbar.js';
import User from './Components/User/User.js';
import Application from './Components/Application/Application.js';
import Form from './Components/InfoForm/Form.js';


const App = () => {
  return (
    <>
      <Navbar />
      <ScrollView>
        <User />
        <Application />
        <Form />
      </ScrollView>
    </>
  );
};

export default App;
