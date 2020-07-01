import { Component, OnInit } from '@angular/core';
import { Comic } from 'src/app/interfaz/comic.interface';
import { ComicService } from '../../services/comic.service';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent implements OnInit {

  public comics: Comic;
  public QComics: any = {
    num: '',
    score: ''
  };

  constructor(private comicService: ComicService){}

  ngOnInit(): void {
    this.getComics();
  }

  getComics() {
    this.comicService.getComic().subscribe( (res: any) =>{
      if (res != null) {
        console.log('Mostrando comic!');
        this.comics = res;
        console.log(res.num);
      } else {
        console.log('Error al traer el comic');
      }
    });
  }

  saveScore(){
    this.comicService.sendScore(this.QComics).subscribe( (res: any) => {
      if (res.statusCode === 200) {
        console.log('Se agrego el Comic correctamente');
      } else {
        console.log('Error al agregar el comic');
      }
    })
  }

}
