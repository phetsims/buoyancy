// Copyright 2019, University of Colorado Boulder

/**
 * Explore screen for Buoyancy
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */
define( require => {
  'use strict';

  // modules
  const buoyancy = require( 'BUOYANCY/buoyancy' );
  const BuoyancyExploreModel = require( 'DENSITY_BUOYANCY_COMMON/buoyancy/model/BuoyancyExploreModel' );
  const BuoyancyExploreScreenView = require( 'DENSITY_BUOYANCY_COMMON/buoyancy/view/BuoyancyExploreScreenView' );
  const DensityBuoyancyCommonColorProfile = require( 'DENSITY_BUOYANCY_COMMON/common/view/DensityBuoyancyCommonColorProfile' );
  const Screen = require( 'JOIST/Screen' );

  // strings
  const screenExploreString = require( 'string!BUOYANCY/screen.explore' );

  class ExploreScreen extends Screen {
    /**
     * @param {Tandem} tandem
     */
    constructor( tandem ) {
      super(
        () => new BuoyancyExploreModel( tandem.createTandem( 'model' ) ),
        model => new BuoyancyExploreScreenView( model, tandem.createTandem( 'view' ) ),
        {
          name: screenExploreString,
          backgroundColorProperty: DensityBuoyancyCommonColorProfile.skyBottomProperty,
          tandem: tandem
        }
      );
    }
  }

  return buoyancy.register( 'ExploreScreen', ExploreScreen );
} );
