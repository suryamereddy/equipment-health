import { Component, OnInit } from '@angular/core';
import { EquipmentQueue } from 'src/app/models/equipment-queue.model';

import { EquipmentQueueData } from '../../data/equipment-queue-data';

@Component({
  selector: 'app-equipment-health-queue',
  templateUrl: './equipment-health-queue.component.html',
  styleUrls: ['./equipment-health-queue.component.scss'],
})
export class EquipmentHealthQueueComponent implements OnInit {
  unitNumber!: number;
  data: EquipmentQueue[] = EquipmentQueueData;
  displayedData: EquipmentQueue[] = [];
  displayedColumns: string[] = [
    'unitNumber',
    'problemSummary',
    'breakdownNumber',
    'roCreatedDate',
    'vendorName',
    'status',
    'statusUpdateDate',
  ];
  constructor() {}

  ngOnInit(): void {
    this.data.sort(
      (a, b) => Date.parse(b.statusUpdateDate) - Date.parse(a.statusUpdateDate)
    );
    this.filterQueue();
  }

  filterQueue(): void {
    if (this.unitNumber) {
      this.displayedData = this.data.filter(
        (item) => item.unitNumber == this.unitNumber
      );
    } else {
      this.displayedData = this.data;
    }
  }
}
