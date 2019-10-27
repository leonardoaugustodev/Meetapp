import styled from 'styled-components';

export const Container = styled.div`
  margin: 30px auto;

  max-width: 940px;

  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  color: #fff;
`;

export const EventsList = styled.ul``;

export const Event = styled.div`
  width: 100%;
  background: rgba(0, 0, 0, 0.2);
  padding: 5px 20px;
  margin: 10px 0;

  border: 0;
  border-radius: 4px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  color: #fff;

  > span {
    font-size: 16px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;

    > span {
      color: #aaa;
      margin: 0 20px;
    }

    > button {
      width: 24px;
      height: 24px;
      padding: 0;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0);

      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        background: rgba(255, 255, 255, 0);
      }
    }
  }
`;
