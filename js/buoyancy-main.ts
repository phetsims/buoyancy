// Copyright 2019-2026, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Jonathan Olson (PhET Interactive Simulations)
 */

import DensityBuoyancyCommonCredits from '../../density-buoyancy-common/js/common/DensityBuoyancyCommonCredits.js';
import DensityBuoyancyCommonPreferencesNode from '../../density-buoyancy-common/js/common/view/DensityBuoyancyCommonPreferencesNode.js';
import PreferencesModel from '../../joist/js/preferences/PreferencesModel.js';
import Sim, { SimOptions } from '../../joist/js/Sim.js';
import simLauncher from '../../joist/js/simLauncher.js';
import Tandem from '../../tandem/js/Tandem.js';
import ApplicationsScreen from './applications/ApplicationsScreen.js';
import BuoyancyStrings from './BuoyancyStrings.js';
import CompareScreen from './compare/CompareScreen.js';
import ExploreScreen from './explore/ExploreScreen.js';
import LabScreen from './lab/LabScreen.js';
import ShapesScreen from './shapes/ShapesScreen.js';

const buoyancyTitleStringProperty = BuoyancyStrings.buoyancy.titleStringProperty;

const simOptions: SimOptions = {
  credits: DensityBuoyancyCommonCredits,
  webgl: true,

  preferencesModel: new PreferencesModel( {
    simulationOptions: {
      customPreferences: [ {
        createContent: tandem => new DensityBuoyancyCommonPreferencesNode( { tandem: tandem } )
      } ]
    }
  } ),

  phetioDesigned: true
};

// launch the sim - beware that scenery Image nodes created outside of simLauncher.launch() will have zero bounds
// until the images are fully loaded, see https://github.com/phetsims/coulombs-law/issues/70
simLauncher.launch( () => {
  const sim = new Sim( buoyancyTitleStringProperty, [
    new CompareScreen( Tandem.ROOT.createTandem( 'compareScreen' ) ),
    new ExploreScreen( Tandem.ROOT.createTandem( 'exploreScreen' ) ),
    new LabScreen( Tandem.ROOT.createTandem( 'labScreen' ) ),
    new ShapesScreen( Tandem.ROOT.createTandem( 'shapesScreen' ) ),
    new ApplicationsScreen( Tandem.ROOT.createTandem( 'applicationsScreen' ) )
  ], simOptions );
  sim.start();
} );