// Copyright 2019-2023, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */

import Sim, { SimOptions } from '../../joist/js/Sim.js';
import simLauncher from '../../joist/js/simLauncher.js';
import Tandem from '../../tandem/js/Tandem.js';
import ApplicationsScreen from './applications/ApplicationsScreen.js';
import BuoyancyStrings from './BuoyancyStrings.js';
import ExploreScreen from './explore/ExploreScreen.js';
import IntroScreen from './intro/IntroScreen.js';
import ShapesScreen from './shapes/ShapesScreen.js';

const buoyancyTitleStringProperty = BuoyancyStrings.buoyancy.titleStringProperty;

const simOptions: SimOptions = {
  credits: {
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

// launch the sim - beware that scenery Image nodes created outside of simLauncher.launch() will have zero bounds
// until the images are fully loaded, see https://github.com/phetsims/coulombs-law/issues/70
simLauncher.launch( () => {
  const sim = new Sim( buoyancyTitleStringProperty, [
    new IntroScreen( Tandem.ROOT.createTandem( 'introScreen' ) ),
    new ExploreScreen( Tandem.ROOT.createTandem( 'exploreScreen' ) ),
    new ShapesScreen( Tandem.ROOT.createTandem( 'shapesScreen' ) ),
    new ApplicationsScreen( Tandem.ROOT.createTandem( 'applicationsScreen' ) )
  ], simOptions );
  sim.start();
} );