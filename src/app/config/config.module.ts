import { NgModule } from '@angular/core';
import { ConfigRoutingModule } from './config-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonRangeSliderModule } from "ng2-ion-range-slider";
import { ConfigComponent } from './config.component';
import { CaseDescriptionComponent } from '../components/description/description.component';
import { ConfigDataService } from './configData.service';
import { TextInputComponent } from '../components/text/text.component';
import { SliderInputComponent } from '../components/slider/slider.component';
import { PipeModule} from '../components/pipe/pipe.module';
// import { TabsModule } from 'ngx-bootstrap/tabs';

// import { ModalModule } from 'ngx-bootstrap/modal';
// import { ModalContentComponent } from  './config.component';

// import { ParametersComponent} from './parameters.component';
// import { DescriptionComponent} from './description.component';

@NgModule({
  imports: [
    ConfigRoutingModule,
    CommonModule,
    FormsModule,
    IonRangeSliderModule,
    PipeModule,
    // TabsModule.forRoot(),
    // ModalModule.forRoot()
  ],
  declarations: [
    ConfigComponent,
    CaseDescriptionComponent,
    TextInputComponent,
    SliderInputComponent,
    // ModalContentComponent
  ],
  providers: [
    ConfigDataService,
    // OutputService
  ],
  exports: [
    // ConfigComponent,
    // CaseDescriptionComponent
  ],
  // entryComponents: [
  //  ModalContentComponent
  // ]
})

export class ConfigModule { }
