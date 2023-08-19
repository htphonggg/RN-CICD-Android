import React from 'react';
import {Dimensions, SafeAreaView, StyleSheet, Text, View} from 'react-native';

import Button from '../components/Button';
import Input from '../components/Input';

const SignInScreen = () => {
  const styles = SignInStyles();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>React Native CI-CD</Text>
      <View style={styles.inputWrapper}>
        <Input placeholder="Email" />
        <Input placeholder="Password" />
      </View>
      <Button />
    </SafeAreaView>
  );
};

export default SignInScreen;

const SignInStyles = () => {
  const {height} = Dimensions.get('window');
  return StyleSheet.create({
    container: {
      height,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 24,
      fontStyle: 'italic',
      fontWeight: 'bold',
    },
    inputWrapper: {
      rowGap: 24,
      paddingHorizontal: 24,
      marginVertical: '10%',
    },
  });
};
