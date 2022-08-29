// Copyright 2020-2022, University of Colorado Boulder

/**
 * Auto-generated from modulify, DO NOT manually modify.
 */
/* eslint-disable */
import getStringModule from '../../chipper/js/getStringModule.js';
import TReadOnlyProperty from '../../axon/js/TReadOnlyProperty.js';
import buoyancy from './buoyancy.js';

type StringsType = {
  'buoyancy': {
    'title': string;
    'titleStringProperty': TReadOnlyProperty<string>;
  };
  'screen': {
    'intro': string;
    'introStringProperty': TReadOnlyProperty<string>;
    'explore': string;
    'exploreStringProperty': TReadOnlyProperty<string>;
    'shapes': string;
    'shapesStringProperty': TReadOnlyProperty<string>;
    'applications': string;
    'applicationsStringProperty': TReadOnlyProperty<string>;
  }
};

const buoyancyStrings = getStringModule( 'BUOYANCY' ) as StringsType;

buoyancy.register( 'buoyancyStrings', buoyancyStrings );

export default buoyancyStrings;
