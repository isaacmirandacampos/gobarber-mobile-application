import React, { useMemo, useState } from 'react';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '~/services/api';

import {
 Container, Left, Avatar, Info, Name, Time
} from './styles';

export default function Appointment({ data }) {
  const dateParsed = useMemo(
    () => formatRelative(parseISO(data.date), new Date(), {
        locale: pt,
        addSuffix: true,
      }),
    [data.date],
  );
  return (
    <Container past={data.past}>
      <Left>
        <Avatar
          source={{
            uri: data.provider.avatar
              ? data.provider.avatar.url
              : `https://api.adorable.io/avatars/50/${data.provider.name}.png`,
          }}
        />
        <Info>
          <Name>{data.provider.name}</Name>
          <Time>{dateParsed}</Time>
        </Info>
      </Left>
      {data.cancelable && (
        <TouchableOpacity onPress={() => {}}>
          <Icon name="event-busy" size={20} color="#f64c75" />
        </TouchableOpacity>
  )}
  </Container>
  )
}
