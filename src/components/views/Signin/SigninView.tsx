import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { FormInput } from '../../../components/molecules';
import { Button } from '../../../components/atoms';
import { Theme } from '../../../components/theme';

const DEFAULT_LOGIN = 'ba-user-1';
const DEFAULT_PASSWORD = 'ba-password';

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: Theme.lightBrown,
    alignItems: 'center'
  },
  container: {
    padding: 20,
    width: '100%',
    maxWidth: 550,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

type FormValues = {
  login: string;
  password: string;
};

type Props = {
  onSubmit: (
    values: FormValues,
    setSubmitting: (value: boolean) => void
  ) => void;
};

const formSchema = Yup.object().shape({
  login: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required')
});

function getError(errors, touched, fieldName: string) {
  return errors[fieldName] && touched[fieldName] ? errors[fieldName] : '';
}

export function SigninView({ onSubmit }: Props) {
  return (
    <Formik
      initialValues={{
        login: DEFAULT_LOGIN,
        password: DEFAULT_PASSWORD
      }}
      validationSchema={formSchema}
      onSubmit={(values, { setSubmitting }) => onSubmit(values, setSubmitting)}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
        isSubmitting,
        isValid
      }) => {
        return (
          <View style={styles.mainContainer}>
            <View style={styles.container}>
              <Text>Budgets app</Text>
              <FormInput
                placeholder='Login'
                value={values.login}
                onChangeText={value => handleChange('login')(value)}
                onBlur={handleBlur('login')}
                errorMessage={getError(errors, touched, 'login')}
              />
              <FormInput
                placeholder='Password'
                value={values.password}
                onChangeText={value => handleChange('password')(value)}
                onBlur={handleBlur('login')}
                errorMessage={getError(errors, touched, 'password')}
              />
              {isValid}
              <Button
                text='Login'
                disabled={!isValid || isSubmitting}
                onPress={() => {
                  handleSubmit();
                }}
              />
            </View>
          </View>
        );
      }}
    </Formik>
  );
}
