import React, {useState} from 'react';
import {Text, StyleSheet} from 'react-native';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const styles = StyleSheet.create({
  cell: {
    width: 60,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 1,
    marginHorizontal: 5,
    textAlign: 'center',
    borderRadius: 10,
    borderColor: 'gray',
    marginBottom: 50,
  },
  focusCell: {
    borderColor: '#000',
  },
});

const CELL_COUNT = 4;

const OtpInput = () => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <CodeField
      ref={ref}
      {...props}
      value={value}
      onChangeText={setValue}
      cellCount={CELL_COUNT}
      keyboardType="number-pad"
      textContentType="oneTimeCode"
      renderCell={({index, symbol, isFocused}) => (
        <Text
          key={index}
          style={[styles.cell, isFocused && styles.focusCell]}
          onLayout={getCellOnLayoutHandler(index)}>
          {symbol || (isFocused ? <Cursor /> : null)}
        </Text>
      )}
    />
  );
};

export default OtpInput;
