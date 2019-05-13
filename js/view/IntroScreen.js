// Copyright 2019, University of Colorado Boulder

/**
 * Intro screen for Buoyancy
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */
define( require => {
  'use strict';

  // modules
  const buoyancy = require( 'BUOYANCY/buoyancy' );
  const DemoScreenView = require( 'DENSITY_BUOYANCY_COMMON/common/view/DemoScreenView' );
  const DensityBuoyancyCommonColorProfile = require( 'DENSITY_BUOYANCY_COMMON/common/view/DensityBuoyancyCommonColorProfile' );
  const DensityBuoyancyModel = require( 'DENSITY_BUOYANCY_COMMON/common/model/DensityBuoyancyModel' );
  const Screen = require( 'JOIST/Screen' );

  // strings
  const screenIntroString = require( 'string!BUOYANCY/screen.intro' );

  class IntroScreen extends Screen {
    /**
     * @param {Tandem} tandem
     */
    constructor( tandem ) {
      super(
        () => new DensityBuoyancyModel( tandem.createTandem( 'model' ) ),
        model => new DemoScreenView( model, tandem.createTandem( 'view' ) ),
        {
          name: screenIntroString,
          backgroundColorProperty: DensityBuoyancyCommonColorProfile.skyBottomProperty,
          tandem: tandem
        }
      );
    }
  }

  return buoyancy.register( 'IntroScreen', IntroScreen );
} );
