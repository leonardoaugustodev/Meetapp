import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { editMeetupRequest } from '../../store/modules/meetup/actions';

import history from '../../services/history';
import api from '../../services/api';

import { Container, Title, EventsList, Event } from './styles';

export default function Dashboard() {
  const dispatch = useDispatch();
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function listMeetup() {
      try {
        const response = await api.get('/meetups?own=true');

        setMeetups(response.data);
      } catch (err) {
        console.tron.log(err);
      }
    }

    listMeetup();
  }, []);

  function handleNewMeetup() {
    history.push('/newmeetup');
  }

  function handleViewMeetup(meetup) {
    dispatch(editMeetupRequest(meetup));
  }

  return (
    <Container>
      <Title>
        <h1>Meus meetups</h1>

        <button type="submit" onClick={handleNewMeetup}>
          <MdAddCircleOutline />
          <span>Novo meetup</span>
        </button>
      </Title>

      <EventsList>
        {meetups.map(meetup => (
          <Event key={meetup.id}>
            <span>{meetup.title}</span>
            <div>
              <span>
                {format(parseISO(meetup.date), "dd 'de' MMM, 'às' hh'h'", {
                  locale: pt,
                })}
              </span>
              {/* <span>24 de Junho, às 20h</span> */}
              <button type="button" onClick={() => handleViewMeetup(meetup)}>
                <MdChevronRight size={24} />
              </button>
            </div>
          </Event>
        ))}
      </EventsList>
    </Container>
  );
}
