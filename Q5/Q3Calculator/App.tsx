import React from 'react';
import { View, Text } from 'react-native';
import Calculator from './Calculator'; // Import Calculator component (adjust for React Native)

const App = () => {
  return (
    <View >
      <Calculator /> 
    </View>
  );
};

// React Native styles
const appStyle = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#f0f0f0',
};

const headingStyle = {
  fontSize: 24,
  marginBottom: 20,
  color: '#333',
};

export default App;
