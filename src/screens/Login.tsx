import {Image, StatusBar, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import Header from '../components/common/Header';
import {SafeAreaView} from 'react-native-safe-area-context';
import Button from '../components/common/Button';
import Terms from '../components/auth/Terms';
import PhCodePicker from '../components/auth/PhCodePicker';
import PhoneInput from '../components/common/PhoneInput';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../ts/app.type';
import {StackNavigationProp} from '@react-navigation/stack';

const CoverImage = require('../assets/images/cover.png');

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phCode, setPhCode] = useState('+91');
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const phChangleHandler = (ph: string) => {
    setPhoneNumber(ph);
  };

  const phCodeHandler = (code: string) => {
    setPhCode(code);
  };

  const onSubmit = () => {
    navigation.navigate('OtpVerify', {
      code: phCode,
      ph: phoneNumber,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#ffffff"
        barStyle="dark-content"
      />
      <Header title="Log in" />
      <View style={styles.coverImageWrapper}>
        <Image
          source={CoverImage}
          style={styles.coverImage}
          resizeMode="contain"
        />
      </View>
      <View style={styles.divideWrapper} />
      <View style={styles.phoneWrapper}>
        <PhCodePicker cb={phCodeHandler} code={phCode} />
        <PhoneInput cb={phChangleHandler} />
      </View>
      <Button label="Get OTP" cb={onSubmit} />
      <Terms />
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
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
    width: '100%',
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    // backgroundColor: 'green',
  },
  phoneWrapper: {
    width: '85%',
    height: 50,
    flexDirection: 'row',
    borderWidth: 0.5,
    borderRadius: 33,
    borderColor: 'gray',
    backgroundColor: '#ffffff',
    marginBottom: 40,
  },
  divideWrapper: {
    width: '100%',
    height: 60,
    // backgroundColor: 'purple',
  },
});
