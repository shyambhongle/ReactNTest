import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../components/common/Header';
import {SafeAreaView} from 'react-native-safe-area-context';
import Button from '../components/common/Button';
import Terms from '../components/auth/Terms';
import CopyRight from '../components/auth/CopyRight';
import OtpInput from '../components/auth/OtpInput';
import {useRoute, RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../ts/app.type';
import DropdownAlert, {
  DropdownAlertData,
  DropdownAlertType,
} from 'react-native-dropdownalert';

const CoverImage = require('../assets/images/cover.png');

const OtpVerify = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'OtpVerify'>>();
  const {ph, code} = route.params;
  let alert = (_data: DropdownAlertData) =>
    new Promise<DropdownAlertData>(res => res);
  const handleSubmit = async () => {
    await alert({
      type: DropdownAlertType.Success,
      title: 'Success',
      message: 'Your details has been submitted',
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#ffffff"
        barStyle="dark-content"
      />
      <Header title="OTP Verify" showBack />
      <View style={styles.coverImageWrapper}>
        <Image
          source={CoverImage}
          style={styles.coverImage}
          resizeMode="contain"
        />
      </View>
      <View style={styles.divideWrapper}>
        <Text style={styles.otpNote}>OTP Sent to</Text>
        <Text style={styles.phPlaceholder}>{`${code} ${ph}`}</Text>
      </View>
      <View style={styles.sectionWrapper}>
        <OtpInput />
        <Button label="Verify OTP" cb={handleSubmit} />
        <Terms />
        <CopyRight />
      </View>
      <DropdownAlert alert={func => (alert = func)} />
    </SafeAreaView>
  );
};

export default OtpVerify;

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
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
  },
  phPlaceholder: {
    fontSize: 16,
    color: '#262626',
    fontFamily: 'Poppins-Medium',
  },
  otpNote: {
    fontSize: 16,
    color: '#262626',
    fontFamily: 'Poppins-Regular',
  },
});
