// Copyright 2019-2021, University of Colorado Boulder

/**
 * Intro screen for Buoyancy
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */

import BuoyancyIntroModel from '../../../density-buoyancy-common/js/buoyancy/model/BuoyancyIntroModel.js';
import BuoyancyIntroScreenView from '../../../density-buoyancy-common/js/buoyancy/view/BuoyancyIntroScreenView.js';
import DensityBuoyancyCommonColors from '../../../density-buoyancy-common/js/common/view/DensityBuoyancyCommonColors.js';
import Screen from '../../../joist/js/Screen.js';
import buoyancy from '../buoyancy.js';
import buoyancyStrings from '../buoyancyStrings.js';

const screenIntroString = buoyancyStrings.screen.intro;

class IntroScreen extends Screen {
  /**
   * @param {Tandem} tandem
   */
  constructor( tandem ) {
    super(
      () => new BuoyancyIntroModel( {
        tandem: tandem.createTandem( 'model' )
      } ),
      model => new BuoyancyIntroScreenView( model, {
        tandem: tandem.createTandem( 'view' )
      } ),
      {
        name: screenIntroString,
        backgroundColorProperty: DensityBuoyancyCommonColors.skyBottomProperty,
        tandem: tandem
      }
    );
  }
}

buoyancy.register( 'IntroScreen', IntroScreen );
export default IntroScreen;