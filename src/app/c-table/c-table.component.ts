import { Component, OnInit } from '@angular/core';
// cTable stands for CustomTableComponent
// El componente cTableComponent se encarga de mostrar la tabla con los datos
// consumidos de una api o por defecto una lista fija de datos
@Component({
  selector: 'app-c-table',
  templateUrl: './c-table.component.html',
  styleUrls: ['./c-table.component.scss'],

})
export class CTableComponent  implements OnInit {
  data: any[] = [] ; // Arreglo que contendrá los datos de la tabla;
  apiUrl: string = 'https://example.com/api/data';
  ionHtmlView: string = "";
  constructor() { 
    // Definimos la lista de datos que se mostrará en la tabla
    this.data = [
      { Evaluacion: 'Evaluacion 1', Notas: 6.1, Fecha: '24/09/24' },
      { Evaluacion: 'Evaluacion 2', Notas: 5.1, Fecha: '13/10/24' },
      { Evaluacion: 'Evaluacion 3', Notas: 4.2, Fecha: '04/11/24' },
      { Evaluacion: 'Evaluacion 4', Notas: 2.8, Fecha: '16/12/24' },
    ];
  }

  ngOnInit() {
  }

}
