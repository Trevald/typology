import { Injectable } from '@angular/core';

import { COMPOSITION_BLUEPRINT } from './composition.model.blueprint';
import { Composition } from './composition.model';

@Injectable()
export class CompositionService {

  constructor() { }

  getComposition(): Composition {
    return COMPOSITION_BLUEPRINT;
  }

}
