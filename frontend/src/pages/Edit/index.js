import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Input, Form } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';
import * as Yup from 'yup';
import { updateMeetupRequest } from '../../store/modules/meetup/actions';
import { Container } from './styles';
import Datepicker from '../../components/Datepicker';
import BannerInput from '~/components/BannerInput';

const schema = Yup.object().shape({
  id: Yup.string(),
  title: Yup.string().required('É necessário inserir um titulo.'),
  description: Yup.string().required('É necessário inserir uma descrição!'),
  date: Yup.date().required('É necessário inserir uma data!'),
  location: Yup.string().required('É necessário inserir uma localização!'),
  image_id: Yup.number().required(),
});

export default function Edit() {
  const dispatch = useDispatch();
  const { meetup } = useSelector(state => state.meetup);

  function handleSubmit(data) {
    console.tron.log('@@@@');
    console.tron.log(data);
    dispatch(updateMeetupRequest(data));
  }

  return (
    <Container>
      <Form initialData={meetup} schema={schema} onSubmit={handleSubmit}>
        <Input name="id" hidden />
        <BannerInput name="image_id" />
        <Input name="title" type="text" placeholder="Título do Meetup" />

        <Input
          name="description"
          type="text"
          placeholder="Descrição completa"
          multiline
          rows="6"
        />

        <Datepicker name="date" placeholder="Data do meetup" />

        <Input name="location" type="text" placeholder="Localização" />

        <button type="submit">
          <MdAddCircleOutline />
          <span>Salvar</span>
        </button>
      </Form>
    </Container>
  );
}
