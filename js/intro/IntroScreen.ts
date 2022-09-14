// Copyright 2019-2022, University of Colorado Boulder

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

export default class IntroScreen extends Screen<BuoyancyIntroModel, BuoyancyIntroScreenView> {
  public constructor( tandem: Tandem ) {
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
        tandem: tandem
      }
    );
  }
}

buoyancy.register( 'IntroScreen', IntroScreen );
