import React from 'react';
import {
  Container,
  Stack,
} from '@edx/paragon';

import BreadcrumbNav from '../../components/breadcrumb/BreadcrumbNav';

import Count1 from './Count1';
import Count2 from './Count2';

const BasicReduxExample = () => (
  <Container className="py-3">
    <BreadcrumbNav activeLabel="Basic Redux" />
    <h1 className="mb-3">Basic Redux</h1>
    <p className="small">{Math.random()}</p>
    <BasicReduxCounter />
  </Container>
);

const BasicReduxCounter = () => (
  <Stack gap={2}>
    <Count1 />
    <Count2 />
  </Stack>
);

export default BasicReduxExample;
