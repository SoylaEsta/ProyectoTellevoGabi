import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.scss'],
})
export class VehiculoComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  brand: string;
  model: string;
  year: number;

  registerVehicle() {
    // Aquí debes capturar los valores del formulario y realizar el registro.
    // Puedes almacenarlos en una base de datos o en el almacenamiento local.
  }

}
