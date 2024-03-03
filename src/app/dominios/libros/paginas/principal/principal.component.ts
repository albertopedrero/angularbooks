import { Component, inject } from '@angular/core';
import { ListadoLibrosComponent } from '../../compartido/listado-libros/listado-libros.component';

import { LibrosService } from '../../servicios/libros.service';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [ListadoLibrosComponent],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

  private lisbrosService: LibrosService;

  listadoLibros: any;
  constructor(){
    this.lisbrosService = inject(LibrosService);
    this.listadoLibros = this.lisbrosService.getTodos();
  }


  anadirFavoritoPrincipal(libro:any){
    console.log(`en componente principal recibio el título ${libro.volumeInfo.title}`)
  }

}
