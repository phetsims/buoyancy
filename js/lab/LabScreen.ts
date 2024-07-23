// Copyright 2024, University of Colorado Boulder

/**
 * Lab screen for Buoyancy
 *
 * @author Michael Kauzmann (PhET Interactive Simulations)
 * @author Agustin Vallejo (PhET Interactive Simulations)
 * @author Sam Reid (PhET Interactive Simulations)
 */

import BuoyancyLabModel from '../../../density-buoyancy-common/js/buoyancy/model/BuoyancyLabModel.js';
import BuoyancyLabScreenView from '../../../density-buoyancy-common/js/buoyancy/view/BuoyancyLabScreenView.js';
import DensityBuoyancyCommonColors from '../../../density-buoyancy-common/js/common/view/DensityBuoyancyCommonColors.js';
import Screen from '../../../joist/js/Screen.js';
import Tandem from '../../../tandem/js/Tandem.js';
import buoyancy from '../buoyancy.js';
import BuoyancyStrings from '../BuoyancyStrings.js';
import ScreenIcon from '../../../joist/js/ScreenIcon.js';
import FluidDisplacedAccordionBox from '../../../density-buoyancy-common/js/buoyancy/view/FluidDisplacedAccordionBox.js';
import DensityBuoyancyCommonKeyboardHelpNode from '../../../density-buoyancy-common/js/common/view/DensityBuoyancyCommonKeyboardHelpNode.js';

export default class LabScreen extends Screen<BuoyancyLabModel, BuoyancyLabScreenView> {
  public constructor( tandem: Tandem ) {
    super(
      () => new BuoyancyLabModel( {
        tandem: tandem.createTandem( 'model' ),

        // TODO: Move to BuoyancyLabModel, see https://github.com/phetsims/density-buoyancy-common/issues/270
        fluidSelectionType: 'all'
      } ),
      model => new BuoyancyLabScreenView( model, {
        tandem: tandem.createTandem( 'view' )
      } ),
      {
        name: BuoyancyStrings.screen.labStringProperty,
        backgroundColorProperty: DensityBuoyancyCommonColors.skyBottomProperty,
        homeScreenIcon: new ScreenIcon( FluidDisplacedAccordionBox.createIcon() ),
        tandem: tandem,
        createKeyboardHelpNode: () => new DensityBuoyancyCommonKeyboardHelpNode( true, true )
      }
    );
  }
}

buoyancy.register( 'LabScreen', LabScreen );