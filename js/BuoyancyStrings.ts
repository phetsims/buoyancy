// Copyright 2020-2024, University of Colorado Boulder

/* eslint-disable */
/* @formatter:off */

/**
 * Auto-generated from modulify, DO NOT manually modify.
 */

import getStringModule from '../../chipper/js/browser/getStringModule.js';
import type LocalizedStringProperty from '../../chipper/js/browser/LocalizedStringProperty.js';
import buoyancy from './buoyancy.js';

type StringsType = {
  'buoyancy': {
    'titleStringProperty': LocalizedStringProperty;
  };
  'screen': {
    'compareStringProperty': LocalizedStringProperty;
    'exploreStringProperty': LocalizedStringProperty;
    'labStringProperty': LocalizedStringProperty;
    'shapesStringProperty': LocalizedStringProperty;
    'applicationsStringProperty': LocalizedStringProperty;
  }
};

const BuoyancyStrings = getStringModule( 'BUOYANCY' ) as StringsType;

buoyancy.register( 'BuoyancyStrings', BuoyancyStrings );

export default BuoyancyStrings;
