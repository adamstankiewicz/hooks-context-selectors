import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Stack,
} from '@edx/paragon';

import BreadcrumbNav from '../../components/breadcrumb/BreadcrumbNav';

import HooksContextSelectorsProvider from './HooksContextSelectorsProvider';

import Count1 from './Count1';
import Count2 from './Count2';

const HooksContextSelectorsExample = () => (
  <HooksContextSelectorsProvider>
    <Container className="py-3">
      <BreadcrumbNav activeLabel="React hooks + context selectors" />
      <h1 className="mb-3">React hooks + context selectors</h1>
      <p className="small">{Math.random()}</p>
      <HooksContextSelectorsCounter />
    </Container>
  </HooksContextSelectorsProvider>
);

const HooksContextSelectorsCounter = () => (
  <Stack gap={2}>
    <Count1 />
    <Count2 />
  </Stack>
);

HooksContextSelectorsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HooksContextSelectorsExample;
