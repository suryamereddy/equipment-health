export interface Equipment {
  equipmentType: string;
  unitNumber: number;
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
  faultCodeText: string;
  faultCodeCount: number;
}
