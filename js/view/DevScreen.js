// Copyright 2020-2021, University of Colorado Boulder

/**
 * Temporary (development) screen for Buoyancy
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */

import Demo3DModel from '../../../density-buoyancy-common/js/common/model/Demo3DModel.js';
import Demo3DScreenView from '../../../density-buoyancy-common/js/common/view/Demo3DScreenView.js';
import DensityBuoyancyCommonColorProfile from '../../../density-buoyancy-common/js/common/view/DensityBuoyancyCommonColorProfile.js';
import Screen from '../../../joist/js/Screen.js';
import buoyancy from '../buoyancy.js';

class DevScreen extends Screen {
  /**
   * @param {Tandem} tandem
   */
  constructor( tandem ) {
    super(
      () => new Demo3DModel( tandem.createTandem( 'model' ) ),
      model => new Demo3DScreenView( model, tandem.createTandem( 'view' ) ),
      {
        name: 'Dev',
        backgroundColorProperty: DensityBuoyancyCommonColorProfile.skyBottomProperty,
        tandem: tandem
      }
    );
  }
}

buoyancy.register( 'DevScreen', DevScreen );
export default DevScreen;