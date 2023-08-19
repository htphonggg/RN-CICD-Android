import React from 'react';
import {Text, Pressable, PressableProps, StyleSheet} from 'react-native';

const Button = (props: PressableProps) => {
  return (
    <Pressable style={styles.container} {...props}>
      <Text>Sign In</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 48,
    paddingVertical: 16,
    backgroundColor: 'pink',
    borderRadius: 8,
  },
});
