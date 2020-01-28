import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FormInput } from '../../components/molecules';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export function SigninView() {
  return (
    <View style={styles.container}>
      <Text>SigninView</Text>
      <FormInput placeholder='Login' onChangeText={() => {}} />
      <FormInput placeholder='Password' onChangeText={() => {}} />
    </View>
  );
}
