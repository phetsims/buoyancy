// Copyright 2019-2022, University of Colorado Boulder

/**
 * Intro screen for Buoyancy
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */

import BuoyancyShapesModel from '../../../density-buoyancy-common/js/buoyancy/model/BuoyancyShapesModel.js';
import BuoyancyShapesScreenView from '../../../density-buoyancy-common/js/buoyancy/view/BuoyancyShapesScreenView.js';
import DensityBuoyancyCommonColors from '../../../density-buoyancy-common/js/common/view/DensityBuoyancyCommonColors.js';
import Screen from '../../../joist/js/Screen.js';
import Tandem from '../../../tandem/js/Tandem.js';
import buoyancy from '../buoyancy.js';
import BuoyancyStrings from '../BuoyancyStrings.js';

export default class ShapesScreen extends Screen<BuoyancyShapesModel, BuoyancyShapesScreenView> {
  public constructor( tandem: Tandem ) {
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
        tandem: tandem
      }
    );
  }
}

buoyancy.register( 'ShapesScreen', ShapesScreen );
