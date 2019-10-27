import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  align-self: center;
  margin-top: 30px;
`;

export const List = styled.FlatList.attrs({
  showVerticalScrollIndicator: false,
  contentContainerStyle: {padding: 30},
})``;

export const DateSelector = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin-top: 20px;
`;
export const DayDate = styled.Text`
  margin: 0 20px;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;

export const InfoContainer = styled.View`
  margin-top: 30px;
  display: flex;
  align-items: center;
  width: 100%;
`;

export const InfoText = styled.Text`
  font-size: 20px;
  color: #fff;
`;
