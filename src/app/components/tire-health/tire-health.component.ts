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
}
