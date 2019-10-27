import styled from 'styled-components/native';
import {Image} from 'react-native';

export const Container = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 64px;

  background: #111;
`;

export const Logo = styled(Image)`
  height: 25px;
  width: 25px;
`;
