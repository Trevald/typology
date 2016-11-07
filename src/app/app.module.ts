import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CompositionComponent } from './composition/composition.component';
import { RuleComponent, RuleLineComponent } from './rule';
import { BreakpointComponent } from './breakpoint/breakpoint.component';

import { CompositionService } from './composition/composition.service';

@NgModule({
  declarations: [
    AppComponent,
    CompositionComponent,
    RuleComponent,
    RuleLineComponent,
    BreakpointComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [
    CompositionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
