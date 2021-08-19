// Copyright 2019-2021, University of Colorado Boulder

/**
 * Intro screen for Buoyancy
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */

import BuoyancyShapesModel from '../../../density-buoyancy-common/js/buoyancy/model/BuoyancyShapesModel.js';
import BuoyancyShapesScreenView from '../../../density-buoyancy-common/js/buoyancy/view/BuoyancyShapesScreenView.js';
import DensityBuoyancyCommonColors from '../../../density-buoyancy-common/js/common/view/DensityBuoyancyCommonColors.js';
import Screen from '../../../joist/js/Screen.js';
import buoyancy from '../buoyancy.js';
import buoyancyStrings from '../buoyancyStrings.js';

const screenShapesString = buoyancyStrings.screen.shapes;

class ShapesScreen extends Screen {
  /**
   * @param {Tandem} tandem
   */
  constructor( tandem ) {
    super(
      () => new BuoyancyShapesModel( {
        tandem: tandem.createTandem( 'model' )
      } ),
      model => new BuoyancyShapesScreenView( model, {
        tandem: tandem.createTandem( 'view' )
      } ),
      {
        name: screenShapesString,
        backgroundColorProperty: DensityBuoyancyCommonColors.skyBottomProperty,
        tandem: tandem
      }
    );
  }
}

buoyancy.register( 'ShapesScreen', ShapesScreen );
export default ShapesScreen;