import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: '100%',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderColor: 'gray',
    borderWidth: 1
  }
});

type Props = {
  value: string;
  onChangeText: (value: string) => undefined;
};

export function Input({ value, onChangeText }: Props) {
  return (
    <TextInput
      style={styles.input}
      onChangeText={value => onChangeText(value)}
      value={value}
    />
  );
}
