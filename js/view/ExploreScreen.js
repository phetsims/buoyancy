// Copyright 2019, University of Colorado Boulder

/**
 * Explore screen for Buoyancy
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */

import BuoyancyExploreModel from '../../../density-buoyancy-common/js/buoyancy/model/BuoyancyExploreModel.js';
import BuoyancyExploreScreenView from '../../../density-buoyancy-common/js/buoyancy/view/BuoyancyExploreScreenView.js';
import DensityBuoyancyCommonColorProfile
  from '../../../density-buoyancy-common/js/common/view/DensityBuoyancyCommonColorProfile.js';
import Screen from '../../../joist/js/Screen.js';
import buoyancyStrings from '../buoyancy-strings.js';
import buoyancy from '../buoyancy.js';

const screenExploreString = buoyancyStrings.screen.explore;

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

buoyancy.register( 'ExploreScreen', ExploreScreen );
export default ExploreScreen;