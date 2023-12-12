import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CopyRight = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>©Learnify.com</Text>
    </View>
  );
};

export default CopyRight;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 14,
    color: 'gray',
  },
});
