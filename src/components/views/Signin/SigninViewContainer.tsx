import React from 'react';

import { SigninView } from './SigninView';

export function SigninViewContainer() {
  return (
    <SigninView
      onSubmit={(values, setSubmitting) => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }}
    />
  );
}
