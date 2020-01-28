import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import { Theme } from '../../components/theme';

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: '100%',
    borderRadius: 5,
    borderColor: Theme.darkBrown,
    backgroundColor: Theme.brown,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

type Props = {
  onPress: () => undefined;
  text: string;
};

export function Button({ onPress, text }: Props) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
}
