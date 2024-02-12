import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LibroComponent } from '../libro/libro.component';
@Component({
  selector: 'app-listado-libros',
  standalone: true,
  imports: [LibroComponent],
  templateUrl: './listado-libros.component.html',
  styleUrl: './listado-libros.component.css'
})
export class ListadoLibrosComponent {

  @Input() listadoLibros:any = [];
  @Output() enviarPrincipal = new EventEmitter();


  anadirFavoritoPadre(libro:any){
    console.log(`estoy en el componente listado-libros y recibo del componente libro el título ${libro.volumeInfo.title}`);
    this.enviarPrincipal.emit(libro);

  }
}
