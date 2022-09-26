// Copyright 2020-2022, University of Colorado Boulder

/**
 * Auto-generated from modulify, DO NOT manually modify.
 */
/* eslint-disable */
import getStringModule from '../../chipper/js/getStringModule.js';
import LinkableProperty from '../../axon/js/LinkableProperty.js';
import buoyancy from './buoyancy.js';

type StringsType = {
  'buoyancy': {
    'title': string;
    'titleStringProperty': LinkableProperty<string>;
  };
  'screen': {
    'intro': string;
    'introStringProperty': LinkableProperty<string>;
    'explore': string;
    'exploreStringProperty': LinkableProperty<string>;
    'shapes': string;
    'shapesStringProperty': LinkableProperty<string>;
    'applications': string;
    'applicationsStringProperty': LinkableProperty<string>;
  }
};

const BuoyancyStrings = getStringModule( 'BUOYANCY' ) as StringsType;

buoyancy.register( 'BuoyancyStrings', BuoyancyStrings );

export default BuoyancyStrings;
