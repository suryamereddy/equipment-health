import { Component, Input } from '@angular/core';
import { Equipment } from 'src/app/models/equipment.model';

@Component({
  selector: 'app-driver-information',
  templateUrl: './driver-information.component.html',
  styleUrls: ['./driver-information.component.scss'],
})
export class DriverInformationComponent {
  @Input() equipment!: Equipment;
}
