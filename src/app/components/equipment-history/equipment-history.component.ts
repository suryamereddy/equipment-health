import { Component, Input } from '@angular/core';
import { Equipment } from 'src/app/models/equipment.model';
import { DateUtility } from 'src/app/utilities/date.utility';

@Component({
  selector: 'app-equipment-history',
  templateUrl: './equipment-history.component.html',
  styleUrls: ['./equipment-history.component.scss'],
})
export class EquipmentHistoryComponent {
  @Input()
  equipment!: Equipment;

  constructor(public dateUtility: DateUtility) {}

  getProgress(): number {
    return (this.equipment.faultCodes.length * 50);
  }
}
