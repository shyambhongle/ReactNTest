import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';

const data = [
  {label: '+91', value: '+91'},
  {label: '+54', value: '+54'},
  {label: '+61', value: '+61'},
  {label: '+43', value: '+43'},
  {label: '+32', value: '+32'},
  {label: '+55', value: '+55'},
  {label: '+1', value: '+1'},
  {label: '+61', value: '+61'},
  {label: '+57', value: '+57'},
  {label: '+20', value: '+20'},
  {label: '+45', value: '+45'},
  {label: '+32', value: '+32'},
  {label: '+55', value: '+55'},
  {label: '+33', value: '+33'},
];

interface Props {
  cb: (code: string) => void;
  code: string;
}

const PhCodePicker = (props: Props) => {
  return (
    <View style={styles.container}>
      <Dropdown
        style={styles.dropdown}
        selectedTextStyle={styles.selectedTextStyle}
        iconStyle={styles.iconStyle}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={props.code}
        value={props.code}
        onChange={item => {
          props.cb(item.value);
        }}
      />
    </View>
  );
};

export default PhCodePicker;

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  dropdown: {
    height: 50,
    width: 70,
  },
  selectedTextStyle: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
});
