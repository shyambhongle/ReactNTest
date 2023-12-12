import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';

const data = [
  {label: '+91', value: '1'},
  {label: '+707', value: '2'},
  {label: '12', value: '3'},
  {label: '+91', value: '1'},
  {label: '+707', value: '2'},
  {label: '12', value: '3'},
];
const PhCodePicker = () => {
  const [value, setValue] = useState<string>('+91');

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
        placeholder={value}
        value={value}
        onChange={item => {
          setValue(item.value);
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
  },
  dropdown: {
    height: 50,
    width: 70,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
});
