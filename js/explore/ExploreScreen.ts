// Copyright 2019-2022, University of Colorado Boulder

/**
 * Explore screen for Buoyancy
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */

import BuoyancyExploreModel from '../../../density-buoyancy-common/js/buoyancy/model/BuoyancyExploreModel.js';
import BuoyancyExploreScreenView from '../../../density-buoyancy-common/js/buoyancy/view/BuoyancyExploreScreenView.js';
import DensityBuoyancyCommonColors from '../../../density-buoyancy-common/js/common/view/DensityBuoyancyCommonColors.js';
import Screen from '../../../joist/js/Screen.js';
import Tandem from '../../../tandem/js/Tandem.js';
import buoyancy from '../buoyancy.js';
import buoyancyStrings from '../buoyancyStrings.js';

const screenExploreString = buoyancyStrings.screen.explore;

export default class ExploreScreen extends Screen<BuoyancyExploreModel, BuoyancyExploreScreenView> {
  constructor( tandem: Tandem ) {
    super(
      () => new BuoyancyExploreModel( {
        tandem: tandem.createTandem( 'model' )
      } ),
      model => new BuoyancyExploreScreenView( model, {
        tandem: tandem.createTandem( 'view' )
      } ),
      {
        name: screenExploreString,
        backgroundColorProperty: DensityBuoyancyCommonColors.skyBottomProperty,
        tandem: tandem
      }
    );
  }
}

buoyancy.register( 'ExploreScreen', ExploreScreen );
