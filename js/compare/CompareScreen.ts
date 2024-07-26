// Copyright 2024, University of Colorado Boulder

/**
 * Compare screen for Buoyancy and Buoyancy: Basics
 *
 * @author Michael Kauzmann (PhET Interactive Simulations)
 */

import DensityBuoyancyCommonColors from '../../../density-buoyancy-common/js/common/view/DensityBuoyancyCommonColors.js';
import Screen from '../../../joist/js/Screen.js';
import Tandem from '../../../tandem/js/Tandem.js';
import BuoyancyCompareModel from '../../../density-buoyancy-common/js/buoyancy/model/BuoyancyCompareModel.js';
import BuoyancyCompareScreenView from '../../../density-buoyancy-common/js/buoyancy/view/BuoyancyCompareScreenView.js';
import ScreenIcon from '../../../joist/js/ScreenIcon.js';
import DensityBuoyancyCommonKeyboardHelpNode from '../../../density-buoyancy-common/js/common/view/DensityBuoyancyCommonKeyboardHelpNode.js';
import DensityBuoyancyScreenView from '../../../density-buoyancy-common/js/common/view/DensityBuoyancyScreenView.js';
import compare_screen_icon_png from '../../mipmaps/compare_screen_icon_png.js';
import buoyancy from '../buoyancy.js';
import BuoyancyStrings from '../BuoyancyStrings.js';

export default class CompareScreen extends Screen<BuoyancyCompareModel, BuoyancyCompareScreenView> {
  public constructor( tandem: Tandem ) {
    const icon = DensityBuoyancyScreenView.getThreeIcon( compare_screen_icon_png, () => BuoyancyCompareScreenView.getBuoyancyCompareIcon() );

    super(
      () => new BuoyancyCompareModel( {
        tandem: tandem.createTandem( 'model' )
      } ),
      model => new BuoyancyCompareScreenView( model, {
        tandem: tandem.createTandem( 'view' )
      } ),
      {
        name: BuoyancyStrings.screen.compareStringProperty,
        backgroundColorProperty: DensityBuoyancyCommonColors.skyBottomProperty,
        homeScreenIcon: new ScreenIcon( icon, {
          maxIconWidthProportion: 1,
          maxIconHeightProportion: 1
        } ),
        tandem: tandem,
        createKeyboardHelpNode: () => new DensityBuoyancyCommonKeyboardHelpNode( true, true )
      }
    );
  }
}

buoyancy.register( 'CompareScreen', CompareScreen );