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
  const BuoyancyApplicationsModel = require( 'DENSITY_BUOYANCY_COMMON/buoyancy/model/BuoyancyApplicationsModel' );
  const BuoyancyApplicationsScreenView = require( 'DENSITY_BUOYANCY_COMMON/buoyancy/view/BuoyancyApplicationsScreenView' );
  const DensityBuoyancyCommonColorProfile = require( 'DENSITY_BUOYANCY_COMMON/common/view/DensityBuoyancyCommonColorProfile' );
  const Screen = require( 'JOIST/Screen' );

  // strings
  const screenApplicationsString = require( 'string!BUOYANCY/screen.applications' );

  class ApplicationsScreen extends Screen {
    /**
     * @param {Tandem} tandem
     */
    constructor( tandem ) {
      super(
        () => new BuoyancyApplicationsModel( tandem.createTandem( 'model' ) ),
        model => new BuoyancyApplicationsScreenView( model, tandem.createTandem( 'view' ) ),
        {
          name: screenApplicationsString,
          backgroundColorProperty: DensityBuoyancyCommonColorProfile.skyBottomProperty,
          tandem: tandem
        }
      );
    }
  }

  return buoyancy.register( 'ApplicationsScreen', ApplicationsScreen );
} );
