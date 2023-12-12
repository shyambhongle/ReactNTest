import {StyleSheet, TextInput} from 'react-native';
import React from 'react';

const PhoneInput = () => {
  return <TextInput style={styles.container} placeholder="Phone Number" />;
};

export default PhoneInput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
