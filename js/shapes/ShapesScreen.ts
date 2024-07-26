// Copyright 2019-2024, University of Colorado Boulder

/**
 * Shapes screen for Buoyancy
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 * @author Agustin Vallejo (PhET Interactive Simulations)
 * @author Michael Kauzmann (PhET Interactive Simulations)
 * @author Sam Reid (PhET Interactive Simulations)
 */

import BuoyancyShapesModel from '../../../density-buoyancy-common/js/buoyancy/model/shapes/BuoyancyShapesModel.js';
import BuoyancyShapesScreenView from '../../../density-buoyancy-common/js/buoyancy/view/shapes/BuoyancyShapesScreenView.js';
import DensityBuoyancyCommonColors from '../../../density-buoyancy-common/js/common/view/DensityBuoyancyCommonColors.js';
import Screen from '../../../joist/js/Screen.js';
import Tandem from '../../../tandem/js/Tandem.js';
import buoyancy from '../buoyancy.js';
import BuoyancyStrings from '../BuoyancyStrings.js';
import DensityBuoyancyScreenView from '../../../density-buoyancy-common/js/common/view/DensityBuoyancyScreenView.js';
import shapes_screen_icon_png from '../../mipmaps/shapes_screen_icon_png.js';
import ScreenIcon from '../../../joist/js/ScreenIcon.js';
import DensityBuoyancyCommonKeyboardHelpNode from '../../../density-buoyancy-common/js/common/view/DensityBuoyancyCommonKeyboardHelpNode.js';

export default class ShapesScreen extends Screen<BuoyancyShapesModel, BuoyancyShapesScreenView> {
  public constructor( tandem: Tandem ) {
    const icon = DensityBuoyancyScreenView.getThreeIcon( shapes_screen_icon_png, () => BuoyancyShapesScreenView.getBuoyancyShapesIcon() );

    super(
      () => new BuoyancyShapesModel( {
        tandem: tandem.createTandem( 'model' )
      } ),
      model => new BuoyancyShapesScreenView( model, {
        tandem: tandem.createTandem( 'view' )
      } ),
      {
        name: BuoyancyStrings.screen.shapesStringProperty,
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

buoyancy.register( 'ShapesScreen', ShapesScreen );