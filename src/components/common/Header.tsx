import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../ts/app.type';

const BackIcon = require('../../assets/images/back.png');

interface Props {
  title: string;
  showBack?: boolean;
}

const Header = (props: Props) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      {props.showBack && (
        <Pressable style={styles.backIcon} onPress={goBack}>
          <Image source={BackIcon} style={styles.backIcon} />
        </Pressable>
      )}
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
    fontSize: 20,
    color: '#262626',
    fontFamily: 'Poppins-Bold',
  },
  backIcon: {
    width: 20,
    height: 20,
    position: 'absolute',
    left: 15,
  },
});
