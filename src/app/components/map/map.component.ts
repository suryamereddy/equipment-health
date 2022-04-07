import { Component, Input, OnInit } from '@angular/core';
import TrimbleMaps from '@trimblemaps/trimblemaps-js';
import { Equipment } from 'src/app/models/equipment.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  @Input() equipment!: Equipment;
  constructor() {}

  ngOnInit(): void {
    TrimbleMaps.APIKey = 'B6ED1A19F456AE45BD0A76E3813CC249';

    var myMap = new TrimbleMaps.Map({
      container: 'map',
      center: [-91.38, 39],
      zoom: 3,
    });

    myMap.on('load', () => {});
  }
}
