import { Component, OnInit } from '@angular/core';

import { CompositionService } from './composition.service';

import { Composition } from './composition.model';
import { Rule } from './../rule';

@Component({
  providers: [
    CompositionService
  ],
  selector: 'app-composition',
  templateUrl: './composition.component.html',
  styleUrls: ['./composition.component.css']
})
export class CompositionComponent implements OnInit {

  composition: Composition;
  rules: Rule[];

  constructor(private compositionService: CompositionService) {
    this.composition = this.compositionService.getComposition();
    this.rules = this.composition.rules;
    console.log(this.composition);
  }


  ngOnInit() {}

}
