// Copyright 2020, University of Colorado Boulder

/**
 * Temporary (development) screen for Buoyancy
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */
define( require => {
  'use strict';

  // modules
  const Demo3DModel = require( 'DENSITY_BUOYANCY_COMMON/common/model/Demo3DModel' );
  const Demo3DScreenView = require( 'DENSITY_BUOYANCY_COMMON/common/view/Demo3DScreenView' );
  const buoyancy = require( 'BUOYANCY/buoyancy' );
  const DensityBuoyancyCommonColorProfile = require( 'DENSITY_BUOYANCY_COMMON/common/view/DensityBuoyancyCommonColorProfile' );
  const Screen = require( 'JOIST/Screen' );

  class DevScreen extends Screen {
    /**
     * @param {Tandem} tandem
     */
    constructor( tandem ) {
      super(
        () => new Demo3DModel( tandem.createTandem( 'model' ) ),
        model => new Demo3DScreenView( model, tandem.createTandem( 'view' ) ),
        {
          name: 'Dev',
          backgroundColorProperty: DensityBuoyancyCommonColorProfile.skyBottomProperty,
          tandem: tandem
        }
      );
    }
  }

  return buoyancy.register( 'DevScreen', DevScreen );
} );
