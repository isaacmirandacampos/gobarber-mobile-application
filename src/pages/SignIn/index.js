import React from 'react';
import { Text } from 'react-native';

import Background from '~/components/Background';
// import { Container } from './styles';
import Input from '~/components/Input';

export default function SignIn() {
  return (
    <Background>
      <Input style={{ marginTop: 10 }} />
    </Background>
  );
}
