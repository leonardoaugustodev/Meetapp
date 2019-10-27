import React from 'react';
import {Image} from 'react-native';
import logo from '~/assets/M.png';

import {Container, Logo} from './styles';

export default function Header() {
  return (
    <Container>
      <Logo source={logo} alt="logo" />
    </Container>
  );
}
