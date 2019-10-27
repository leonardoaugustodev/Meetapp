import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;

    img {
      margin-bottom: 20px;
    }

    input {
      height: 50px;
      width: 315px;
      border: 0;
      border-radius: 4px;
      padding: 10px;
      margin: 5px auto;

      font-size: 18px;
      color: #fff;

      background: rgba(0, 0, 0, 0.2);
    }

    button {
      width: 315px;
      height: 50px;

      margin: 10px auto;

      background: #f94d6a;
      border: 0;
      border-radius: 4px;

      font-size: 18px;
      font-weight: bold;
      color: #fff;

      &:hover {
        background: ${props => darken(0.05, '#f94d6a')};
      }
    }

    a {
      margin: 10px auto;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
      opacity: 0.6;
    }
  }
`;
