import { Component, Input, OnInit } from '@angular/core';

import { RuleLine } from './rule-line.model';

@Component({
  selector: 'app-rule-line',
  templateUrl: './rule-line.component.html',
  styleUrls: ['./rule-line.component.css']
})

export class RuleLineComponent implements OnInit {

  @Input() ruleLine: RuleLine;

  constructor() { }

  ngOnInit() {
    console.log(this.ruleLine);
  }

}
