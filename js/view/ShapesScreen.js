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
  const BuoyancyShapesModel = require( 'DENSITY_BUOYANCY_COMMON/buoyancy/model/BuoyancyShapesModel' );
  const BuoyancyShapesScreenView = require( 'DENSITY_BUOYANCY_COMMON/buoyancy/view/BuoyancyShapesScreenView' );
  const DensityBuoyancyCommonColorProfile = require( 'DENSITY_BUOYANCY_COMMON/common/view/DensityBuoyancyCommonColorProfile' );
  const Screen = require( 'JOIST/Screen' );

  // strings
  const screenShapesString = require( 'string!BUOYANCY/screen.shapes' );

  class ShapesScreen extends Screen {
    /**
     * @param {Tandem} tandem
     */
    constructor( tandem ) {
      super(
        () => new BuoyancyShapesModel( tandem.createTandem( 'model' ) ),
        model => new BuoyancyShapesScreenView( model, tandem.createTandem( 'view' ) ),
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
