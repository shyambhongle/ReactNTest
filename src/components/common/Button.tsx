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
      <Text style={styles.lablel}>{label}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '85%',
    height: 50,
    backgroundColor: '#E44533',
    borderRadius: 50,
  },
  lablel: {
    color: '#ffffff',
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
  },
});
