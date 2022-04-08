import { Component, Input } from '@angular/core';
import { Equipment } from 'src/app/models/equipment.model';

@Component({
  selector: 'app-tire-health',
  templateUrl: './tire-health.component.html',
  styleUrls: ['./tire-health.component.scss'],
})
export class TireHealthComponent {
  @Input()
  equipment!: Equipment;

  getCssClass(psi: number, isSteer: boolean = false): string {
    if (isSteer) {
      if (psi >= 105) return 'success';
      if (99 < psi && psi < 105) return 'warn';
      return 'error';
    } else {
      if (psi >= 110) return 'success';
      if (104 < psi && psi < 110) return 'warn';
      return 'error';
    }
  }
}
