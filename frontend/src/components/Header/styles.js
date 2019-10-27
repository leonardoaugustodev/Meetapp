import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  height: 92px;
  width: 100%;

  padding: 0 200px;

  /* background: rgba(0, 0, 0, 0.3); */
  background: #333;

  display: flex;
  justify-content: space-between;
  align-items: center;

  > button {
    background: none;
  }

  img {
    width: 32px;
    height: 32px;
  }

  div {
    display: flex;
    align-items: center;

    margin-right: 10px;

    div {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      span {
        margin: 5px;

        font-size: 14px;
        font-weight: bold;
        color: #fff;
      }

      a {
        margin: 5px;
        color: #fff;
        opacity: 0.5;
      }
    }

    > button {
      /* width: 70px; */
      height: 42px;

      padding: 0 20px;

      background: #d44059;

      font-size: 16px;
      color: #fff;

      &:hover {
        background: ${darken(0.05, '#d44059')};
      }
    }
  }
`;
