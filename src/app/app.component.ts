import { Component } from '@angular/core';

import { Equipment } from './models/equipment.model';
import { DateUtility } from './utilities/date.utility';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'equipment-health';
  equipmentId = '12456465';

  equipment: Equipment = {
    equipmentType: 'Tractor',
    unitNumber: 74512,
    owner: 'WERNER ENTERPRISES',
    manufacturer: 'INT',
    year: 2019,
    model: 'LT625',
    engineType: 'X15',
    inServiceDate: '02/20/2019',
    vin: '3HSDZAPROKJN315335',
    esn: 80128966,
    odometer: 441074,
    lat: 94.0,
    long: 98.0,
    scheduledMaintenances: ['REPLACE BRAKE PADS', 'NAVIGO 17.1 UPDATE'],
    faultCodeSeverity: 'high',
    faultCodeText: 'Update Navigo',
    faultCodeCount: 2,
  };

  constructor(public dateUtility: DateUtility) {}
}
