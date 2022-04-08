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
    driver: {
      name: 'John Doe',
      id: 8754657,
      phone: 4025847845,
      status: 'DRIVING',
    },
    tirehealth: {
      rightSteer: 40,
      leftSteer: 40,
      rightFrontOuter: 40,
      rightFrontInner: 40,
      rightRearOuter: 40,
      rightRearInner: 40,
      leftFrontOuter: 40,
      leftFrontInner: 40,
      leftRearOuter: 40,
      leftRearInner: 40,
    },
  };

  constructor(public dateUtility: DateUtility) {}
}
