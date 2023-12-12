import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Terms = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        By Signing Up you agree with out Terms and Condition
      </Text>
    </View>
  );
};

export default Terms;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  label: {
    width: '100%',
    textAlign: 'center',
    fontSize: 14,
    color: 'gray',
  },
});
