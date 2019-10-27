import React, {useMemo} from 'react';
import {parseISO, format} from 'date-fns';
import pt from 'date-fns/locale/pt';
import {TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

import {Container, Info, Name, Date, Location, Author, MImage} from './styles';
import Button from '~/components/Button';

export default function Subscription({data, onCancel}) {
  const dateParsed = useMemo(() => {
    return format(parseISO(data.meetup.date), "dd 'de' MMMM', às' HH'hs", {
      locale: pt,
    });
  }, [data.meetup.date]);

  return (
    <Container>
      <MImage
        source={{
          uri: data.meetup.image
            ? data.meetup.image.url
            : 'https://via.placeholder.com/150x100',
        }}
      />

      <Info>
        <Name>{data.meetup.title}</Name>
        <Date>{dateParsed}</Date>
        <Location>{data.meetup.location}</Location>
        <Author>Organizador: {data.meetup.user.name}</Author>
      </Info>

      <TouchableOpacity onPress={onCancel}>
        <Button>Cancelar inscrição</Button>
      </TouchableOpacity>
    </Container>
  );
}

Subscription.propTypes = {
  data: PropTypes.objectOf(PropTypes.object()),
  onCancel: PropTypes.func,
};

Subscription.defaultProps = {
  data: {},
  onCancel: () => {},
};
