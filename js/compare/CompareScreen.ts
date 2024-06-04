// Copyright 2024, University of Colorado Boulder

/**
 * Compare screen for Buoyancy and Buoyancy: Basics
 *
 * @author Michael Kauzmann (PhET Interactive Simulations)
 */

import DensityBuoyancyCommonColors from '../../../density-buoyancy-common/js/common/view/DensityBuoyancyCommonColors.js';
import Screen from '../../../joist/js/Screen.js';
import Tandem from '../../../tandem/js/Tandem.js';
import BuoyancyBasicsCompareModel from '../../../density-buoyancy-common/js/buoyancy/model/BuoyancyBasicsCompareModel.js';
import BuoyancyBasicsCompareScreenView from '../../../density-buoyancy-common/js/buoyancy-basics/view/BuoyancyBasicsCompareScreenView.js';
import ScreenIcon from '../../../joist/js/ScreenIcon.js';
import DensityBuoyancyCommonKeyboardHelpNode from '../../../density-buoyancy-common/js/common/view/DensityBuoyancyCommonKeyboardHelpNode.js';
import DensityBuoyancyScreenView from '../../../density-buoyancy-common/js/common/view/DensityBuoyancyScreenView.js';
import intro_screen_icon_png from '../../mipmaps/intro_screen_icon_png.js';
import buoyancy from '../buoyancy.js';
import BuoyancyStrings from '../BuoyancyStrings.js';

export default class CompareScreen extends Screen<BuoyancyBasicsCompareModel, BuoyancyBasicsCompareScreenView> {
  public constructor( tandem: Tandem ) {
    const icon = DensityBuoyancyScreenView.getThreeIcon( intro_screen_icon_png, () => BuoyancyBasicsCompareScreenView.getBuoyancyBasicsCompareIcon() );

    super(
      () => new BuoyancyBasicsCompareModel( {
        tandem: tandem.createTandem( 'model' )
      } ),
      model => new BuoyancyBasicsCompareScreenView( model, {
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