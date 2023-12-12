import {StyleSheet, TextInput} from 'react-native';
import React from 'react';

interface Props {
  cb: (ph: string) => void;
}

const PhoneInput = (props: Props) => {
  return (
    <TextInput
      style={styles.container}
      placeholder="Phone Number"
      keyboardType="phone-pad"
      onChangeText={props.cb}
    />
  );
};

export default PhoneInput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: 'gray',
    fontFamily: 'Poppins-Regular',
    padding: 0,
    margin: 0,
    fontSize: 16,
  },
  lable: {
    fontFamily: 'Poppins-Regular',
  },
  placeHodler: {
    fontFamily: 'Poppins-Regular',
  },
});
