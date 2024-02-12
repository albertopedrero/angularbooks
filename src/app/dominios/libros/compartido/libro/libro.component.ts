import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-libro',
  standalone: true,
  imports: [],
  templateUrl: './libro.component.html',
  styleUrl: './libro.component.css'
})
export class LibroComponent {
  @Input() libro:any;
  @Output() libroFavorito = new EventEmitter();
  urlNoImagen = "https://static-00.iconduck.com/assets.00/angular-icon-256x256-8ljgbnzq.png";


  anadirFavoritos(libro:any){
    this.libroFavorito.emit(libro)
  }

}
