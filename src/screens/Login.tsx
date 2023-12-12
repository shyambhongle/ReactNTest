import {
  Image,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import React from 'react';
import Header from '../components/common/Header';
import {SafeAreaView} from 'react-native-safe-area-context';
import Button from '../components/common/Button';
import Terms from '../components/auth/Terms';
import CopyRight from '../components/auth/CopyRight';
import PhCodePicker from '../components/auth/PhCodePicker';
import PhoneInput from '../components/common/PhoneInput';

const CoverImage = require('../assest/images/cover.png');

const Login = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
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
          <View style={styles.phoneWrapper}>
            <PhCodePicker />
            <PhoneInput />
          </View>
          <Button label="Send OTP" cb={() => {}} />
          <Terms />
          <CopyRight />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  coverImageWrapper: {
    width: '100%',
    height: '35%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  coverImage: {
    width: '100%',
    height: '100%',
  },
  sectionWrapper: {
    height: '50%',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    // backgroundColor: 'green',
  },
  phoneWrapper: {
    width: '90%',
    height: 50,
    flexDirection: 'row',
    borderWidth: 0.5,
    borderRadius: 33,
    backgroundColor: '#ffffff',
  },
  divideWrapper: {
    width: '100%',
    height: 60,
    // backgroundColor: 'purple',
  },
});
