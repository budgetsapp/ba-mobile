import React from 'react';
import { Text, StyleSheet } from 'react-native';

import { Theme } from '../../components/theme';

const styles = StyleSheet.create({
  text: {
    color: Theme.red
  }
});

type Props = {
  text: string;
};

export function ErrorLabel({ text }: Props) {
  return <Text style={styles.text}>{text}</Text>;
}
