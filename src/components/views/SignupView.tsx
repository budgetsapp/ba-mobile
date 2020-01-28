import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export function SignupView() {
  return (
    <View style={styles.container}>
      <Text>SignupView</Text>
    </View>
  );
}
