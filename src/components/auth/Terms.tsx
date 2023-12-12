import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CopyRight from './CopyRight';

const Terms = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        By signing up you agree with our Terms and Conditions
      </Text>
      <CopyRight />
    </View>
  );
};

export default Terms;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
    width: '80%',
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
  label: {
    width: '100%',
    textAlign: 'center',
    fontSize: 12,
    color: '#787878',
    fontFamily: 'Poppins-Regular',
  },
});
