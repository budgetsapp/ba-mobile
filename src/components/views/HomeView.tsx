import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export function HomeView() {
  return (
    <View style={styles.container}>
      <Text>HomeView</Text>
    </View>
  );
}
