import { Injectable } from '@angular/core';
import moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class DateUtility {
  private dateTimeFormat = 'MM/DD/YYYY HH:mm';
  private chicagoTimeZone = 'America/Chicago';
  private unknownText = 'Unknown';

  constructor() {}

  formatDateToLocal(date: Date, format: string = this.dateTimeFormat): string {
    if (date) {
      return moment.utc(date).local().format(format);
    }
    return this.unknownText;
  }

  /*Preserves offset information in date time while formatting  - returns 'Unknown' on error*/
  formatDatePreserveOffest(
    date: string | Date,
    format: string = this.dateTimeFormat
  ): string {
    if (date) return moment.parseZone(date).format(format);
    return this.unknownText;
  }

  /*Preserves offset information in date time while formatting  - returns empty on error*/
  formatDatePreserveOffestEmpty(
    date: string | Date,
    format: string = this.dateTimeFormat
  ): string {
    const value = this.formatDatePreserveOffest(date, format);
    if (value == this.unknownText) return '';
    return value;
  }

  /*Converts date to browser date time while formatting*/
  formatDateLocalTime(
    date: string | Date,
    format: string = this.dateTimeFormat
  ): string {
    if (date) return moment(date).format(format);
    return this.unknownText;
  }

  /*Converts date time to milliseconds and add additional mintues*/
  convertDateTimeToMiliseconds(
    date: string | Date,
    addExtra: number = 0,
    unit: moment.unitOfTime.DurationConstructor = 'minutes'
  ): number {
    return moment(date).add(addExtra, unit).valueOf();
  }
}
