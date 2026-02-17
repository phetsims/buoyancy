// Copyright 2019-2024, University of Colorado Boulder

/**
 * Applications screen for Buoyancy
 *
 * @author Jonathan Olson (PhET Interactive Simulations)
 * @author Agustin Vallejo (PhET Interactive Simulations)
 * @author Michael Kauzmann (PhET Interactive Simulations)
 * @author Sam Reid (PhET Interactive Simulations)
 */

import BuoyancyApplicationsModel from '../../../density-buoyancy-common/js/buoyancy/model/applications/BuoyancyApplicationsModel.js';
import BuoyancyApplicationsScreenView from '../../../density-buoyancy-common/js/buoyancy/view/applications/BuoyancyApplicationsScreenView.js';
import getBuoyancyApplicationsIcon from '../../../density-buoyancy-common/js/buoyancy/view/applications/getBuoyancyApplicationsIcon.js';
import DensityBuoyancyCommonColors from '../../../density-buoyancy-common/js/common/view/DensityBuoyancyCommonColors.js';
import DensityBuoyancyCommonKeyboardHelpNode from '../../../density-buoyancy-common/js/common/view/DensityBuoyancyCommonKeyboardHelpNode.js';
import DensityBuoyancyScreenView from '../../../density-buoyancy-common/js/common/view/DensityBuoyancyScreenView.js';
import Screen from '../../../joist/js/Screen.js';
import ScreenIcon from '../../../joist/js/ScreenIcon.js';
import Tandem from '../../../tandem/js/Tandem.js';
import applications_screen_icon_png from '../../mipmaps/applications_screen_icon_png.js';
import buoyancy from '../buoyancy.js';
import BuoyancyStrings from '../BuoyancyStrings.js';

export default class ApplicationsScreen extends Screen<BuoyancyApplicationsModel, BuoyancyApplicationsScreenView> {
  public constructor( tandem: Tandem ) {
    const icon = DensityBuoyancyScreenView.getThreeIcon( applications_screen_icon_png, () => getBuoyancyApplicationsIcon() );
    super(
      () => new BuoyancyApplicationsModel( {
        tandem: tandem.createTandem( 'model' )
      } ),
      model => new BuoyancyApplicationsScreenView( model, {
        tandem: tandem.createTandem( 'view' )
      } ),
      {
        name: BuoyancyStrings.screen.applicationsStringProperty,
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

buoyancy.register( 'ApplicationsScreen', ApplicationsScreen );