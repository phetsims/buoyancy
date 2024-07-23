// Copyright 2019-2024, University of Colorado Boulder

/**
 * Applications screen for Buoyancy
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 * @author Agustin Vallejo (PhET Interactive Simulations)
 * @author Michael Kauzmann (PhET Interactive Simulations)
 * @author Sam Reid (PhET Interactive Simulations)
 */

import BuoyancyApplicationsModel from '../../../density-buoyancy-common/js/buoyancy/model/applications/BuoyancyApplicationsModel.js';
import BuoyancyApplicationsScreenView from '../../../density-buoyancy-common/js/buoyancy/view/applications/BuoyancyApplicationsScreenView.js';
import DensityBuoyancyCommonColors from '../../../density-buoyancy-common/js/common/view/DensityBuoyancyCommonColors.js';
import Screen from '../../../joist/js/Screen.js';
import Tandem from '../../../tandem/js/Tandem.js';
import buoyancy from '../buoyancy.js';
import BuoyancyStrings from '../BuoyancyStrings.js';
import DensityBuoyancyScreenView from '../../../density-buoyancy-common/js/common/view/DensityBuoyancyScreenView.js';
import applications_screen_icon_png from '../../mipmaps/applications_screen_icon_png.js';
import ScreenIcon from '../../../joist/js/ScreenIcon.js';
import DensityBuoyancyCommonKeyboardHelpNode from '../../../density-buoyancy-common/js/common/view/DensityBuoyancyCommonKeyboardHelpNode.js';

export default class ApplicationsScreen extends Screen<BuoyancyApplicationsModel, BuoyancyApplicationsScreenView> {
  public constructor( tandem: Tandem ) {
    const icon = DensityBuoyancyScreenView.getThreeIcon( applications_screen_icon_png, () => BuoyancyApplicationsScreenView.getBuoyancyApplicationsIcon() );
    super(
      () => new BuoyancyApplicationsModel( {
        fluidSelectionType: 'all',
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