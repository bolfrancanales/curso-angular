import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild
} from '@angular/core';

import mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-mapa',
  imports: [],
  templateUrl: './mapa.html',
  styleUrl: './mapa.css',
})
export class Mapa implements AfterViewInit, OnDestroy {

  @ViewChild('mapa')
  mapaContenedor!: ElementRef<HTMLDivElement>;

  private mapa!: mapboxgl.Map;

  ngAfterViewInit(): void {

    this.mapa = new mapboxgl.Map({
      container: this.mapaContenedor.nativeElement,

      style: {
        version: 8,

        sources: {
          mundo: {
            type: 'geojson',
            data: 'https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json'
          }
        },

        layers: [
          {
            id: 'paises',
            type: 'fill',
            source: 'mundo',
            paint: {
              'fill-color': '#6F788A',
              'fill-outline-color': '#ffffff'
            }
          }
        ]
      },

      center: [-87.2068, 14.0723],
      zoom: 4
    });

    const popup = new mapboxgl.Popup({
      offset: 25
    }).setText('Ubicación registrada - Tegucigalpa');

    new mapboxgl.Marker()
      .setLngLat([-87.2068, 14.0723])
      .setPopup(popup)
      .addTo(this.mapa);
  }

  ngOnDestroy(): void {
    this.mapa?.remove();
  }
}
