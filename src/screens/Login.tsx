import {Image, StatusBar, StyleSheet, View} from 'react-native';
import React from 'react';
import Header from '../components/common/Header';
import {SafeAreaView} from 'react-native-safe-area-context';
import Button from '../components/common/Button';
import Terms from '../components/auth/Terms';
import CopyRight from '../components/auth/CopyRight';

const CoverImage = require('../assest/images/cover.png');

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#ffffff"
        barStyle="dark-content"
      />
      <Header title="Login" />
      <View style={styles.coverImageWrapper}>
        <Image
          source={CoverImage}
          style={styles.coverImage}
          resizeMode="contain"
        />
      </View>
      <View style={styles.divideWrapper} />
      <View style={styles.sectionWrapper}>
        <View style={styles.phoneWrapper} />
        <Button label="Send OTP" cb={() => {}} />
        <Terms />
        <CopyRight />
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  coverImageWrapper: {
    width: '100%',
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  coverImage: {
    width: '100%',
    height: '100%',
  },
  sectionWrapper: {
    width: '100%',
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    // backgroundColor: 'green',
  },
  phoneWrapper: {
    width: '90%',
    height: 50,
    backgroundColor: 'red',
    marginVertical: 20,
  },
  divideWrapper: {
    width: '100%',
    height: 60,
    // backgroundColor: 'purple',
  },
});
