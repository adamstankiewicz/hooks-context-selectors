import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Stack,
} from '@edx/paragon';

import BreadcrumbNav from '../../components/breadcrumb/BreadcrumbNav';

import BasicHooksContextProvider from './BasicHooksContextProvider';
import Count1 from './Count1';
import Count2 from './Count2';

const BasicHooksContextExample = () => (
  <Container className="py-3">
    <BasicHooksContextProvider>
      <BreadcrumbNav activeLabel="Basic React hooks + context" />
      <h1 className="mb-3">Basic React hooks + context</h1>
      <p className="small">{Math.random()}</p>
      <BasicHooksContextCounter />
    </BasicHooksContextProvider>
  </Container>
);

const BasicHooksContextCounter = () => (
  <Stack gap={2}>
    <Count1 />
    <Count2 />
  </Stack>
);

BasicHooksContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BasicHooksContextExample;
