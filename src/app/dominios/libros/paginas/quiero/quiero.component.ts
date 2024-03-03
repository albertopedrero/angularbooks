import { Component, inject } from '@angular/core';
import { ListadoLibrosComponent } from '../../compartido/listado-libros/listado-libros.component';

import { LibrosService } from '../../servicios/libros.service';

@Component({
  selector: 'app-quiero',
  standalone: true,
  imports: [ListadoLibrosComponent],
  templateUrl: './quiero.component.html',
  styleUrl: './quiero.component.css'
})
export class QuieroComponent {

  listadoLibros:any;
  private librosService : LibrosService;

  constructor(){
    this.librosService = inject(LibrosService);
    this.listadoLibros = this.librosService.getQuiero();
  }

}
