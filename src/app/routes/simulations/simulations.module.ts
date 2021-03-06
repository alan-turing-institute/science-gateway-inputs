import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { SimulationsRoutingModule } from './simulations-routing.module';

import { ComponentsModule } from './components';

import { CreateComponent } from './pages/create.component';
import { ViewComponent } from './pages/view.component';
import { CreateSimulationComponent } from './pages/create-simulation.component';
import { ConfigureSimulationComponent } from './pages/configure-simulation.component';
import { ViewSimulationComponent } from './pages/view-simulation.component';
import { RedirectComponent } from './pages/redirect.component';

const PAGECOMPONENTS = [
  CreateComponent,
  ViewComponent,
  CreateSimulationComponent,
  ConfigureSimulationComponent,
  ViewSimulationComponent,
  RedirectComponent,
];

@NgModule({
  imports: [SharedModule, SimulationsRoutingModule, ComponentsModule],
  providers: [],
  declarations: [...PAGECOMPONENTS],
})
export class SimulationsModule {}
