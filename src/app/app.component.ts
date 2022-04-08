import { Component, OnInit } from '@angular/core';

import { Equipments } from './data/equipments';
import { Equipment } from './models/equipment.model';
import { DateUtility } from './utilities/date.utility';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'equipment-health';
  equipmentId = '72733';
  equipments: Equipment[] = Equipments;
  equipment!: Equipment;

  constructor(public dateUtility: DateUtility) {}

  ngOnInit(): void {
    this.getEquipmentData();
  }

  getEquipmentData(): void {
    var equipmentData = this.equipments.find(
      (equipemnt) => equipemnt.unitNumber == this.equipmentId
    );

    if (equipmentData) {
      this.equipment = equipmentData;
    } else {
      this.equipment = this.equipments[0];
      this.equipment.unitNumber = this.equipmentId;
    }
  }
}
