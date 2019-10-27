import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  max-width: 940px;

  margin: 0 auto;

  color: #fff;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.div`
  width: 100%;
  margin: 30px 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    align-items: center;

    h1 {
      margin-left: 10px;
    }
  }
`;

export const Button = styled.button`
  height: 36px;

  margin: 5px;
  padding: 0 10px;

  font-size: 16px;
  color: #fff;
  background: ${props => props.color};

  &:hover {
    background: ${props => darken(0.05, props.color)};
  }

  display: flex;
  align-items: center;

  span {
    margin: 0 5px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 250px;
  background: #444;
  border: 0;
  border-radius: 4px;
`;

export const Description = styled.div`
  p {
    margin-top: 10px;
    margin-bottom: 6px;
    font-size: 16px;
    line-height: 32px;
  }
`;
export const Footer = styled.div`
  width: 100%;
  font-size: 14px;
  color: #a5a5a5;

  span + span {
    margin-left: 10px;
  }
`;
