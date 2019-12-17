import React, { forwardRef } from 'react';
import Icon from 'react-native-vector-icons';
import PropTypes from 'prop-types';

import { Container, TInput } from './styles';

function Input({ style, icon, ...rest }, ref) {
  return (
    <Container style={style}>
      {icon && <Icon name={icon} size={20} color="rgba(255, 255, 255, 0.8)" />}
      <TInput {...rest} ref={ref} />
    </Container>
  );
}

Input.propType = {
  icon: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Input.defaultProps = {
  icon: null,
  style: {},
};

export default forwardRef(Input);
