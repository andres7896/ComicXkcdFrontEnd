import { Component, OnInit } from '@angular/core';
import { Comic } from 'src/app/interfaz/comic.interface';
import { ComicService } from '../../services/comic.service';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent implements OnInit {

  comics: Comic;
  qComic: any = {
    num: '',
    score: ''
  }

  constructor(private comicService: ComicService){}

  ngOnInit(): void {
    this.getComics();
  }

  getComics() {
    this.comicService.getComic().subscribe( (res: any) =>{
      if (res != null) {
        console.log('Mostrando comic!');
        this.comics = res;
      } else {
        console.log('Error al traer el comic');
      }
    });
  }

  saveScore(){
    this.comicService.sendScore(this.qComic).subscribe( (res: any) => {
      console.log(this.qComic);
      switch (res.statusCode) {
        case 500:
          console.log('Error del Servidor');
          break;
        case 200:
          console.log('Se agrego el Comic exitosamente');
          break;
        default:
          console.log('Error al agregar el Comic');
          break;
      }
    })
  }

}
