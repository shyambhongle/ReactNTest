import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CopyRight = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>©Learnify Technologies Pvt. Ltd</Text>
    </View>
  );
};

export default CopyRight;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 12,
    color: '#787878',
    fontFamily: 'Poppins-Regular',
  },
});
