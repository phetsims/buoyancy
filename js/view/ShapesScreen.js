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
  const Demo2DScreenView = require( 'DENSITY_BUOYANCY_COMMON/common/view/Demo2DScreenView' );
  const DensityBuoyancyCommonColorProfile = require( 'DENSITY_BUOYANCY_COMMON/common/view/DensityBuoyancyCommonColorProfile' );
  const DensityBuoyancyModel = require( 'DENSITY_BUOYANCY_COMMON/common/model/DensityBuoyancyModel' );
  const Screen = require( 'JOIST/Screen' );

  // strings
  const screenShapesString = require( 'string!BUOYANCY/screen.shapes' );

  class ShapesScreen extends Screen {
    /**
     * @param {Tandem} tandem
     */
    constructor( tandem ) {
      super(
        () => new DensityBuoyancyModel( tandem.createTandem( 'model' ) ),
        model => new Demo2DScreenView( model, tandem.createTandem( 'view' ) ),
        {
          name: screenShapesString,
          backgroundColorProperty: DensityBuoyancyCommonColorProfile.skyBottomProperty,
          tandem: tandem
        }
      );
    }
  }

  return buoyancy.register( 'ShapesScreen', ShapesScreen );
} );
