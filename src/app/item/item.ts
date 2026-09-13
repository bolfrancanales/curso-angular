import { Component, HostBinding, input } from '@angular/core';

@Component({
  selector: 'app-item',
  imports: [],
  templateUrl: './item.html',
  styleUrl: './item.css',
})
export class Item {
  @HostBinding('class') cssClass = 'd-block mb-3';

  nombre = input('');
  descripcion = input('');
}