// Copyright 2019-2024, University of Colorado Boulder

/**
 * Explore screen for Buoyancy
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 * @author Agustin Vallejo (PhET Interactive Simulations)
 * @author Michael Kauzmann (PhET Interactive Simulations)
 * @author Sam Reid (PhET Interactive Simulations)
 */

import BuoyancyExploreModel from '../../../density-buoyancy-common/js/buoyancy/model/BuoyancyExploreModel.js';
import BuoyancyExploreScreenView from '../../../density-buoyancy-common/js/buoyancy/view/BuoyancyExploreScreenView.js';
import DensityBuoyancyCommonColors from '../../../density-buoyancy-common/js/common/view/DensityBuoyancyCommonColors.js';
import Screen from '../../../joist/js/Screen.js';
import Tandem from '../../../tandem/js/Tandem.js';
import buoyancy from '../buoyancy.js';
import BuoyancyStrings from '../BuoyancyStrings.js';
import ScreenIcon from '../../../joist/js/ScreenIcon.js';
import DensityBuoyancyCommonKeyboardHelpNode from '../../../density-buoyancy-common/js/common/view/DensityBuoyancyCommonKeyboardHelpNode.js';
import getBuoyancyExploreIcon from '../../../density-buoyancy-common/js/buoyancy/view/getBuoyancyExploreIcon.js';

export default class ExploreScreen extends Screen<BuoyancyExploreModel, BuoyancyExploreScreenView> {
  public constructor( tandem: Tandem ) {
    super(
      () => new BuoyancyExploreModel( {
        tandem: tandem.createTandem( 'model' )
      } ),
      model => new BuoyancyExploreScreenView( model, {
        tandem: tandem.createTandem( 'view' )
      } ),
      {
        name: BuoyancyStrings.screen.exploreStringProperty,
        backgroundColorProperty: DensityBuoyancyCommonColors.skyBottomProperty,
        homeScreenIcon: new ScreenIcon( getBuoyancyExploreIcon(), {
          maxIconWidthProportion: 1,
          maxIconHeightProportion: 1
        } ),
        tandem: tandem,
        createKeyboardHelpNode: () => new DensityBuoyancyCommonKeyboardHelpNode( true, true )
      }
    );
  }
}

buoyancy.register( 'ExploreScreen', ExploreScreen );