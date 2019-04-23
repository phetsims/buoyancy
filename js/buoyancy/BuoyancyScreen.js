// Copyright 2019, University of Colorado Boulder

/**
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */
define( require => {
  'use strict';

  // modules
  const Property = require( 'AXON/Property' );
  const Screen = require( 'JOIST/Screen' );
  const buoyancy = require( 'BUOYANCY/buoyancy' );
  const BuoyancyModel = require( 'BUOYANCY/buoyancy/model/BuoyancyModel' );
  const BuoyancyScreenView = require( 'BUOYANCY/buoyancy/view/BuoyancyScreenView' );

  class BuoyancyScreen extends Screen {

    /**
     * @param {Tandem} tandem
     */
    constructor( tandem ) {

      const options = {
        backgroundColorProperty: new Property( 'white' ),
        tandem: tandem
      };

      super(
        () => new BuoyancyModel( tandem.createTandem( 'model' ) ),
        ( model ) => new BuoyancyScreenView( model, tandem.createTandem( 'view' ) ),
        options
      );
    }
  }

  return buoyancy.register( 'BuoyancyScreen', BuoyancyScreen );
} );