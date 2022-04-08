import { Component, HostListener, Input, OnInit } from '@angular/core';
import TrimbleMaps from '@trimblemaps/trimblemaps-js';
import { Equipment } from 'src/app/models/equipment.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  @Input() set equipment(equipment: Equipment) {
    this.equipmentData = equipment;
    this.addTruckIcon(equipment);
  }
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.addTruckIcon();
  }

  myMap!: TrimbleMaps.Map;
  equipmentData!: Equipment;

  constructor() {
    TrimbleMaps.APIKey = 'B6ED1A19F456AE45BD0A76E3813CC249';
  }

  ngOnInit(): void {
    this.myMap = new TrimbleMaps.Map({
      container: 'map',
      center: new TrimbleMaps.LngLat(
        this.equipmentData.long,
        this.equipmentData.lat
      ),
      zoom: 8,
    });

    this.myMap.on('load', () => {
      this.addTruckIcon(this.equipmentData);
    });
  }

  private addTruckIcon(equipment: Equipment = this.equipmentData): void {
    if (this.myMap) {
      if (this.myMap.getLayer('truckLayer'))
        this.myMap.removeLayer('truckLayer');
      if (this.myMap.getSource('truckLocation'))
        this.myMap.removeSource('truckLocation');

      this.myMap.addSource('truckLocation', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: [
            {
              type: 'Feature',
              properties: {
                name: equipment.driver.name,
              },
              geometry: {
                type: 'Point',
                coordinates: [equipment.long, equipment.lat],
              },
            },
          ],
        },
      });

      this.myMap.addLayer({
        id: 'truckLayer',
        type: 'symbol',
        source: 'truckLocation',
        layout: {
          'icon-image': 'poi_truck',
          'icon-size': 1.5,
        },
      });

      this.myMap.setCenter(
        new TrimbleMaps.LngLat(this.equipmentData.long, this.equipmentData.lat)
      );
    }
  }
}
