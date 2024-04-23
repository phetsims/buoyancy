// Copyright 2019-2024, University of Colorado Boulder

/**
 * Intro screen for Buoyancy
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */

import BuoyancyIntroModel from '../../../density-buoyancy-common/js/buoyancy/model/BuoyancyIntroModel.js';
import BuoyancyIntroScreenView from '../../../density-buoyancy-common/js/buoyancy/view/BuoyancyIntroScreenView.js';
import DensityBuoyancyCommonColors from '../../../density-buoyancy-common/js/common/view/DensityBuoyancyCommonColors.js';
import Screen from '../../../joist/js/Screen.js';
import Tandem from '../../../tandem/js/Tandem.js';
import buoyancy from '../buoyancy.js';
import BuoyancyStrings from '../BuoyancyStrings.js';
import DensityBuoyancyScreenView from '../../../density-buoyancy-common/js/common/view/DensityBuoyancyScreenView.js';
import shapes_screen_icon_png from '../../mipmaps/shapes_screen_icon_png.js';
import BuoyancyShapesScreenView from '../../../density-buoyancy-common/js/buoyancy/view/BuoyancyShapesScreenView.js';
import ScreenIcon from '../../../joist/js/ScreenIcon.js';

export default class IntroScreen extends Screen<BuoyancyIntroModel, BuoyancyIntroScreenView> {
  public constructor( tandem: Tandem ) {
    const icon = DensityBuoyancyScreenView.getThreeIcon( shapes_screen_icon_png, () => BuoyancyShapesScreenView.getBuoyancyShapesIcon() );
    super(
      () => new BuoyancyIntroModel( {
        tandem: tandem.createTandem( 'model' )
      } ),
      model => new BuoyancyIntroScreenView( model, {
        tandem: tandem.createTandem( 'view' )
      } ),
      {
        name: BuoyancyStrings.screen.introStringProperty,
        backgroundColorProperty: DensityBuoyancyCommonColors.skyBottomProperty,
        homeScreenIcon: new ScreenIcon( icon, {
          maxIconWidthProportion: 1,
          maxIconHeightProportion: 1
        } ),
        tandem: tandem
      }
    );
  }
}

buoyancy.register( 'IntroScreen', IntroScreen );