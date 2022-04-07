import { Component } from '@angular/core';
import { Driver } from 'src/app/models/driver.model';

@Component({
  selector: 'app-driver-information',
  templateUrl: './driver-information.component.html',
  styleUrls: ['./driver-information.component.scss'],
})
export class DriverInformationComponent {
  driverInfo: Driver = {
    name: 'John Doe',
    id: 8754657,
    phone: 4025847845,
    status: 'DRIVING',
  };
}
