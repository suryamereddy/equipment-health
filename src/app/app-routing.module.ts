import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipmentHealthQueueComponent } from './components/equipment-health-queue/equipment-health-queue.component';
import { EquipmentHealth } from './components/equipment-health/equipment-health.component';

const routes: Routes = [
  {
    path: '',
    component: EquipmentHealthQueueComponent,
  },
  {
    path: 'health',
    component: EquipmentHealth,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
