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
    'titleProperty': TReadOnlyProperty<string>;
  };
  'screen': {
    'intro': string;
    'introProperty': TReadOnlyProperty<string>;
    'explore': string;
    'exploreProperty': TReadOnlyProperty<string>;
    'shapes': string;
    'shapesProperty': TReadOnlyProperty<string>;
    'applications': string;
    'applicationsProperty': TReadOnlyProperty<string>;
  }
};

const buoyancyStrings = getStringModule( 'BUOYANCY' ) as StringsType;

buoyancy.register( 'buoyancyStrings', buoyancyStrings );

export default buoyancyStrings;
