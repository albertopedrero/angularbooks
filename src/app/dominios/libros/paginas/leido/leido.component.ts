import { Component, inject } from '@angular/core';
import { LibrosService } from '../../servicios/libros.service';
import { ListadoLibrosComponent } from '../../compartido/listado-libros/listado-libros.component';

@Component({
  selector: 'app-leido',
  standalone: true,
  imports: [ListadoLibrosComponent],
  templateUrl: './leido.component.html',
  styleUrl: './leido.component.css'
})
export class LeidoComponent {
  private librosService: LibrosService;
  listadoLibros: any;
  constructor(){
    this.librosService = inject(LibrosService);
    this.listadoLibros = this.librosService.getLeidos();
  }
}
