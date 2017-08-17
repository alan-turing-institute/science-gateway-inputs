import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import {IonRangeSliderModule} from 'ng2-ion-range-slider';
import { OutputComponent } from './output.component';
import { OutputRoutingModule } from './output-routing.module';
import { OutputService } from './output.service';
import { VtkModule} from '../vtk.module';

import {NgxChartsModule} from '@swimlane/ngx-charts';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ChartsComponent } from './chart';

import {ConfigModule} from '../config/config.module'

//import { DROPDOWN_DIRECTIVES } from '../shared/dropdown.directive';

@NgModule({
  imports: [
    OutputRoutingModule,
    ChartsModule,
    FormsModule,
    IonRangeSliderModule,
    CommonModule,
    VtkModule,
    ConfigModule,
    NgxChartsModule
  ],
  declarations: [OutputComponent,
                  ChartsComponent//,
//                DROPDOWN_DIRECTIVES
              ],
  providers : [OutputService]
})
export class OutputModule { }
