import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Formik } from 'formik';

import { FormInput } from '../../../components/molecules';
import { Button } from '../../../components/atoms';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

type SigninForm = {
  login: string;
  password: string;
};

type Props = {
  onSubmit: (form: SigninForm) => undefined;
};

export function SigninView({ onSubmit }: Props) {
  return (
    <Formik
      initialValues={{
        login: '',
        password: ''
      }}
      onSubmit={values => onSubmit(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => {
        return (
          <View style={styles.container}>
            <Text>SigninView</Text>
            <FormInput
              placeholder='Login'
              value={values.login}
              onChangeText={value => handleChange('login')(value)}
            />
            <FormInput
              placeholder='Password'
              value={values.password}
              onChangeText={value => handleChange('password')(value)}
            />
            <Button
              text='Login'
              onPress={() => {
                handleSubmit();
              }}
            />
          </View>
        );
      }}
    </Formik>
  );
}
