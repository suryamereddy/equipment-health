import { Component, Input } from '@angular/core';
import { Equipment } from 'src/app/models/equipment.model';
import { DateUtility } from 'src/app/utilities/date.utility';

@Component({
  selector: 'app-equipment-information',
  templateUrl: './equipment-information.component.html',
  styleUrls: ['./equipment-information.component.scss'],
})
export class EquipmentInformationComponent {
  @Input()
  equipment!: Equipment;
  constructor(public dateUtility: DateUtility) {}
}
