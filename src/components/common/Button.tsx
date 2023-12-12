import {Pressable, StyleSheet, Text} from 'react-native';
import React from 'react';

interface Props {
  label: string;
  cb: () => void;
}

const Button = (props: Props) => {
  const {label, cb} = props;

  return (
    <Pressable style={styles.container} onPress={cb}>
      <Text>{label}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    height: 50,
    backgroundColor: 'red',
    borderRadius: 50,
  },
});
