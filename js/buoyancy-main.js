// Copyright 2019, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */
define( require => {
  'use strict';

  // modules
  const ApplicationsScreen = require( 'BUOYANCY/view/ApplicationsScreen' );
  const ExploreScreen = require( 'BUOYANCY/view/ExploreScreen' );
  const IntroScreen = require( 'BUOYANCY/view/IntroScreen' );
  const ShapesScreen = require( 'BUOYANCY/view/ShapesScreen' );
  const Sim = require( 'JOIST/Sim' );
  const SimLauncher = require( 'JOIST/SimLauncher' );
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
    },
    webgl: true
  };

  // launch the sim - beware that scenery Image nodes created outside of SimLauncher.launch() will have zero bounds
  // until the images are fully loaded, see https://github.com/phetsims/coulombs-law/issues/70
  SimLauncher.launch( () => {
    const sim = new Sim( buoyancyTitleString, [
      new IntroScreen( Tandem.ROOT.createTandem( 'introScreen' ) ),
      new ExploreScreen( Tandem.ROOT.createTandem( 'playgroundScreen' ) ),
      new ShapesScreen( Tandem.ROOT.createTandem( 'shapesScreen' ) ),
      new ApplicationsScreen( Tandem.ROOT.createTandem( 'submarineScreen' ) )
    ], simOptions );
    sim.start();
  } );
} );
