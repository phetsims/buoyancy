// Copyright 2019-2021, University of Colorado Boulder

/**
 * Intro screen for Buoyancy
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */

import BuoyancyApplicationsModel from '../../../density-buoyancy-common/js/buoyancy/model/BuoyancyApplicationsModel.js';
import BuoyancyApplicationsScreenView from '../../../density-buoyancy-common/js/buoyancy/view/BuoyancyApplicationsScreenView.js';
import DensityBuoyancyCommonColors from '../../../density-buoyancy-common/js/common/view/DensityBuoyancyCommonColors.js';
import Screen from '../../../joist/js/Screen.js';
import buoyancy from '../buoyancy.js';
import buoyancyStrings from '../buoyancyStrings.js';

const screenApplicationsString = buoyancyStrings.screen.applications;

class ApplicationsScreen extends Screen {
  /**
   * @param {Tandem} tandem
   */
  constructor( tandem ) {
    super(
      () => new BuoyancyApplicationsModel( {
        tandem: tandem.createTandem( 'model' )
      } ),
      model => new BuoyancyApplicationsScreenView( model, {
        tandem: tandem.createTandem( 'view' )
      } ),
      {
        name: screenApplicationsString,
        backgroundColorProperty: DensityBuoyancyCommonColors.skyBottomProperty,
        tandem: tandem
      }
    );
  }
}

buoyancy.register( 'ApplicationsScreen', ApplicationsScreen );
export default ApplicationsScreen;