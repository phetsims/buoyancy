// Copyright 2020-2023, University of Colorado Boulder

/**
 * Auto-generated from modulify, DO NOT manually modify.
 */
/* eslint-disable */
import getStringModule from '../../chipper/js/getStringModule.js';
import type LocalizedStringProperty from '../../chipper/js/LocalizedStringProperty.js';
import buoyancy from './buoyancy.js';

type StringsType = {
  'buoyancy': {
    'title': string;
    'titleStringProperty': LocalizedStringProperty;
  };
  'screen': {
    'intro': string;
    'introStringProperty': LocalizedStringProperty;
    'explore': string;
    'exploreStringProperty': LocalizedStringProperty;
    'shapes': string;
    'shapesStringProperty': LocalizedStringProperty;
    'applications': string;
    'applicationsStringProperty': LocalizedStringProperty;
  }
};

const BuoyancyStrings = getStringModule( 'BUOYANCY' ) as StringsType;

buoyancy.register( 'BuoyancyStrings', BuoyancyStrings );

export default BuoyancyStrings;
