import styled from 'styled-components';

export const Container = styled.div`
  margin: 30px auto;

  max-width: 940px;

  form {
    display: flex;
    flex-direction: column;

    > span {
      font-weight: bold;
      color: #f94d6a;
      margin-left: 5px;
    }

    img {
      width: 100%;
      max-width: 100%;
      margin: 10px 0;
      border-color: #666;
      border-radius: 4px;
      background: rgba(0, 0, 0, 0.3);
      height: 300px;
    }

    input {
      height: 50px;
    }

    input,
    textarea {
      width: 100%;
      border: 0;
      border-radius: 4px;
      padding: 10px;
      margin: 5px auto;

      font-size: 18px;

      color: #fff;

      background: rgba(0, 0, 0, 0.2);
    }

    /* width: 100%;
      display: flex;
      justify-content: flex-end; */
    > button {
      height: 50px;

      margin: 10px 0;
      padding: 0 20px;

      background: #f94d6a;
      border: 0;
      border-radius: 4px;

      font-size: 18px;
      font-weight: bold;
      color: #fff;

      display: flex;
      align-items: center;

      svg {
        margin-right: 5px;
      }
    }
  }
`;
