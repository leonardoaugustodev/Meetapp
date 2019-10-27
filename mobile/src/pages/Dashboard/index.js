/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-nested-ternary */
import React, {useEffect, useState, useMemo} from 'react';
import {format, addDays} from 'date-fns';
import pt from 'date-fns/locale/pt';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

import api from '~/services/api';
import Background from '~/components/Background';
import Meetup from '~/components/Meetup';
import {
  Container,
  DateSelector,
  List,
  DayDate,
  InfoContainer,
  InfoText,
} from './styles';

export default function Dashboard({navigation}) {
  const [meetups, setMeetups] = useState([]);
  const [date, setDate] = useState(new Date());
  const [nextPage, setNextPage] = useState(1);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('meetups', {
        params: {
          date,
          page: nextPage,
        },
      });

      setMeetups(meetups.concat(response.data));
    }

    loadMeetups();
  }, [date, nextPage]);

  const dayOfDate = useMemo(() => {
    return format(date, "dd 'de' MMMM", {
      locale: pt,
    });
  }, [date]);

  function handleAddDay() {
    setMeetups([]);
    setNextPage(1);
    setDate(addDays(date, 1));
  }

  function handleSubDay() {
    setMeetups([]);
    setNextPage(1);
    setDate(addDays(date, -1));
  }

  function loadMore() {
    setNextPage(nextPage + 1);
  }

  function refreshList() {
    setNextPage(1);
  }

  return (
    <Background>
      <Container>
        <DateSelector>
          <TouchableOpacity onPress={handleSubDay}>
            <Icon name="chevron-left" size={40} color="#fff" />
          </TouchableOpacity>
          <DayDate>{dayOfDate}</DayDate>

          <TouchableOpacity onPress={handleAddDay}>
            <Icon name="chevron-right" size={40} color="#fff" />
          </TouchableOpacity>
        </DateSelector>

        {meetups.length > 0 ? (
          <List
            data={meetups}
            keyExtractor={item => String(item.id)}
            onEndReachedThreshold={0.2}
            onEndReached={() => loadMore()}
            onRefresh={() => refreshList()}
            refreshing={refreshing}
            renderItem={({item}) => (
              <Meetup
                data={item}
                onSubscribe={() => navigation.navigate('Confirm', {item})}
                confirm={false}
              />
            )}
          />
        ) : (
          <InfoContainer>
            <InfoText>Nenhum meetup nesta data!</InfoText>
          </InfoContainer>
        )}
      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Inscrições',
  tabBarIcon: ({tintColor}) => (
    <Icon name="event" size={20} color={tintColor} />
  ),
};

Dashboard.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
