import React from 'react';

import { SigninView } from './SigninView';
import BaAuthApiClient from 'ba-auth-api-client';
import { storage } from '../../../services/storage';

const URL = 'http://192.168.54.184:5011';
const client = new BaAuthApiClient(URL, {
  storage: storage
});

export function SigninViewContainer() {
  async function login(login, password, onFinish) {
    try {
      const res = await client.login(login, password);
      alert(JSON.stringify(res, null, 2));
    } catch (e) {
      console.log('Error', e);
    } finally {
      onFinish();
    }
  }

  return (
    <SigninView
      onSubmit={async (values, setSubmitting) => {
        await login(values.login, values.password, () => setSubmitting(false));
      }}
    />
  );
}
