import { Driver } from './driver.model';
import { FaultCode } from './fault-code.model';
import { TireHealth } from './tire-health.model';

export interface Equipment {
  equipmentType: string;
  unitNumber: string;
  owner: string;
  manufacturer: string;
  year: number;
  model: string;
  engineType: string;
  inServiceDate: string;
  vin: string;
  esn: number;
  odometer: number;
  lat: number;
  long: number;
  scheduledMaintenances: string[];
  faultCodeSeverity: string;
  faultCodes: FaultCode[];
  driver: Driver;
  tirehealth: TireHealth;
}
