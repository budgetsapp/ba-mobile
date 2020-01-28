import React from 'react';
import { View } from 'react-native';

import { Input } from '../../components/atoms';
import { TextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 10
  }
});

type Props = {
  placeholder: string;
  errorMessage: string;
  value: string;
  onChangeText: (value: string) => undefined;
};

export function FormInput({
  placeholder,
  errorMessage,
  value,
  onChangeText
}: Props) {
  return (
    <View style={styles.container}>
      <Input value={value} onChangeText={onChangeText} />
    </View>
  );
}
