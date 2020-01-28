import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

import { Input } from '../../components/atoms';
import { ErrorLabel } from '../../components/atoms';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 10
  },
  errorLabelContainer: {
    justifyContent: 'center',
    height: 18
  }
});

type Props = {
  placeholder: string;
  errorMessage: string;
  value: string;
  onChangeText: (value: string) => void;
  onBlur?: (e: any) => void;
};

export function FormInput({
  placeholder,
  errorMessage,
  value,
  onChangeText,
  onBlur
}: Props) {
  return (
    <View style={styles.container}>
      <Input value={value} onChangeText={onChangeText} onBlur={onBlur} />
      <View style={styles.errorLabelContainer}>
        <ErrorLabel text={errorMessage} />
      </View>
    </View>
  );
}
