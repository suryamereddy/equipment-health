import { Component, OnInit } from '@angular/core';

import { Equipments } from '../../data/equipments';
import { Equipment } from '../../models/equipment.model';

@Component({
  selector: 'app-equipment-health',
  templateUrl: './equipment-health.component.html',
  styleUrls: ['./equipment-health.component.scss'],
})
export class EquipmentHealth implements OnInit {
  title = 'equipment-health';
  equipmentId = '72733';
  equipments: Equipment[] = Equipments;
  equipment!: Equipment;

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
