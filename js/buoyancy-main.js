// Copyright 2019, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */
define( require => {
  'use strict';

  // modules
  const Sim = require( 'JOIST/Sim' );
  const SimLauncher = require( 'JOIST/SimLauncher' );
  const BuoyancyScreen = require( 'BUOYANCY/buoyancy/BuoyancyScreen' );
  const Tandem = require( 'TANDEM/Tandem' );

  // strings
  const buoyancyTitleString = require( 'string!BUOYANCY/buoyancy.title' );

  const simOptions = {
    credits: {
      //TODO fill in credits, all of these fields are optional, see joist.CreditsNode
      leadDesign: '',
      softwareDevelopment: '',
      team: '',
      qualityAssurance: '',
      graphicArts: '',
      soundDesign: '',
      thanks: ''
    }
  };

  // launch the sim - beware that scenery Image nodes created outside of SimLauncher.launch() will have zero bounds
  // until the images are fully loaded, see https://github.com/phetsims/coulombs-law/issues/70
  SimLauncher.launch( () => {
    const sim = new Sim( buoyancyTitleString, [
      new BuoyancyScreen( Tandem.rootTandem.createTandem( 'buoyancyScreen' ) )
    ], simOptions );
    sim.start();
  } );
} );