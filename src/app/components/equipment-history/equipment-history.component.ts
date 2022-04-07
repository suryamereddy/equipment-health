import { Component, Input, OnInit } from '@angular/core';
import { Equipment } from 'src/app/models/equipment.model';

@Component({
  selector: 'app-equipment-history',
  templateUrl: './equipment-history.component.html',
  styleUrls: ['./equipment-history.component.scss'],
})
export class EquipmentHistoryComponent implements OnInit {
  @Input()
  equipment!: Equipment;

  constructor() {}

  ngOnInit(): void {}
}
