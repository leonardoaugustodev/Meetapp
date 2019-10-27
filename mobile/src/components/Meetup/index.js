import React, {useMemo} from 'react';
import {parseISO, format} from 'date-fns';
import PropTypes from 'prop-types';

import {TouchableOpacity} from 'react-native';

import {
  Container,
  Info,
  Name,
  Date,
  Location,
  Description,
  Author,
  MImage,
  SubmitButton,
} from './styles';
import Button from '~/components/Button';

export default function Meetup({data, onSubscribe, confirm}) {
  const dateParsed = useMemo(() => {
    return format(parseISO(data.date), "dd 'de' MMMM', às' HH'hs");
  }, [data.date]);

  const buttonText = confirm ? 'Confirmar inscrição' : 'Realizar inscrição';

  return (
    <Container>
      <MImage
        source={{
          uri: data.image
            ? data.image.url
            : 'https://via.placeholder.com/150x100',
        }}
      />
      <Info>
        <Name>{data.title}</Name>
        {confirm && <Description>{data.description}</Description>}

        <Date>{dateParsed}</Date>
        <Location>{data.location}</Location>
        <Author>Organizador: {data.user.name}</Author>
      </Info>

      <TouchableOpacity onPress={onSubscribe} disabled={data.past}>
        <SubmitButton past={data.past}>{buttonText}</SubmitButton>
      </TouchableOpacity>
    </Container>
  );
}

Meetup.propTypes = {
  data: PropTypes.objectOf(PropTypes.object()),
  onSubscribe: PropTypes.func,
  confirm: PropTypes.bool,
};

Meetup.defaultProps = {
  data: {},
  onSubscribe: () => {},
  confirm: false,
};
