/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import {
  MdModeEdit,
  MdDeleteForever,
  MdEvent,
  MdLocationOn,
  MdChevronLeft,
} from 'react-icons/md';
import history from '../../services/history';
import { deleteMeetupRequest } from '../../store/modules/meetup/actions';
import { Container, Title, Image, Description, Footer, Button } from './styles';

export default function Details() {
  const dispatch = useDispatch();
  const { meetup } = useSelector(state => state.meetup);

  function handleBack() {
    history.push('/dashboard');
  }

  function handleEdit() {
    history.push(`/edit/${meetup.id}`);
  }

  function handleDelete() {
    dispatch(deleteMeetupRequest(meetup.id));
  }

  const dateFormatted = format(
    parseISO(meetup.date),
    "dd 'de' MMM, 'às' HH'h'",
    {
      locale: pt,
    }
  );

  return (
    <Container>
      <Title>
        <div>
          <Button color="#333" type="button" onClick={handleBack}>
            <MdChevronLeft />
            <span>Voltar</span>
          </Button>
          <h1>{meetup.title}</h1>
        </div>
        <div>
          <Button color="#039dfc" type="button" onClick={handleEdit}>
            <MdModeEdit />
            <span>Editar</span>
          </Button>
          <Button color="#d44059" type="button" onClick={handleDelete}>
            <MdDeleteForever />
            <span>Cancelar</span>
          </Button>
        </div>
      </Title>

      <Image
        src={
          (meetup.image && meetup.image.url) ||
          'https://images.unsplash.com/photo-1490111718993-d98654ce6cf7'
        }
        alt="image"
      />
      <Description>
        <p>{meetup.description}</p>
      </Description>
      <Footer>
        <span>
          <MdEvent />
          {dateFormatted}
        </span>
        <span>
          <MdLocationOn />
          {meetup.location}
        </span>
      </Footer>
    </Container>
  );
}
