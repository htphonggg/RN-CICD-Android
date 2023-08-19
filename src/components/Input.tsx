import React from 'react';
import {
  View,
  Platform,
  TextInput,
  StyleSheet,
  TextInputProps,
} from 'react-native';

const Input = (props: TextInputProps) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} {...props} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    borderWidth: 0.4,
    borderColor: 'black',
    borderRadius: 8,
    paddingVertical: Platform.OS === 'ios' ? 16 : 0,
    paddingHorizontal: 16,
  },
  input: {
    flex: 1,
  },
});
