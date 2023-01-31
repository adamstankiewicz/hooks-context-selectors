import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Breadcrumb,
} from '@edx/paragon';

const BreadcrumbNav = ({
  activeLabel,
}) => (
  <Breadcrumb
    ariaLabel="Breadcrumb"
    links={[
      { label: 'Examples', to: '/' },
    ]}
    activeLabel={activeLabel}
    linkAs={Link}
  />
);

BreadcrumbNav.propTypes = {
  activeLabel: PropTypes.string.isRequired,
};

export default BreadcrumbNav;
