[object Promise]

/**
 * Main entry point for the sim.
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */

import Sim from '../../joist/js/Sim.js';
import simLauncher from '../../joist/js/simLauncher.js';
import Tandem from '../../tandem/js/Tandem.js';
import buoyancyStrings from './buoyancyStrings.js';
import ApplicationsScreen from './view/ApplicationsScreen.js';
import DevScreen from './view/DevScreen.js';
import ExploreScreen from './view/ExploreScreen.js';
import IntroScreen from './view/IntroScreen.js';
import ShapesScreen from './view/ShapesScreen.js';

const buoyancyTitleString = buoyancyStrings.buoyancy.title;

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

// launch the sim - beware that scenery Image nodes created outside of simLauncher.launch() will have zero bounds
// until the images are fully loaded, see https://github.com/phetsims/coulombs-law/issues/70
simLauncher.launch( () => {
  const sim = new Sim( buoyancyTitleString, [
    new IntroScreen( Tandem.ROOT.createTandem( 'introScreen' ) ),
    new ExploreScreen( Tandem.ROOT.createTandem( 'playgroundScreen' ) ),
    new ShapesScreen( Tandem.ROOT.createTandem( 'shapesScreen' ) ),
    new ApplicationsScreen( Tandem.ROOT.createTandem( 'submarineScreen' ) ),
    new DevScreen( Tandem.ROOT.createTandem( 'devScreen' ) )
  ], simOptions );
  sim.start();
} );