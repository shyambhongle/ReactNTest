import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface Props {
  title: string;
  showBack?: boolean;
}

const Header = (props: Props) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.backIcon}></Pressable>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    color: '#262626',
    fontWeight: '400',
  },
  backIcon: {
    width: 50,
    height: 50,
    position: 'absolute',
    left: 10,
  },
});
