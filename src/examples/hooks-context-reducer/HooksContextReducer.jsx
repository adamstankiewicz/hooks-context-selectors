import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Stack,
} from '@edx/paragon';

import BreadcrumbNav from '../../components/breadcrumb/BreadcrumbNav';

import HooksContextReducerProvider from './HooksContextReducerProvider';

import Count1 from './Count1';
import Count2 from './Count2';

const HooksContextReducerExample = () => (
  <HooksContextReducerProvider>
    <Container className="py-3">
      <BreadcrumbNav activeLabel="React hooks + context (reducer)" />
      <h1 className="mb-3">React hooks + context (reducer)</h1>
      <p className="small">{Math.random()}</p>
      <HooksContextReducerCounter />
    </Container>
  </HooksContextReducerProvider>
);

const HooksContextReducerCounter = () => (
  <Stack gap={2}>
    <Count1 />
    <Count2 />
  </Stack>
);

HooksContextReducerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HooksContextReducerExample;
