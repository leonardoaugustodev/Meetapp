import styled, { css } from 'styled-components';

export const Container = styled.label`
  align-self: stretch;
  label {
    height: 300px;
    width: 100%;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 4px;
    cursor: pointer;
    position: relative;
    margin-bottom: 10px;
    display: flex;
    &:hover {
      background: rgba(0, 0, 0, 0.4);
    }
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      align-self: center;
      justify-content: center;
      justify-items: center;
      width: 100%;
      ${props =>
        props.preview &&
        css`
          display: none;
        `}
    }
    span {
      color: #666;
      font-size: 20px;
      flex-grow: 1;
      align-self: center;
      text-align: center;
    }
    input {
      display: none;
    }
    img {
      height: 100%;
      width: 100%;
      border-radius: 4px;
      &:hover {
        opacity: 0.8;
      }
    }
  }
`;
