// Copyright 2019-2021, University of Colorado Boulder

/**
 * Intro screen for Buoyancy
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */

import BuoyancyIntroModel from '../../../density-buoyancy-common/js/buoyancy/model/BuoyancyIntroModel.js';
import BuoyancyIntroScreenView from '../../../density-buoyancy-common/js/buoyancy/view/BuoyancyIntroScreenView.js';
import DensityBuoyancyCommonColorProfile from '../../../density-buoyancy-common/js/common/view/densityBuoyancyCommonColorProfile.js';
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
      () => new BuoyancyIntroModel( tandem.createTandem( 'model' ) ),
      model => new BuoyancyIntroScreenView( model, tandem.createTandem( 'view' ) ),
      {
        name: screenIntroString,
        backgroundColorProperty: DensityBuoyancyCommonColorProfile.skyBottomProperty,
        tandem: tandem
      }
    );
  }
}

buoyancy.register( 'IntroScreen', IntroScreen );
export default IntroScreen;