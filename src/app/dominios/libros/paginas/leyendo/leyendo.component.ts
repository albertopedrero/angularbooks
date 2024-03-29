import { Component, inject } from '@angular/core';
import { LibrosService } from '../../servicios/libros.service';
import { ListadoLibrosComponent } from '../../compartido/listado-libros/listado-libros.component';

@Component({
  selector: 'app-leyendo',
  standalone: true,
  imports: [ListadoLibrosComponent],
  templateUrl: './leyendo.component.html',
  styleUrl: './leyendo.component.css'
})
export class LeyendoComponent {
  private librosService: LibrosService;
  listadoLibros: any;
  constructor(){
    this.librosService = inject(LibrosService);
    this.listadoLibros = this.librosService.getLeyendo();
  }
}
